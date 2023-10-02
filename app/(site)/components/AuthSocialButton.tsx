"use client";

import Image from "next/image";

interface AuthSocialButtonProps {
  icon: string;
  onClick: () => void;
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
  onClick,
  icon,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
				inline-flex
				w-full
				justify-center
				rounded-md
				bg-dark1
				px-4
				py-2
				text-white
				shadow-sm
				ring-1
				ring-inset
				ring-gray-300
				hover:bg-opacity-0
				transition-colors
				focus:outline-offset-0
			"
    >
      <Image width={28} height={28} src={icon} alt="" />
    </button>
  );
};

export default AuthSocialButton;
