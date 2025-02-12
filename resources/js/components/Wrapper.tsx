import clsx from "clsx";
import { HTMLAttributes, PropsWithChildren } from "react";

interface WrapperProps extends HTMLAttributes<HTMLDivElement> {}

export default function Wrapper({
  children,
  className,
  ...rest
}: PropsWithChildren<WrapperProps>) {
  return (
    <section
      className={clsx(
        "sm:gap=12 relative mx-auto mt-16 flex min-h-[calc(100vh_-_128px)] w-full flex-col gap-8 p-4 text-foreground",
        className,
      )}
      {...rest}
    >
      {children}
    </section>
  );
}
