import { Typography } from "@/types/typography";

export const P = (props: Typography) => {
  const { children } = props;
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
};
