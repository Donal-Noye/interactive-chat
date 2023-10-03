"use client";

import {FullConversationType} from "@/app/types";
import {useEffect, useMemo, useState} from "react";
import {useRouter} from "next/navigation";
import useConversation from "@/app/hooks/useConversation";
import clsx from "clsx";
import {MdOutlineGroup} from "react-icons/md";
import ConversationBox from "@/app/conversations/components/ConversationBox";
import GroupChatModal from "@/app/conversations/components/GroupChatModal";
import {User} from "@prisma/client";
import {useSession} from "next-auth/react";
import {pusherClient} from "@/app/libs/pusher";
import {find} from "lodash";

interface ConversationListProps {
	initialItems: FullConversationType[];
	users: User[];
}

const ConversationList: React.FC<ConversationListProps> = ({
  initialItems,
  users,
}) => {
	const session = useSession();
	const [items, setItems] = useState(initialItems);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const router = useRouter();

	const {conversationId, isOpen} = useConversation();

	const pusherKey = useMemo(() => {
		return session.data?.user?.email;
	}, [session.data?.user?.email]);

	useEffect(() => {
		if (!pusherKey) return;

		pusherClient.subscribe(pusherKey);

		const newHandler = (conversation: FullConversationType) => {
			setItems((current) => {
				if (find(current, {id: conversation.id})) {
					return current;
				}

				return [conversation, ...current];
			});
		};

		pusherClient.bind("conversation:new", newHandler);

		const updateHandler = (conversation: FullConversationType) => {
			setItems((current) =>
				current.map((currentConversation) => {
					if (currentConversation.id === conversation.id) {
						return {
							...currentConversation,
							messages: conversation.messages,
						};
					}

					return currentConversation;
				}),
			);
		};

		const removeHandler = (conversation: FullConversationType) => {
			setItems((current) => {
				return [...current.filter((convo) => convo.id !== conversation.id)];
			});

			if (conversationId === conversation.id) {
				router.push('/conversations')
			}
		};

		pusherClient.bind("conversation:new", newHandler);
		pusherClient.bind("conversation:update", updateHandler);
		pusherClient.bind("conversation:remove", removeHandler);

		return () => {
			pusherClient.unsubscribe(pusherKey);
			pusherClient.unbind("conversation:new", newHandler);
			pusherClient.unbind("conversation:update", updateHandler);
			pusherClient.unbind("conversation:remove", removeHandler);
		};
	}, [pusherKey, conversationId, router]);

	return (
		<>
			<GroupChatModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				users={users}
			/>
			<aside
				className={clsx("conversation-sidebar",
					isOpen ? "hidden" : "block w-full left-0",
				)}
			>
				<div className="flex justify-between mb-4 pt-4 px-5">
					<h2 className="text-2xl font-bold">Messages</h2>
					<button
						onClick={() => setIsModalOpen(true)}
						className="rounded-full p-2 bg-gold bg-opacity-10 cursor-pointer hover:opacity-75 transition"
					>
						<MdOutlineGroup size={20}/>
					</button>
				</div>
				{items.map((item) => (
					<ConversationBox
						key={item.id}
						data={item}
						selected={conversationId === item.id}
					/>
				))}
			</aside>
		</>
	);
};

export default ConversationList;
