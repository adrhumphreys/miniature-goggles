import { FC } from "react";
import type { Editor } from "@tiptap/core";
import Button from "./Button";

type Props = {
  editor: Editor | null;
};

const Group: FC = ({ children }) => (
  <div className="flex divide-x rounded border">{children}</div>
);

const Buttons: FC<Props> = ({ editor }) =>
  editor && (
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
  );

export default Buttons;
