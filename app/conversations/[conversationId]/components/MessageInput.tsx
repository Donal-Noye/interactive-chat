"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface MessageInputProps {
  id: string;
  register: UseFormRegister<FieldValues>;
  required?: boolean;
  placeholder?: string;
  type?: string;
  errors: FieldErrors;
}

const MessageInput: React.FC<MessageInputProps> = ({
  id,
  register,
  errors,
  type,
  required,
  placeholder,
}) => {
  return (
    <div className="relative w-full">
      <input
        type={type}
        id={id}
        autoComplete={id}
        {...register(id, { required })}
        placeholder={placeholder}
        className="
	        text-white
	        leading-5
          py-2
          px-3
          bg-[#26272D]
          placeholder-gray
          w-full
          rounded-lg
          focus:outline-none
        "
      />
    </div>
  );
};

export default MessageInput;
