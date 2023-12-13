import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XCircleIcon } from "@heroicons/react/24/outline";

const NewBoardModal = ({ open, setOpen, handleAddBoard }) => {
  const [newBoardName, setNewBoardName] = useState("");

  
  useEffect(() => {
    return () => {
        setNewBoardName(""); //.
    }
  },  [])
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>
                  <div className="flex justify-between items-center">
                    <h1>Creating a new board</h1>
                    <XCircleIcon onClick={() => setOpen(false)} className="h-6 w-6 text-contrast-300 hover:text-contrast-400" />
                  </div>
                  <div className="relative mt-4">
                    <label
                      htmlFor="name"
                      className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                    >
                      Name
                    </label>
                    <input
                      onChange={(e) => setNewBoardName(e.currentTarget.value)}
                      autoComplete="off"
                      type="text"
                      name="name"
                      id="name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-800 sm:text-sm sm:leading-6"
                      placeholder="Enter a board name"
                      value={newBoardName}
                    />
                  </div>
                  <div className="flex flex-row-reverse gap-2 items-center mt-4">
                    <button
                      onClick={() => {
                        handleAddBoard(newBoardName);
                        setOpen(false);
                      }}
                      type="button"
                      className="rounded-md bg-main-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-main-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main-800"
                    >
                      Create
                    </button>
                    <button
                      onClick={() => setOpen(false)}
                      type="button"
                      className="rounded-md bg-gray-300 px-3 py-2 text-sm font-semibold text-gray-600 shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-300"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default NewBoardModal;
