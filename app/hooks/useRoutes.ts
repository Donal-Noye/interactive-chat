import { usePathname } from "next/navigation";
import useConversation from "@/app/hooks/useConversation";
import { signOut } from "next-auth/react";
import {HiChat, HiUsers} from "react-icons/hi";
import {HiArrowLeftOnRectangle} from "react-icons/hi2";

const useRoutes = () => {
  const pathname = usePathname();
  const { conversationId } = useConversation();

  const routes = [
    {
      label: "Chat",
	    icon: HiChat,
      href: "/conversations",
      active: pathname === "/conversations" || !!conversationId,
    },
    {
      label: "Users",
	    icon: HiUsers,
      href: "/users",
      active: pathname === "/users",
    },
    {
      label: "Logout",
	    icon: HiArrowLeftOnRectangle,
      href: "#",
      onClick: () => signOut(),
    },
  ];

  return routes;
};

export default useRoutes;
