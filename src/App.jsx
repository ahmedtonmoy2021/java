import "./App.css";
import logo from "./asset/logo.png";
import { FaShare } from "react-icons/fa";

function App() {
  return (
    <div className="main grid grid-cols-3 items-center container">
      <div className="leftside grid grid-flow-row ">
        <div className="firstrow  pl-5 pt-2">
          <div className="flex flex-row items-center ">
            <img src={logo} alt="" className="w-10 cursor-pointer" />
            <h2 className="  ml-5 text-center text-2xl text-white font-bold">JavaScript Visualizer 9000</h2>
          </div>
          
        </div>

        <div className="secondrow  pl-5 pt-3">
          <div class="flex flex-row items-center space-x-4">
            <div>
              <button
                type="button"
                class="inline-flex w-full justify-center  rounded-md border border-yellow-200 bg-yellow-400 px-4 py-2 text-sm font-medium text-black shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2  "
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                Choose an Example
                <svg
                  class="-mr-1 ml-2 h-5 w-5 bg-transparent"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div>
              <button class="bg-yellow-400 hover:bg-yellow-200 text-black  py-2 px-8 rounded">
                Run 
              </button>
            </div>
            <div>
              <button class=" items-center  flex space-x-2  hover:bg-yellow-400 text-yellow-400 hover:text-black font-bold py-2 px-8 border-2 hover:border-none border-yellow-400 rounded">
                Share
              </button>
              
            </div>
          </div>
        </div>

        <div className="thirdrow pl-5 pt-3">
          <input type="text" className=" input  border-yellow-400 bg-transparent border-2 divide-dashed rounded-lg " />
        </div>
      </div>

      <div className="rightside col-span-2  pr-20">
        <div class=" grid gap-4 pt-5 ">

        <div className=" h-32 w-15 p-4  bg-yellow-400 rounded-lg ">

            <div className="bg-transparent flex ">
              <h1 className="bg-transparent text-black flex-auto">Microtask Queue</h1>
              <p className="bg-transparent text-black">About</p>
            </div>

          </div>

          <div className=" h-32 w-full p-4  bg-yellow-400  rounded-lg">

            <div className="bg-transparent flex flex-row  space-x-11 ">
              <h1 className="bg-transparent text-black flex-auto">Microtask Queue</h1>
              <p className="bg-transparent text-black">About</p>
            </div>

          </div>

          <div className=" flex row  grid-flow-row gap-2 mt-1 space-x-3 ">

          <div className=" bg-yellow-400 h-10 work w-20  rounded-lg flex ">
          <h1 className="bg-transparent text-black flex-auto ml-4 pt-3">Microtask Queue</h1>
            <p className="bg-transparent text-black pt-3 mr-4">About</p>
          </div>
          <div className=" bg-yellow-400 h-10  work2 w-20 rounded-lg flex ">
          <h1 className="bg-transparent text-black flex-auto ml-4 pt-3">Microtask Queue</h1>
          <p className="bg-transparent black pt-3 mr-4">About</p>
          </div>
          

          </div>


        </div>
      </div>
    
    </div>

  );
}

export default App;
