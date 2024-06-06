import { Typography } from "@/types/typography";

export const Small = (props: Typography) => {
  const { children } = props;
  return <small className="text-sm font-medium leading-none">{children}</small>;
};
