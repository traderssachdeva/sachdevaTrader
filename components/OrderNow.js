import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
function OrderNow() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [input, setInput] = useState("");
  // const notify = () => toast.success('Copied')

  //   const onSubmit = (data) => console.log(data)

  const form = useRef();

  const sendEmail = (e) => {
    // e.preventDefault();
    emailjs
      .sendForm(
        'service_maqrkn6',
        'template_9ah7vhg',
        // your service id
        // your template id

        form.current,
        'JxnW1-P4KX7EK_Spx'
        // your api key of email js
      )
      .then(
        (result) => {
          console.log(result.text);
          reset();
          // toast.success("Message sent");
        },
        (error) => {
          //   console.log(error.text)
        }
      );

    const reset = (e) => {
      setInput("");
    };
  };
  return (
    <div>
      <div className=" grid  grid-cols-1 md:grid-cols-3 bg-white py-8 px-6 sm:py-10 lg:px-8">
        <form ref={form}
              value={input}
              onChange={(e) => setInput()}
              onSubmit={handleSubmit(sendEmail)} className="mx-auto col-span-2 mt-4 max-w-xl sm:mt-4">
          <div className="mx-auto my-20  max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Order Now
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="block capitalize text-sm font-semibold leading-6 text-gray-900">
                name
              </label>
              <div className="mt-2.5">
                <input
                value={input}
                onChange={(e) => setInput()}
                {...register("name", { required: true })}
                type="text"
                  
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

          </div>
          <div className="sm:col-span-2">
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2.5">
                <input
                value={input}
                onChange={(e) => setInput()}
                {...register("email", { required: true })}
                name="email"
                  type="email"
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <label
                
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Address
              </label>
              <div className="mt-2.5">
                <textarea
                value={input}
                onChange={(e) => setInput()}
                name="message"
                {...register("message", { required: true })}
                
                  id="message"
                  rows="4"
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold leading-6 text-gray-900">
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  rows="4"
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
            </div>
            <div className="flex gap-x-4 sm:col-span-1">
              <div className="flex h-6 items-center">
                {/* <!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" --> */}
              </div>
            </div>
          </div>
          <div className="mt-4">
            <button className="block w-full rounded-md bg-[#3A98B9] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg- focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Submit
            </button>
          </div>
        </form>

        <div className="col-span-1 my-20 justify-center flex flex-col items-center">
          <p className="text-3xl">Proceed with Payment</p>
          <img
            className="h-80 w-80 object-cover"
            src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/img19/AmazonPay/UPI/P2P/Feb2020/Amazon_India_App_500.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default OrderNow;
