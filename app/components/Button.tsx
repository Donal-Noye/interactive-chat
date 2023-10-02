"use client";

import clsx from "clsx";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  fullWidth?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  danger,
  disabled,
  onClick,
  fullWidth,
  secondary,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(
        "button",
        disabled && "opacity-50 cursor-default",
        fullWidth && "w-full",
        secondary ? "text-gray hover:text-white" : "text-dark1",
        danger &&
          "bg-rose-500 hover:bg-rose-600 text-white focus-visible:outline-rose-600",
        !secondary &&
          !danger &&
          "bg-gold hover:bg-opacity-80 focus-visible:outline-gold",
      )}
    >
      {children}
    </button>
  );
};

export default Button;
