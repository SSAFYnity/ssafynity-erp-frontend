import { Typography } from "@/types/typography";

export const H1 = (props: Typography) => {
  const { children } = props;
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </h1>
  );
};
