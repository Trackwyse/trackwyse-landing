/*
 * Created on Sun Jan 15 2023
 * Created by JS00001
 *
 * Copyright (c) 2023 Trackwyse
 */
import cn from "classnames";

interface ContainerProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  includeCols?: boolean;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  includeCols = true,
  ...props
}) => {
  const containerClasses = cn(
    "w-full",
    "2xl:px-96",
    "xl:px-64",
    "lg:px-16",
    "md:px-16",
    "sm:px-16",
    // Have two columns for all screens above lg.
    includeCols && "lg:grid lg:grid-cols-2",
    // Include custom class name if provided.
    className
  );

  return (
    <div className={containerClasses} {...props}>
      {children}
    </div>
  );
};

export default Container;
