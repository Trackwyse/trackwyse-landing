/*
 * Created on Sun Jan 15 2023
 * Created by JS00001
 *
 * Copyright (c) 2023 Trackwyse
 */

import cn from "classnames";
import * as Ionicons from "react-icons/io5";

const colorClasses = {
  primary: cn(
    "bg-primary-200 text-white",
    "disabled:bg-gray-200 disabled:text-gray-400",
    "hover:bg-primary-100 hover:transition-colors hover:duration-500",
    "focus:ring-4 focus:ring-gray-300 focus:transition-shadow focus:duration-150"
  ),
  secondary: cn(
    "bg-gray-100 text-primary-200",
    "disabled:bg-gray-200 disabled:text-gray-400",
    "hover:bg-gray-200 hover:transition-colors hover:duration-500",
    "focus:ring-4 focus:ring-gray-300 focus:transition-shadow focus:duration-150"
  ),
};

interface ButtonProps {
  children: React.ReactNode;
  color?: keyof typeof colorClasses;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  iconRight?: keyof typeof Ionicons;
  iconLeft?: keyof typeof Ionicons;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  iconRight,
  iconLeft,
  loading = false,
  disabled = false,
  color = "primary",
}) => {
  const containerClasses = cn(
    "relative flex items-center justify-center rounded-lg text-white text-base py-4 px-8",
    colorClasses[color],
    className
  );

  const IconLeft = iconLeft && Ionicons[iconLeft];
  const IconRight = iconRight && Ionicons[iconRight];

  return (
    <button disabled={disabled || loading} onClick={onClick} className={containerClasses}>
      <div className={loading ? "opacity-0" : ""}>
        {IconLeft && <IconLeft className="mr-2" size={16} />}
        {children}
        {IconRight && <IconRight className="ml-2" size={16} />}
      </div>
      {loading && <Ionicons.IoAperture className="absolute animate-spin" size={24} />}
    </button>
  );
};

export default Button;
