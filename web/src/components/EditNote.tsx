import { useGetNoteQuery, useUpdateNoteMutation } from "generated-types";
import { FC, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Editor from "./Editor";
import DeleteButton from "./Editor/DeleteButton";
import Empty from "./Editor/Empty";

type Props = {};

const parseJSON = (i: string | null | undefined) => {
  if (!i) {
    return "";
  }

  try {
    return JSON.parse(i);
  } catch (e) {
    return "";
  }
};

const EditNote: FC<Props> = ({}) => {
  const { notebookId, noteId } = useParams();

  if (!notebookId) {
    throw Error(`Missing notebook [${notebookId}]`);
  }

  const [{ data }] = useGetNoteQuery({ variables: { id: noteId ?? "" } });
  const [title, setTitle] = useState("");
  const [content, setContent] = useState({});
  const [, updateNote] = useUpdateNoteMutation();
  const titleRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTitle(data?.note?.title ?? "");
    const parsedContent = parseJSON(data?.note?.content);
    console.log(parsedContent);
    setContent(parsedContent);
  }, [data]);

  useEffect(() => {
    titleRef.current?.focus();
  }, [titleRef.current]);

  const saveNote = () => {
    updateNote({
      id: noteId,
      notebookId,
      title,
      content: JSON.stringify(content),
    });
  };

  if (!data?.note) {
    return <Empty notebookId={notebookId ?? ""} />;
  }

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <div className="border-b border-gray-200 bg-white py-3 px-5 sm:flex sm:items-center sm:justify-between">
        <input
          type="text"
          className="w-full rounded border-none py-1.5 text-lg font-medium leading-6 text-gray-900"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          ref={titleRef}
        />
        <div className="mt-3 flex sm:mt-0 sm:ml-4">
          <DeleteButton noteId={noteId} />
          <button
            onClick={saveNote}
            type="button"
            className="ml-3 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Save
          </button>
        </div>
      </div>
      <Editor content={content} setContent={setContent} />
    </div>
  );
};

export default EditNote;
