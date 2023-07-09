import { useState, React } from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];

const addresses = [
  {
    name: "Puneet Sharma",
    phone: "9717336346",
    street: "Gali No - 6",
    city: "Delhi",
    state: "Delhi",
    pinCode: 110053,
  },
  {
    name: "Tim Cook",
    phone: "9896758454",
    street: "15th Main",
    city: "Bangalore",
    state: "Karnatka",
    pinCode: 656765,
  },
];

export default function CheckoutPage() {
  const [open, setOpen] = useState(true);

  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-8 bg-white p-5">
      <div className="lg:col-span-3">
        <form>
          <div class="space-y-12">
            <div class="border-b border-gray-900/10">
              <h2 class="text-2xl font-semibold leading-7 text-gray-900">
                Personal Information
              </h2>
              <p class="mt-1 text-sm leading-6 text-gray-600">
                Use a permanent address where you can receive mail.
              </p>

              <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div class="sm:col-span-3">
                  <label
                    for="first-name"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    First name
                  </label>
                  <div class="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autocomplete="given-name"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div class="sm:col-span-3">
                  <label
                    for="last-name"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Last name
                  </label>
                  <div class="mt-2">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autocomplete="family-name"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div class="sm:col-span-4">
                  <label
                    for="email"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div class="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autocomplete="email"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div class="sm:col-span-3">
                  <label
                    for="country"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Country
                  </label>
                  <div class="mt-2">
                    <select
                      id="country"
                      name="country"
                      autocomplete="country-name"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                </div>

                <div class="col-span-full">
                  <label
                    for="street-address"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Street address
                  </label>
                  <div class="mt-2">
                    <input
                      type="text"
                      name="street-address"
                      id="street-address"
                      autocomplete="street-address"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div class="sm:col-span-2 sm:col-start-1">
                  <label
                    for="city"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    City
                  </label>
                  <div class="mt-2">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      autocomplete="address-level2"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <label
                    for="region"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    State / Province
                  </label>
                  <div class="mt-2">
                    <input
                      type="text"
                      name="region"
                      id="region"
                      autocomplete="address-level1"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <label
                    for="postal-code"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    ZIP / Postal code
                  </label>
                  <div class="mt-2">
                    <input
                      type="text"
                      name="postal-code"
                      id="postal-code"
                      autocomplete="postal-code"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <div class="mt-8 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="text-sm px-3 py-2 rounded-md shadow-sm font-semibold leading-6 bg-gray-200 text-gray-900"
                >
                  Reset
                </button>

                <button
                  type="submit"
                  class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Save Address
                </button>
              </div>

              <div className="border-t border-gray-900/10 pb-12 mt-8">
                <h2 className="text-base font-semibold leading-7 text-gray-900 mt-6">
                  Addresses
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Choose from one of the existing addresses below
                </p>

                <ul
                  role="list"
                  className="divide-y divide-gray-100 border-b border-gray-900/10"
                >
                  {addresses.map((address) => (
                    <li
                      key={address.phone}
                      className="flex justify-between gap-x-6 py-5"
                    >
                      <div className="flex gap-x-4">
                        <input
                          name="address"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 mt-1"
                        />
                        <div className="min-w-0 flex-auto">
                          <p className="text-sm font-semibold leading-6 text-gray-900">
                            {address.name}
                          </p>
                          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                            {address.street}
                          </p>
                          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                            {address.city}
                          </p>
                        </div>
                      </div>
                      <div className="hidden sm:flex sm:flex-col sm:items-end">
                        <p className="text-sm leading-6 text-gray-900">
                          {address.state}
                        </p>
                        <p className="text-sm leading-6 text-gray-900">
                          {address.pinCode}
                        </p>
                        <p className="text-sm leading-6 text-gray-900">
                          {address.phone}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                <fieldset className="mt-6">
                  <legend className="text-sm font-semibold leading-6 text-gray-900">
                    Payment Methods
                  </legend>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Please Choose one of the Payment Methods
                  </p>
                  <div className="mt-6 space-y-6">
                    <div className="flex items-center gap-x-3">
                      <input
                        id="debit-card"
                        name="payment-method"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="debit-card"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Debit Card
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="credit-card"
                        name="payment-method"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="credit-card"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Credit Card
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="upi"
                        name="payment-method"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="upi"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        UPI
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="cash"
                        name="payment-method"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="cash"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Cash On Delivery
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="lg:col-span-2">
        <div className="mt-14 mx-auto max-w-7xl px-0 sm:px-0 lg:px-0 bg-white">
          <h2 className="py-5 mt-4 text-4xl font-bold text-gray-800">Cart</h2>
          <div className="mt-2 border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flow-root">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                {products.map((product, index) => (
                  <li key={product.id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a href={product.href}>{product.name}</a>
                          </h3>
                          <p className="ml-4">{product.price}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.color}
                        </p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="text-gray-500">
                          <label
                            htmlFor={`select-quantity${index}`}
                            className="inline text-sm font-medium leading-6 text-gray-900 mr-4"
                          >
                            Qty
                          </label>
                          <select
                            name={`select-quantity${index}`}
                            id={`select-quantity${index}`}
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                          </select>
                        </div>
                        <div className="flex">
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>$262.00</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="mt-6">
              <Link
                to="/pay"
                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Pay and Order
              </Link>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                or{" "}
                <Link to="/">
                  <button
                    type="button"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                    onClick={() => setOpen(false)}
                  >
                    Continue Shopping
                    <span aria-hidden="true"> &rarr;</span>
                  </button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
