/*
 * Created on Fri Feb 10 2023
 * Created by JS00001
 *
 * Copyright (c) 2023 Trackwyse
 */

import cn from "classnames";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  className?: string;
  containerClassName?: string;
  multiline?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({
  placeholder,
  disabled,
  error,
  className,
  containerClassName,
  multiline,
  ...props
}) => {
  const containerClassnames = cn("group relative", containerClassName);

  const textAreaClassnames = cn(
    "peer border-gray-200 border px-3 py-3 rounded-md bg-transparent text-base w-full",
    "hover:ring-4 hover:ring-gray-100 hover:border-gray-400",
    "focus:outline-none focus:border-primary-200 pb-1 py-5",
    "placeholder:opacity-0",

    error && "border-red-500",
    disabled && "border-gray-100 cursor-not-allowed",
    disabled && "hover:ring-0 hover:border-gray-100",
    className
  );

  const labelClassnames = cn(
    "absolute left-3 -z-10 text-gray-400 text-xs top-1",
    "pointer-events-none transition-all duration-300",
    "peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base",
    "group-focus-within:!text-primary-200 group-focus-within:!top-1 group-focus-within:!text-xs"
  );

  return (
    <div className={containerClassnames}>
      <textarea
        disabled={disabled}
        placeholder={placeholder}
        className={textAreaClassnames}
        {...props}
      />
      <label className={labelClassnames}>{placeholder}</label>
      <p className="mt-1 whitespace-pre-wrap text-sm text-red-500">{error}</p>
    </div>
  );
};

export default TextArea;
