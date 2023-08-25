import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomePageToolBar from "../UIComponents/HomePageToolBar";
import { useTranslation } from "react-i18next";
import { Dialog, Transition } from "@headlessui/react";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const goToPlanner = () => {
    navigate("/planner");
  };
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div>
      <HomePageToolBar />
      <h1>Welcome to the Home Page</h1>
      <button
        className="bg-purpledull-500 hover:bg-purple-300 text-purple-50 font-bold rounded-3xl py-2 px-4"
        onClick={goToPlanner}
      >
        {t(`planlegger.planleggNyØkt`)}
      </button>
      <>
        <div className="fixed inset-0 flex items-center justify-center">
          <button
            type="button"
            onClick={openModal}
            className="rounded-3xl bg-purplevibrant-400 bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            Om appen
          </button>
        </div>

        <Transition appear show={isOpen}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Treningsøkt
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Denne appen lar deg opprette detaljerte og personlige
                        treningsøkter i et fint format.
                      </p>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-purplevibrant-400 px-4 py-2 text-sm font-medium text-white hover:bg-purple-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Den er grei, takk!
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
    </div>
  );
};

export default Home;
