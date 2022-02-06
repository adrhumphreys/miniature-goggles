import type { FC, ReactNode } from "react";

type Props = {
  secondary?: ReactNode;
};

const TwoColumn: FC<Props> = ({ children, secondary }) => {
  return (
    <>
      <section className="relative flex h-full w-96 shrink-0 flex-col overflow-y-auto border-r border-gray-200 bg-white">
        {children}
      </section>

      <section className="hidden overflow-y-auto lg:block lg:w-full">
        <div className="h-full w-full">{secondary}</div>
      </section>
    </>
  );
};

export default TwoColumn;
