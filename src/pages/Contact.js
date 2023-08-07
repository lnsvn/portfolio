import React from "react";
import env from "react-dotenv";

function Contact() {
    const emailLink = env.EMAIL_LINK;
  return (
    <main className="flex flex-col items-center justify-center font-rem font-bold py-8">
      <h1 className="text-3xl mb-5">Contact</h1>
      <p>Send me an e-mail through the form below.</p>
      <div class="flex flex-col px-6">
        
        <div class="mt-5">
          <form class="space-y-7"
            action={emailLink} method="POST"
            >
            <input type="hidden" name="_subject" value="New message from Portfolio"></input>
          <div>
              <label
                for="name"
                class="block text-xl text-gray-900"
              >
                Name
              </label>
              <div class="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="John Smith"
                  class="p-2 block w-60 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-100 sm:text-sm sm:leading-6"
                ></input>
              </div>
            </div>
            <div>
              <label
                for="email"
                class="block text-xl text-gray-900"
              >
                Email address
              </label>
              <div class="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  placeholder="example@email.com"
                  class="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-100 sm:text-sm sm:leading-6"
                ></input>
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label
                  for="subject"
                  class="block text-xl text-gray-900"
                >
                  Subject
                </label>
              </div>
              <div class="mt-2">
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  autocomplete="off"
                  required
                  placeholder="Re:"
                  class="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-100 sm:text-sm sm:leading-6"
                ></input>
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label
                  for="message"
                  class="block text-xl text-gray-900"
                >
                  Message
                </label>
              </div>
              <div class="mt-2">
                <textarea
                  id="message"
                  name="message"
                  type="text"
                  rows="4"
                  autocomplete="off"
                  required
                  placeholder="..."
                  class="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-100 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
            </div>

            <div>
              <button
                value="Send"
                type="submit"
                class="flex w-full justify-center rounded-md bg-emerald-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-md hover:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Contact;
