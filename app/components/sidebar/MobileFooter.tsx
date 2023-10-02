"use client";

import {useRouter} from "next/navigation";
import useConversation from "@/app/hooks/useConversation";
import useRoutes from "@/app/hooks/useRoutes";
import MobileItem from "@/app/components/sidebar/MobileItem";

const MobileFooter = () => {
	const routes = useRoutes()
	const {isOpen} = useConversation();

	if (isOpen) return null

	return (
		<div className="mobile-footer">
			{routes.map(route => (
				<MobileItem
					key={route.href}
					href={route.href}
					active={route.active}
					icon={route.icon}
					onClick={route.onClick}
				/>
			))}
		</div>
	);
};

export default MobileFooter;
