import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { FC, useEffect } from "react";
import Buttons from "./Buttons";

type Props = {
  content: string;
  setContent: Function;
};

const Editor: FC<Props> = ({ content, setContent }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class:
          "prose prose-sm prose-stone h-full w-full focus:outline-none max-w-full",
      },
    },
    content,
    onUpdate: ({ editor }) => {
      setContent(editor.getJSON());
    },
  });

  useEffect(() => {
    editor?.commands.setContent(content);
  }, [content]);

  return (
    <div className="m-5 flex h-full flex-col space-y-5 overflow-hidden">
      <Buttons editor={editor} />
      <EditorContent
        className="h-full w-full overflow-y-auto"
        editor={editor}
      />
    </div>
  );
};

export default Editor;
