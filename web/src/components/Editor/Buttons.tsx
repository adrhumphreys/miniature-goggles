import { FC } from "react";
import type { Editor } from "@tiptap/core";
import Button from "./Button";
import { MinusCircleIcon, SaveIcon } from "@heroicons/react/outline";
import DeleteButton from "./DeleteButton";

type Props = {
  editor: Editor | null;
};

const Group: FC = ({ children }) => (
  <div className="flex divide-x rounded border">{children}</div>
);

const Buttons: FC<Props> = ({ editor }) =>
  editor && (
    <div className="flex flex-wrap items-center justify-between">
      <div className="mr-2 mb-2 flex space-x-2 overflow-y-auto">
        <Group>
          <Button
            editor={editor}
            onClick={() => editor.chain().focus().toggleBold().run()}
            activeId="bold"
          >
            Bold
          </Button>
          <Button
            editor={editor}
            onClick={() => editor.chain().focus().toggleItalic().run()}
            activeId="italic"
          >
            Italic
          </Button>
          <Button
            editor={editor}
            onClick={() => editor.chain().focus().toggleStrike().run()}
            activeId="strike"
          >
            Strike
          </Button>
        </Group>
        <Group>
          <Button
            editor={editor}
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            activeId="bulletList"
          >
            Bullet list
          </Button>
          <Button
            editor={editor}
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            activeId="orderedList"
          >
            Ordered list
          </Button>
        </Group>
        <Group>
          <Button onClick={() => editor.chain().focus().undo().run()}>
            Undo
          </Button>
          <Button onClick={() => editor.chain().focus().redo().run()}>
            Redo
          </Button>
        </Group>
      </div>
    </div>
  );

export default Buttons;
