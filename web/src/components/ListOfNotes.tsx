import { FC, useState } from "react";
import classNames from "classnames";
import Search from "./Search";
import { Link, useParams } from "react-router-dom";
import useFuse from "@utils/useFuse";
import timeAgo from "@utils/timeAgo";
import { Note, useAddNoteMutation, useGetNotebookQuery } from "generated-types";
import { PlusIcon } from "@heroicons/react/outline";

const NotePreview = ({
  note,
  isSelected,
  notebookId,
}: {
  note: any;
  isSelected: boolean;
  notebookId: string;
}) => (
  <li
    key={note.id}
    className={classNames(
      "relative py-5 px-4 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 hover:bg-gray-50",
      {
        "bg-gray-50": isSelected,
        "bg-white": !isSelected,
      }
    )}
  >
    <div className="flex justify-between space-x-3">
      <div className="min-w-0 flex-1">
        <Link
          to={`/notebooks/${notebookId}/${note.id}`}
          className="block focus:outline-none"
        >
          <span className="absolute inset-0" aria-hidden="true" />
          <p className="truncate text-sm font-medium text-gray-900">
            {note.title}
          </p>
        </Link>
      </div>
      {note.updatedAt ? (
        <time
          dateTime={note.updatedAt}
          className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
        >
          {timeAgo({ date: note.updatedAt, isUnix: true })}
        </time>
      ) : null}
    </div>
    <div className="mt-1">
      <p className="line-clamp-2 text-sm text-gray-600">Preview?</p>
    </div>
  </li>
);

const ListOfNotes: FC = () => {
  const { noteId: selectedId, notebookId = "" } =
    useParams<{ noteId: string; notebookId: string }>();
  const [queryResult] = useGetNotebookQuery({ variables: { id: notebookId } });

  const notes = queryResult.data?.notebook?.notes;

  if (!notes) {
    return <p>No notes bro</p>;
  }

  const { result, onSearch, term, reset } = useFuse(notes, {
    keys: ["title"],
  });

  const [, addNoteMut] = useAddNoteMutation();
  const addNote = () => addNoteMut({ notebookId, title: "" });

  return (
    <div className="h-full">
      <div className="flex space-x-2 border-b border-gray-200 p-3">
        <Search value={term} onSearch={onSearch} />
        <button
          onClick={addNote}
          className="rounded bg-indigo-600 px-3 text-white"
        >
          <PlusIcon className="h-5 w-5" />
        </button>
      </div>
      <ul role="list" className="divide-y divide-gray-200">
        {term
          ? result
              .sort((a, b) => b.item.updatedAt - a.item.updatedAt)
              .map(({ item: note }) => (
                <NotePreview
                  key={note.id}
                  notebookId={notebookId ?? ""}
                  note={note}
                  isSelected={selectedId === note.id}
                />
              ))
          : notes
              .sort((a, b) => b.updatedAt - a.updatedAt)
              .map((note) => (
                <NotePreview
                  key={note.id}
                  notebookId={notebookId ?? ""}
                  note={note}
                  isSelected={selectedId === note.id}
                />
              ))}
      </ul>
    </div>
  );
};

export default ListOfNotes;
