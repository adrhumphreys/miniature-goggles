import type { Editor } from "@tiptap/core";
import classNames from "classnames";
import { FC } from "react";

type Props = {
  editor?: Editor;
  onClick: () => void;
  activeId?: string;
};

const Button: FC<Props> = ({ editor, children, onClick, activeId }) => (
  <button
    onClick={onClick}
    className={classNames(
      "py-1 px-2 first-of-type:rounded-l last-of-type:rounded-r",
      editor?.isActive(activeId ?? "") ? "bg-indigo-600 text-white" : "bg-white"
    )}
  >
    {children}
  </button>
);

export default Button;
