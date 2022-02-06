import { useParams } from "react-router-dom";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";
import Buttons from "./Buttons";

const createContent = ({
  notebookId,
  noteId,
}: {
  notebookId: string | undefined;
  noteId: string | undefined;
}) => {
  return `<h1>Hello World!</h1><p>Notebook: ${notebookId}</p>
    <p>Note: ${noteId}</p><ul><li><p>A list</p></li><li><p>of </p></li><li><p>sorts</p></li></ul>`;
};

const Editor = () => {
  const { notebookId, noteId } = useParams();
  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class:
          "prose prose-sm prose-stone h-full w-full focus:outline-none max-w-full",
      },
    },
    content: createContent({ notebookId, noteId }),
  });

  useEffect(() => {
    editor?.commands.setContent(createContent({ notebookId, noteId }));
  }, [noteId]);

  return (
    <div className="m-5 flex h-full flex-col space-y-5">
      <Buttons editor={editor} />
      <EditorContent className="h-full w-full" editor={editor} />
    </div>
  );
};

export default Editor;
