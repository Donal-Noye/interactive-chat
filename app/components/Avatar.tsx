"use client";

import {User} from "@prisma/client";
import Image from "next/image";
import useActiveList from "@/app/hooks/useActiveList";

interface AvatarProps {
	user?: User,
}

const Avatar: React.FC<AvatarProps> = ({user}) => {
	const { members } = useActiveList();
	const isActive = members.indexOf(user?.email!) !== -1;

	return (
		<div className="relative">
			<div
				className="
				relative
				inline-block
				rounded-full
				overflow-hidden
				h-9
				w-9
				md:h-12
				md:w-12
			">
				<Image fill src={user?.image || '/images/placeholder.jpg'} alt="Avatar" />
			</div>
			{isActive ? (
				<span
					className="
            absolute
            block
            rounded-full
            bg-green-500
            ring-2
            ring-white
            top-[3px]
            right-[3px]
            h-2
            w-2
          "
				/>
			) : null}
		</div>
	);
};

export default Avatar;
