import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => (
  <Transition appear show={isOpen} as={Fragment}>
    <Dialog as="div" className="relative z-50" onClose={onClose}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm" />
      </Transition.Child>

      <div className="fixed inset-0 flex items-center justify-center">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-100"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Dialog.Panel className="w-full max-w-md p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200">
            <Dialog.Title
              as="h3"
              className="text-xl font-bold text-gray-900 dark:text-white mb-4"
            >
              {title}
            </Dialog.Title>
            {children}
          </Dialog.Panel>
        </Transition.Child>
      </div>
    </Dialog>
  </Transition>
);

export default CustomModal;
