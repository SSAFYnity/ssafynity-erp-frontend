import { Typography } from "@/types/typography";

export const Blockquote = (props: Typography) => {
  const { children } = props;
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
  );
};
