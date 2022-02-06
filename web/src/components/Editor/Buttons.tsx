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
    <div className="flex justify-between">
      <div className="flex space-x-2">
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
      <div className="flex space-x-1">
        <DeleteButton />
        <button className="flex items-center rounded bg-indigo-600 py-1 px-2 text-white">
          <SaveIcon className="mr-2 h-5 w-5" />
          Save
        </button>
      </div>
    </div>
  );

export default Buttons;
