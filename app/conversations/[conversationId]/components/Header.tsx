"use client";

import { Conversation, User } from "@prisma/client";
import useOtherUser from "@/app/hooks/useOtherUser";
import {useMemo, useState} from "react";
import Link from "next/link";
import { HiChevronLeft, HiEllipsisVertical } from "react-icons/hi2";
import Avatar from "@/app/components/Avatar";
import ProfileDrawer from "@/app/conversations/[conversationId]/components/ProfileDrawer";
import AvatarGroup from "@/app/components/AvatarGroup";
import useActiveList from "@/app/hooks/useActiveList";

interface HeaderProps {
  conversation: Conversation & {
    users: User[];
  };
}

const Header: React.FC<HeaderProps> = ({ conversation }) => {
  const otherUser = useOtherUser(conversation);
	const [drawerOpen, setDrawerOpen] = useState(false);

	const {members} = useActiveList()
	const isActive = members.indexOf(otherUser?.email!) !== -1

	const statusText = useMemo(() => {
    if (conversation.isGroup) {
      return `${conversation.users.length} members`;
    }

    return isActive ? "Active" : "Offline";
  }, [conversation, isActive]);

  return (
		<>
			<ProfileDrawer
				data={conversation}
				isOpen={drawerOpen}
				onClose={() => setDrawerOpen(false)}
			/>
			<header className="header">
				<div className="flex gap-2.5 items-center cursor-pointer" onClick={() => setDrawerOpen(true)}>
					<Link
						className="lg:hidden block text-white hover:text-gray transition cursor-pointer"
						href="/conversations"
					>
						<HiChevronLeft size={32} />
					</Link>
					{conversation.isGroup ? (
						<AvatarGroup users={conversation.users} />
					) : <Avatar user={otherUser} />}
					<div className="flex flex-col">
						<p>{conversation.name || otherUser.name}</p>
						<p className="font-light text-gray">{statusText}</p>
					</div>
				</div>
				<HiEllipsisVertical
					size={28}
					onClick={() => setDrawerOpen(true)}
					className="cursor-pointer text-white hover:text-gray transition"
				/>
			</header>
		</>
  );
};

export default Header;
