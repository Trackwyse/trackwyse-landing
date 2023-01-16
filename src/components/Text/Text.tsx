import cn from "classnames";

const textVariantClasses = {
  default: "",
  header: "text-6xl font-medium",
  title: "text-2xl font-medium",
  subtitle: "text-base font-medium",
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
