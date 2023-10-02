"use client";

import ReactSelect from "react-select";

interface SelectProps {
  label: string;
  value?: Record<string, any>;
  onChange: (value: Record<string, any>) => void;
  options: Record<string, any>[];
  disabled?: boolean;
}

const Select: React.FC<SelectProps> = ({
  label,
  value,
  onChange,
  options,
  disabled,
}) => {
  return (
	  <div className="z-[100]">
		  <label className="block font-medium leading-6">

		  </label>
		  <div className="mt-2">
				<ReactSelect
					isDisabled={disabled}
					value={value}
					onChange={onChange}
					isMulti
					options={options}
					menuPortalTarget={document.body}
					styles={{
						menuPortal: (base) => ({
							...base,
							zIndex: 9999,
						}),
						control: (base, state) => ({
							...base,
							background: "#1D1E22",
						}),
						menuList: styles => ({
							...styles,
							background: '#1D1E22'
						}),
					}}
					classNames={{
						control: () => "text-sm"
					}}
				/>
		  </div>
	  </div>
  );
};

export default Select;
