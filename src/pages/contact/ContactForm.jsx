import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xleyrwpn");

  if (state.succeeded) {
    return (
      <section className="bg-white">
        <div className="max-w-screen-md px-4 py-8 mx-auto lg:py-16">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-center text-gray-900">
            Contact Me
          </h2>
          <p className="mb-8 font-light text-center text-gray-500 lg:mb-16">
            Thanks for taking time to fill the form! Will get in touch with you
            soon✅.
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="bg-white">
        <div className="max-w-screen-md px-4 py-8 mx-auto lg:py-16">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-center text-gray-900">
            Contact Me
          </h2>
          <p className="mb-8 font-light text-center text-gray-500 lg:mb-16">
            I would love to hear from you.
            <br /> Please take some time to fill your contact details.📝 Will
            get back to you promptly.
          </p>
          <form onSubmit={handleSubmit} className="space-y-8 border-spacing-2">
            <input
              id="email"
              type="email"
              name="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="Enter your email"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <input
              type="text"
              name="subject"
              className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Let me know how I can help you"
              required
            />
            <textarea
              name="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Leave a comment and your contact details..."
              defaultValue={""}
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              type="submit"
              disabled={state.submitting}
              className="px-5 py-3 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default ContactForm;
