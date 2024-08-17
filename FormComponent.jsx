import React from "react";

const FormComponent = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-500 top-2">
      <div className="w-full max-w-2xl mt-5 bg-slate-200 opacity-90 p-8 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105">
        <h2 className="text-2xl font-extrabold text-center mb-6 text-gray-700 animate-fade-in-down">
          Discussion Form
        </h2>

        <form className="space-y-4">
          {/* Title */}
          <div className="animate-fade-in-up">
            <label className="block text-gray-700 font-bold">Title</label>
            <input
              type="text"
              placeholder="Enter your title"
              required
              className="w-full mt-1 p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
            />
          </div>

          {/* Name */}
          <div className="animate-fade-in-up">
            <label className="block text-gray-700 font-bold">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              required
              className="w-full mt-1 p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
            />
          </div>

          {/* Email */}
          <div className="animate-fade-in-up delay-100">
            <label className="block text-gray-700 font-bold">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full mt-1 p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
            />
          </div>

          {/* City */}
          <div className="animate-fade-in-up delay-200">
            <label className="block text-gray-700 font-bold">City</label>
            <input
              type="text"
              placeholder="Enter your city"
              required
              className="w-full mt-1 p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
            />
          </div>

          {/* College */}
          <div className="animate-fade-in-up delay-300">
            <label className="block text-gray-700 font-bold">College</label>
            <input
              type="text"
              placeholder="Enter your college name"
              required
              className="w-full mt-1 p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
            />
          </div>

          {/* Hobbies */}
          <div className="animate-fade-in-up delay-400">
            <label className="block text-gray-700 font-bold">Hobbies</label>
            <input
              type="text"
              placeholder="Enter your hobbies"
              required
              className="w-full mt-1 p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
            />
          </div>

          {/* Working Time */}
          <div className="animate-fade-in-up delay-500">
            <label className="block text-gray-700 font-bold">Working Time</label>
            <input
              type="text"
              placeholder="Enter your working hours"
              required
              className="w-full mt-1 p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
            />
          </div>

          {/* Language */}
          <div className="animate-fade-in-up delay-600">
            <label className="block text-gray-700 font-bold">Language</label>
            <input
              type="text"
              placeholder="Enter languages you know"
              required
              className="w-full mt-1 p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
            />
          </div>

          {/* How Much English You Know */}
          <div className="animate-fade-in-up delay-700">
            <label className="block text-gray-700 font-bold">How Much English You Know</label>
            <select
              required
              className="w-full mt-1 p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
            >
              <option value="">Select an option</option>
              <option value="reading">Reading</option>
              <option value="writing">Writing</option>
              <option value="education">Education</option>
            </select>
          </div>

          {/* Other Languages */}
          <div className="animate-fade-in-up delay-800">
            <label className="block text-gray-700 font-bold">Other Languages</label>
            <input
              type="text"
              placeholder="Enter other languages you know"
              required
              className="w-full mt-1 p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
            />
          </div>

          {/* Phone Number */}
          <div className="animate-fade-in-up delay-900">
            <label className="block text-gray-700 font-bold">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              required
              className="w-full mt-1 p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
            />
          </div>

          {/* LinkedIn */}
          <div className="animate-fade-in-up delay-1000">
            <label className="block text-gray-700 font-bold">LinkedIn</label>
            <input
              type="url"
              placeholder="Enter your LinkedIn profile"
              required
              className="w-full mt-1 p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
            />
          </div>

          {/* Already Working */}
          <div className="animate-fade-in-up delay-1100">
            <label className="block text-gray-700 font-bold">Already Working</label>
            <select
              required
              className="w-full mt-1 p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
            >
              <option value="Select">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          {/* Discussion Body */}
          <div className="animate-fade-in-up delay-1200">
            <label className="block text-gray-700 font-bold">Discussion Body</label>
            <textarea
              placeholder="Write your discussion here..."
              required
              className="w-full mt-1 p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
              rows="4"
            ></textarea>
          </div>

          {/* Attachment */}
          <div className="animate-fade-in-up delay-1300">
            <label className="block text-gray-700 font-bold">Attachment</label>
            <input
              type="file"
              required
              className="w-full mt-1 p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
            />
          </div>

          {/* Agree to Terms */}
          <div className="flex items-center animate-fade-in-up delay-1400">
            <input
              type="checkbox"
              required
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
            />
            <label className="ml-2 block text-gray-700 font-bold">
              Agree to Terms and Conditions
            </label>
          </div>

          {/* Submit Button */}
          <div className="text-center animate-fade-in-up delay-1500">
            <button
              type="submit"
              className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
