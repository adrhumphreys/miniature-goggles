import type { FC, ReactNode } from "react";

type Props = {
  secondary?: ReactNode;
};

const TwoColumn: FC<Props> = ({ children, secondary }) => {
  return (
    <div className="flex h-full">
      <section className="relative flex h-full w-full shrink-0 flex-col overflow-y-auto border-r border-gray-200 bg-white lg:w-96">
        {children}
      </section>

      <section className="hidden overflow-y-auto lg:block lg:w-full">
        <div className="h-full w-full">{secondary}</div>
      </section>
    </div>
  );
};

export default TwoColumn;
