import { useState } from 'react';


interface FloatingLabelInputProps {
  labelName: string;
}


const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({ labelName }) => {
    const [value, setValue] = useState<string>("");
    const [isInputFocused, setIsInputFocused] = useState(false);

    const handleFocus = () => setIsInputFocused(true);
    const handleBlur = () => setIsInputFocused(false || value.length > 0);

    const labelStyle = `absolute py-1 left-2 transition-all px-1 text-[#D80000] text-[12px] ${
        isInputFocused || value
            ? 'top-[-13px] bg-white rounded-[5px]'
            : 'top-1/2 transform -translate-y-1/2'
    }`;

    return (
        <div className="relative md:2/4 lg:w-1/4">
            <label htmlFor="floating-label-input" className={labelStyle}>
            {labelName}:
            </label>
            <input
            type="text"
            id="floating-label-input"
            name="floating-label-input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="block w-full px-3 h-12 bg-white border border-gray-300 rounded-md shadow-sm text-[12px] text-[#656363] font-bold focus:outline-none focus:ring-1"
            />
        </div>
    );
};

export default FloatingLabelInput;
