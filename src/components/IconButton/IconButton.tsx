/*
 * Created on Mon Jan 16 2023
 * Created by JS00001
 *
 * Copyright (c) 2023 Trackwyse
 */
import cn from "classnames";
import * as Ionicons from "react-icons/io5";

const colorClasses = {
  primary: cn(
    "bg-primary-200 text-white",
    "hover:bg-primary-100 hover:transition-colors hover:duration-500",
    "focus:ring-2 focus:ring-gray-300 focus:transition-shadow focus:duration-150"
  ),
  secondary: cn(
    "bg-gray-100 text-primary-200",
    "hover:bg-gray-200 hover:transition-colors hover:duration-500",
    "focus:ring-2 focus:ring-gray-300 focus:transition-shadow focus:duration-150"
  ),
};

interface IconButtonProps {
  icon: keyof typeof Ionicons;
  color?: keyof typeof colorClasses;
  size?: number;
  filled?: boolean;
  rounded?: boolean;
  className?: string;
  clickable?: boolean;
  onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  filled,
  onClick,
  size = 24,
  rounded = false,
  clickable = false,
  color = "primary",
  className,
}) => {
  const Icon = icon && Ionicons[icon];

  const containerClasses = cn(
    "flex items-center justify-center",
    filled && "p-2",
    filled && colorClasses[color],

    clickable && "cursor-pointer",
    rounded ? "rounded-full" : "rounded-lg",
    className
  );

  return (
    <button className={containerClasses} disabled={clickable} onClick={onClick}>
      <Icon size={size} />
    </button>
  );
};

export default IconButton;
