import { Fragment, useState } from "react";
import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import { XMarkIcon, ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { StarIcon, EyeIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Product() {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };
  const products = [
    {
      id: 1,
      name: "Wooden clock brass coated",
      code: "006",
      size: "12*2*12",
      price: "1795",
      imageSrc: "https://i.ibb.co/w4dnF1T/mithila-pdf-Page-6-image-1.png",
      imageAlt: "",
    },
    {
      id: 2,
      name: "Wooden clock brass coated",
      code: "009",
      size: "18*2*18",
      price: "1795",
      imageSrc: "https://i.ibb.co/L8JVD36/mithila-pdf-Page-9-image-1.png",
      imageAlt: "",
    },
    {
      id: 3,
      name: "Wooden clock brass coated",
      code: "013",
      size: "18*2*18",
      price: "3095",
      imageSrc: "https://i.ibb.co/g7z4pCx/mithila-pdf-Page-13-image-1.png",
      imageAlt: "",
    },
    {
      id: 4,
      name: "Wooden clock brass coated",
      code: "014",
      size: "18*2*18",
      price: "3195",
      imageSrc: "https://i.ibb.co/HhNrRnV/mithila-pdf-Page-14-image-1.png",
      imageAlt: "",
    },
    {
      id: 5,
      name: "Wooden clock hand painted",
      code: "032",
      size: "18*2*18",
      price: "3095",
      imageSrc: "https://i.ibb.co/BNrzTHs/mithila-pdf-Page-24-image-1.png",
      imageAlt: "",
    },
    {
      id: 6,
      name: "Wooden clock brass coated",
      code: "054",
      size: "18*2*18",
      price: "3195",
      imageSrc: "https://i.ibb.co/RCVLYx3/mithila-pdf-Page-27-image-1.png",
      imageAlt: "",
    },
    {
      id: 7,
      name: "Wooden clock brass coated",
      code: "055",
      size: "18*2*18",
      price: "3295",
      imageSrc: "https://i.ibb.co/HzNx0DH/mithila-pdf-Page-28-image-1.png",
      imageAlt: "",
    },
    {
      id: 8,
      name: "Wooden clock brass coated",
      code: "084",
      size: "18*2*18",
      price: "3095",
      imageSrc: "https://i.ibb.co/XFpGrKz/mithila-pdf-Page-50-image-1.png",
      imageAlt: "",
    },
  ];
  return (
    <main>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 py-10">
            Customers also purchased
          </h2>

          <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>{product.name}</a>
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    &#8377;{product.price}
                  </p>
                  <button onClick={() => openModal(product)}>
                    <EyeIcon
                      className="h-6 w-6 text-gray-500"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div
                  className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
                >
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href="#">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                  <Link
                    href={`/product/${product.id}`}
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    <p className="mt-1 text-sm text-gray-500">Default</p>
                  </Link>
                </div>
                <button
                  onClick={() => {
                    console.log("click");
                    alert("hii");
                  }}
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Open dialog
                </button>
              </div>
            ))}
          </div> */}
        </div>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Panel className="relative rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:max-w-lg sm:w-full">
                  {selectedProduct && (
                    <>
                      <div className="p-6">
                        <img
                          src={selectedProduct.imageSrc}
                          alt={""}
                          className="h-100 w-100 object-cover object-center lg:h-full lg:w-full"
                        />
                        <h3 className="text-lg leading-6 font-medium text-gray-900 py-2">
                          {selectedProduct.name}
                        </h3>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            {selectedProduct.code}
                          </p>
                          <p className="text-sm text-gray-500">
                            &#8377;{selectedProduct.price}
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          Open dialog
        </button>
      </div> */}

      {/* <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
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
                    Payment successful
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      // onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition> */}
      {/* <Dialog open={open} onClose={() => setOpen(false)}>
        <Dialog.Panel>
          <Dialog.Title>Deactivate account</Dialog.Title>
          <Dialog.Description>
            This will permanently deactivate your account
          </Dialog.Description>

          <p>
            Are you sure you want to deactivate your account? All of your data
            will be permanently removed. This action cannot be undone.
          </p>

          <button onClick={() => setOpen(false)}>Deactivate</button>
          <button onClick={() => setOpen(false)}>Cancel</button>
        </Dialog.Panel>
      </Dialog> */}
    </main>
  );
}

export default Product;
