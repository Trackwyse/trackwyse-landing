/*
 * Created on Sun Jan 15 2023
 * Created by JS00001
 *
 * Copyright (c) 2023 Trackwyse
 */

import cn from "classnames";

const textVariantClasses = {
  default: "",
  header: "lg:text-6xl font-medium leading-tight text-4xl",
  title: "text-2xl font-semibold",
  subtitle: "text-base  text-gray-500",
};

interface TextProps {
  variant?: keyof typeof textVariantClasses;
  children: React.ReactNode;
  className?: string;
}

const Text: React.FC<TextProps> = ({ children, className, variant = "default" }) => {
  const textClasses = cn(textVariantClasses[variant], className);

  return <p className={textClasses}>{children}</p>;
};

export default Text;
