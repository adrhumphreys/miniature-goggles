import classNames from "classnames";
import type { FC, ReactNode } from "react";

type Props = {
  secondary?: ReactNode;
  switchOnSmall?: boolean;
};

const TwoColumn: FC<Props> = ({ children, secondary, switchOnSmall }) => {
  return (
    <div
      className={classNames(
        "flex h-full",
        switchOnSmall ? "flex-row-reverse lg:flex-row" : ""
      )}
    >
      <section
        className={classNames(
          "relative flex h-full w-full shrink-0 flex-col overflow-y-auto border-r border-gray-200 bg-white lg:w-96",
          switchOnSmall ? "hidden lg:block" : ""
        )}
      >
        {children}
      </section>

      <section
        className={classNames(
          "w-full overflow-y-auto lg:block",
          switchOnSmall ? "" : "hidden"
        )}
      >
        <div className="h-full w-full">{secondary}</div>
      </section>
    </div>
  );
};

export default TwoColumn;
