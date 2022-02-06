import { FC, useState } from "react";
import DeleteConfirmation from "./DeleteConfirmation";

type Props = {};

const DeleteButton: FC<Props> = ({}) => {
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  return (
    <>
      <button
        className="flex items-center rounded bg-gray-50 py-1 px-2 transition-colors hover:bg-red-600 hover:text-white"
        onClick={() => setConfirmationOpen(true)}
      >
        Delete
      </button>
      <DeleteConfirmation
        isOpen={confirmationOpen}
        onClose={() => setConfirmationOpen(false)}
      />
    </>
  );
};

export default DeleteButton;
