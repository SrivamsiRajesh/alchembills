"use client";
import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-50 w-full px-4 py-24"> {/* Added full width and padding */}
      <div className="max-w-xs mx-auto"> {/* Moved max-width to an inner div */}
        <header className="mb-6">
          <div className="font-nycd text-xl text-indigo-500 subpixel-antialiased mb-1">Let's Connect</div>
          <h1 className="text-2xl font-bold text-slate-900">Contact our friendly team</h1>
        </header>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm text-slate-600 font-medium mb-1">Name <span className="text-red-500">*</span></label>
            <input type="text" className="w-full text-sm text-slate-600 bg-white border border-slate-300 appearance-none rounded-lg px-3.5 py-2.5 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100" id="name" name="name" placeholder="Mark Smith" required />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="block text-sm text-slate-600 font-medium mb-1">Message <span className="text-red-500">*</span></label>
            <div className="grid text-sm after:px-3.5 after:py-2.5 [&>textarea]:text-inherit after:text-inherit [&>textarea]:resize-none [&>textarea]:overflow-hidden [&>textarea]:[grid-area:1/1/2/2] after:[grid-area:1/1/2/2] after:whitespace-pre-wrap after:invisible after:content-[attr(data-cloned-val)_'_'] after:border">
              <textarea className="w-full text-slate-600 bg-white border border-slate-300 appearance-none rounded-lg px-3.5 py-2.5 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100" name="message" id="message" rows="3" onInput={(e) => e.target.parentNode.dataset.clonedVal = e.target.value} placeholder="Your request..." required></textarea>
            </div>
          </div>
          <button className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 group">
            Submit <span className="tracking-normal text-indigo-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;