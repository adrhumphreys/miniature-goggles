import { FC, useState } from "react";
import classNames from "classnames";
import Search from "./Search";
import { Link, useParams } from "react-router-dom";
import useFuse from "@utils/useFuse";

type Message = {
  id: number;
  subject: string;
  sender: string;
  time: string;
  datetime: string;
  preview: string;
};

const messages: Message[] = [
  {
    id: 1,
    subject: "One item in the list",
    sender: "Gloria Roberston",
    time: "1d ago",
    datetime: "2021-01-27T16:35",
    preview:
      "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.",
  },
  {
    id: 2,
    subject: "Two item in the list",
    sender: "Gloria Roberston",
    time: "1d ago",
    datetime: "2021-01-27T16:35",
    preview:
      "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.",
  },
  {
    id: 3,
    subject: "Three item in",
    sender: "Gloria Roberston",
    time: "1d ago",
    datetime: "2021-01-27T16:35",
    preview:
      "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.",
  },
  // More messages...
];

const NotePreview = ({
  message,
  isSelected,
  notebookId,
}: {
  message: Message;
  isSelected: boolean;
  notebookId: string;
}) => (
  <li
    key={message.id}
    className={classNames(
      "relative border py-5 px-4 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 hover:bg-gray-50",
      {
        "bg-gray-50": isSelected,
        "bg-white": !isSelected,
      }
    )}
  >
    <div className="flex justify-between space-x-3">
      <div className="min-w-0 flex-1">
        <Link
          to={`/notebooks/${notebookId}/${message.id}`}
          className="block focus:outline-none"
        >
          <span className="absolute inset-0" aria-hidden="true" />
          <p className="truncate text-sm font-medium text-gray-900">
            {message.sender}
          </p>
          <p className="truncate text-sm text-gray-500">{message.subject}</p>
        </Link>
      </div>
      <time
        dateTime={message.datetime}
        className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
      >
        {message.time}
      </time>
    </div>
    <div className="mt-1">
      <p className="line-clamp-2 text-sm text-gray-600">{message.preview}</p>
    </div>
  </li>
);

const ListOfNotes: FC = () => {
  const { noteId, notebookId } =
    useParams<{ noteId: string; notebookId: string }>();
  const selectedId = parseInt(noteId ?? "0");

  const { result, onSearch, term, reset } = useFuse(messages, {
    keys: ["subject"],
  });

  return (
    <div>
      <div className="p-3">
        <Search value={term} onSearch={onSearch} />
      </div>
      <ul role="list" className="divide-y divide-gray-200">
        {term
          ? result.map(({ item: message }) => (
              <NotePreview
                key={message.id}
                notebookId={notebookId ?? ""}
                message={message}
                isSelected={selectedId === message.id}
              />
            ))
          : messages.map((message) => (
              <NotePreview
                key={message.id}
                notebookId={notebookId ?? ""}
                message={message}
                isSelected={selectedId === message.id}
              />
            ))}
      </ul>
    </div>
  );
};

export default ListOfNotes;
