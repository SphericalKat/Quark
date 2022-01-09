import {
  Dialog,
  DialogOverlay,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "solid-headless";
import { Component, createSignal } from "solid-js";
import Button from "../components/Button";
import Plus from "../components/icons/Plus";

import Navbar from "../components/Navbar";

const Home: Component = () => {
  const [isOpenAdd, setIsOpenAdd] = createSignal(false);
  const closeModal = () => setIsOpenAdd(false);

  return (
    <div class="page-container">
      <Transition appear show={isOpenAdd()}>
        <Dialog
          as="div"
          class="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
          isOpen
        >
          <div
            class="
            min-h-screen
            px-4
            flex
            items-center
            justify-center
            text-center
          "
          >
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <DialogOverlay class="fixed inset-0" />
            </TransitionChild>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span class="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel class="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-card shadow-xl rounded-2xl">
                <DialogTitle as="h2" class="text-2xl font-medium leading-6">
                  Add a feed
                </DialogTitle>
                <div class="mt-3">
                  <p class="text-sm">
                    You can enter any URL, and Quark will automatically detect
                    the feed for you. This works for{" "}
                    <strong>most news sites and blogs</strong> out there on the
                    internet.
                  </p>
                </div>

                <div class="mt-4">
                  <input
                    class="
                      w-full
                      px-4
                      py-2
                      text-text-input
                      rounded-md
                      focus:outline-none
                    "
                    type="text"
                    placeholder="https://example.com"
                  />
                </div>

                <div class="mt-4">
                  <button
                    type="button"
                    class="
                      inline-flex
                      w-full
                      justify-center
                      px-4
                      py-2
                      text-sm
                      font-medium
                      text-blue-900
                      bg-blue-100
                      border
                      border-transparent
                      rounded-md
                      hover:bg-blue-200
                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-offset-2
                      focus-visible:ring-blue-500
                    "
                    onClick={closeModal}
                  >
                    Submit
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>

      <div class="page-content">
        <h2 class="text-3xl font-bold">Nothing to see here</h2>
        <Button onClick={() => setIsOpenAdd(true)}>
          <Plus class="mr-4" />
          <p class="">Add a new feed</p>
        </Button>
      </div>

      <Navbar />
    </div>
  );
};

export default Home;
