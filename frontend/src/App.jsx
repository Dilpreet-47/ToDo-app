import React from "react";

const App = () => {
  return (
    <div className="flex text-white justify-center items-center h-screen w-screen bg-[url('/login_bg.png')] bg-cover ">
      <div className="flex flex-col bg-black opacity-80 p-10 rounded-xl w-[600px] h-[600px]">
        <div>
          <h1 className="text-3xl ">Sign In</h1>
        </div>
        <form action="" className="flex flex-col m-5 text-sm">
          <div className="flex flex-col mb-5 bg-gray-500 rounded-2xl relative">
            <i className="fa-solid fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            <input
              type="email"
              placeholder="Email"
              className="p-2 pl-10 rounded-2xl border border-gray-300 focus:outline-none"
            />
          </div>

          <div className="flex flex-col mb-5 bg-gray-500 rounded-2xl relative">
            <i class="fa-solid fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            <input type="password" placeholder="Password" className="p-2 pl-10 rounded-2xl border border-gray-300 focus:outline-none" />
          </div>
        </form>
      </div>
    </div >
  )
}

export default App;