import React from "react";

const App = () => {
  return (
    <div className="flex flex-col text-white justify-center items-center min-h-screen w-screen bg-[url('/login_bg.png')] bg-cover">
      <div className="flex justify-center items-center flex-col bg-black bg-opacity-80 p-10 rounded-3xl w-full max-w-md sm:max-w-lg md:max-w-md lg:max-w-md xl:max-w-md hover:shadow-[0_0_15px_3px_rgba(102,126,234,0.65)] transition duration-300 ease-in-out">
        <div className="flex justify-center font-serif mb-5">
          <h1 className="text-3xl sm:text-4xl">Sign In</h1>
        </div>
        <form action="" className="flex flex-col m-5 text-sm w-full">
          <div className="flex flex-col w-full mb-5 bg-gray-700 rounded-2xl relative">
            <i className="fa-solid fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            <input
              type="email"
              placeholder="Email"
              className="p-2 pl-10 rounded-2xl border border-gray-300 focus:outline-none"
            />
          </div>

          <div className="flex flex-col mb-10 bg-gray-700 rounded-2xl relative">
            <i className="fa-solid fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            <input
              type="password"
              placeholder="Password"
              className="p-2 pl-10 rounded-2xl border border-gray-300 focus:outline-none"
            />
          </div>

          <button className="flex p-2 mb-5 justify-center rounded-2xl border border-gray-300 text-white transition duration-300 ease-in-out hover:bg-gray-400 hover:shadow-[0_0_15px_3px_rgba(102,126,234,0.65)] hover:text-black">
            Log In
          </button>
        </form>
        <p>if not Signed in </p>
        <a href="" className="hover:underline">Sign up</a>
      </div>
    </div>
  );
};

export default App;
