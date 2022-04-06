import { PlusIcon } from "@heroicons/react/outline";
import { useState } from "react";
import NewNotebookModal from "./NewNotebookModal";

const NewNotebookButton = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        className="flex items-center rounded-lg p-4 text-indigo-200 hover:bg-indigo-700"
        title="New notebook"
        onClick={() => {
          setModalOpen(true);
          console.log("ccccc", isModalOpen);
        }}
      >
        <PlusIcon className="h-6 w-6" aria-hidden="true" />
        <span className="sr-only">New notebook</span>
      </button>
      <NewNotebookModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
};

export default NewNotebookButton;
