import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { FC, useEffect } from "react";
import Buttons from "./Buttons";

type Props = {
  content: String;
};

const Editor: FC<Props> = ({ content }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class:
          "prose prose-sm prose-stone h-full w-full focus:outline-none max-w-full",
      },
    },
    content,
  });

  useEffect(() => {
    editor?.commands.setContent(content);
  }, [content]);

  return (
    <div className="m-5 flex h-full flex-col space-y-5">
      <Buttons editor={editor} />
      <EditorContent className="h-full w-full" editor={editor} />
    </div>
  );
};

export default Editor;
