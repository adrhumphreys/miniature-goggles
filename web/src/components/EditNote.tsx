import { useGetNoteQuery } from "generated-types";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Editor from "./Editor";
import Empty from "./Editor/Empty";

type Props = {};

const EditNote: FC<Props> = ({}) => {
  const { notebookId, noteId } = useParams();
  const [{ data }] = useGetNoteQuery({ variables: { id: noteId ?? "" } });
  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle(data?.note?.title ?? "");
  }, [data]);

  if (!data?.note) {
    return <Empty notebookId={notebookId ?? ""} />;
  }

  return (
    <div>
      <div className="border-b border-gray-200 bg-white py-3 px-5 sm:flex sm:items-center sm:justify-between">
        <input
          type="text"
          className="w-full rounded border-none py-1.5 text-lg font-medium leading-6 text-gray-900"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <div className="mt-3 flex sm:mt-0 sm:ml-4">
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Delete
          </button>
          <button
            type="button"
            className="ml-3 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Save
          </button>
        </div>
      </div>
      <Editor content={data.note.content ?? ""} />
    </div>
  );
};

export default EditNote;
