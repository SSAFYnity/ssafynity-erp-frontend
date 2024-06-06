import { Typography } from "@/types/typography";

export const H4 = (props: Typography) => {
  const { children } = props;
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {children}
    </h4>
  );
};
