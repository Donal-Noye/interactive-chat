"use client";

import { FullMessageType } from "@/app/types";
import { useSession } from "next-auth/react";
import clsx from "clsx";
import { format } from "date-fns";
import Image from "next/image";
import { useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import ImageModal from "@/app/conversations/[conversationId]/components/ImageModal";

interface MessageBoxProps {
  isLast?: boolean;
  data: FullMessageType;
}

const MessageBox: React.FC<MessageBoxProps> = ({ data, isLast }) => {
  const session = useSession();
  const [imageModalOpen, setImageModalOpen] = useState(false);

  const isOwn = session?.data?.user?.email === data?.sender?.email;
  const seenList = (data.seen || [])
    .filter((user) => user.email !== data?.sender?.email)
    .map((user) => user.name)
    .join(", ");

  const container = clsx("flex gap-3 p-4", isOwn && "justify-end");

  const body = clsx("flex flex-col gap-2", isOwn && "items-end");

  const message = clsx(
    "w-fit overflow-hidden leading-5 text-base",
    isOwn ? "bg-light-green text-dark1" : "bg-dark2 text-white",
    data.image ? "rounded-md p-0 bg-transparent" : "rounded p-2",
    data.body && data.body.length > 50 && "text-sm",
    data.body && data.body.length > 100 && "text-xs",
  );

  return (
    <div className={container}>
      <div className={body}>
        <div className="flex items-center gap-2">
          <div className={message}>
            <ImageModal
              src={data.image}
              isOpen={imageModalOpen}
              onClose={() => setImageModalOpen(false)}
            />
            {data.image ? (
              <Image
                onClick={() => setImageModalOpen(true)}
                className="
								object-cover
								cursor-pointer
								translate
							"
                height={288}
                width={288}
                src={data.image}
                alt="Image"
              />
            ) : (
              <p>{data.body}</p>
            )}
          </div>
          {isLast && isOwn && seenList.length > 0 && (
            <BsCheckLg className="text-light-green" size={18} />
          )}
        </div>
        <div className="text-xs text-gray">
          {format(new Date(data.createdAt), "p")}
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
