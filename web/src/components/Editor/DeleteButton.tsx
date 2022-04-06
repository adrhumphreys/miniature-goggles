import { FC, useState } from "react";
import DeleteConfirmation from "./DeleteConfirmation";

type Props = {
  noteId?: string | null;
};

const DeleteButton: FC<Props> = ({ noteId }) => {
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={() => setConfirmationOpen(true)}
      >
        Delete
        {confirmationOpen ? "o" : "c"}
        <DeleteConfirmation
          isOpen={confirmationOpen}
          onClose={() => setConfirmationOpen(false)}
        />
      </button>
    </>
  );
};

export default DeleteButton;
