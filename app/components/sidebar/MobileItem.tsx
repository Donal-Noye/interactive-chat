"use client";

import Link from "next/link";
import clsx from "clsx";

interface MobileItemProps {
  icon: any;
  href: string;
  onClick?: () => void;
  active?: boolean;
}

const MobileItem: React.FC<MobileItemProps> = ({
  active,
  icon: Icon,
  href,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) return onClick();
  };

  return (
    <Link
      onClick={handleClick}
      href={href}
      className={clsx(`group mobile-item`, active && "bg-gold bg-opacity-10")}
    >
      <Icon className="h-7 w-7" />
    </Link>
  );
};

export default MobileItem;
