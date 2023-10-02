"use client";

import Link from "next/link";
import clsx from "clsx";

interface DesktopItemProps {
  label: string;
  icon: any;
  href: string;
  onClick?: () => void;
  active?: boolean;
}

const DesktopItem: React.FC<DesktopItemProps> = ({
  label,
  active,
  icon: Icon,
  href,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) return onClick();
  };

  return (
    <li onClick={handleClick}>
      <Link
        href={href}
        className={clsx(
          `
					group
					flex
					gap-x-3
					rounded-md
					p-3
					leading-6
					font-semibold
					hover:text-white
					hover:bg-gold
					hover:bg-opacity-10
					transition-colors
				`,
          active ? "text-white bg-gold bg-opacity-10" : "text-gray",
        )}
      >
        <Icon className="h-6 w-6 shrink-0" />
        <span className="sr-only">{label}</span>
      </Link>
    </li>
  );
};

export default DesktopItem;
