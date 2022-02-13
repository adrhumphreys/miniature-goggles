import type { FC } from "react";
import { PlusIcon } from "@heroicons/react/solid";
import { DocumentTextIcon } from "@heroicons/react/outline";

type Props = {
  notebookId: string;
};

const Empty: FC<Props> = ({ notebookId }) => {
  return (
    <div className="text-center">
      <DocumentTextIcon className="mx-auto h-24 w-24" />
      <h3 className="mt-2 text-sm font-medium text-gray-900">
        No note selected
      </h3>
      <p className="mt-1 text-sm text-gray-500">
        Get started by either selecting of creating a new note.
      </p>
      <div className="mt-6">
        <button
          type="button"
          className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          New note
        </button>
      </div>
    </div>
  );
};

export default Empty;
