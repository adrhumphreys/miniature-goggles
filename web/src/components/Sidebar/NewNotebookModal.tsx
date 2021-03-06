import { FC, useRef } from "react";
import { Dialog } from "@headlessui/react";
import { PlusCircleIcon } from "@heroicons/react/outline";
import { Input } from "@components/Form";
import Modal from "@components/Modal";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const NewNotebookModal: FC<Props> = ({ isOpen, onClose }) => {
  const focusRef = useRef<HTMLInputElement>(null);

  return (
    <Modal isOpen={true} onClose={onClose} focusRef={focusRef}>
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div className="sm:flex sm:items-start">
          <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
            <PlusCircleIcon
              className="h-6 w-6 text-green-600"
              aria-hidden="true"
            />
          </div>
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <Dialog.Title
              as="h3"
              className="text-lg font-medium leading-6 text-gray-900"
            >
              Create new notebook
            </Dialog.Title>
            <div className="mt-2">
              <p className="mb-3 text-sm text-gray-500">
                This will create a new notebook and navigate you to it
              </p>
              <Input
                label="Name"
                inputProps={{
                  type: "text",
                  id: "new-notebook-name",
                  ref: focusRef,
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={onClose}
        >
          Create
        </button>
        <button
          type="button"
          className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default NewNotebookModal;
