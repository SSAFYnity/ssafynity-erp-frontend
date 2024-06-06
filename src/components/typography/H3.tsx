import { Typography } from "@/types/typography";

export const H3 = (props: Typography) => {
  const { children } = props;
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  );
};
