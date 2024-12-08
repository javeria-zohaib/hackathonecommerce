import { FaPinterest } from "react-icons/fa6";
import { SlSocialSkype } from "react-icons/sl";

export default function Footer(){
    return(
        <>
        <footer className="text-gray-600 body-font bg-[#2A254B] h-[500px]">
  <div className="container px-5 py-20 mx-auto ">
    <div className="flex flex-wrap md:text-left text-center order-first mt-16">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-35">
        <h3 className="title-font font-medium text-white  text-[14px]tracking-widest text-sm mb-3">
          Menu
        </h3>
        <nav className="list-none mb-10">
          <li>
            <a className="text-white text-[14px]">Newarrival</a>
          </li>
          <li>
            <a className="text-white text-[14px]">Bestseller</a>
          </li>
          <li>
            <a className="text-white text-[14px]">Recentlyviewed</a>
          </li>
          <li>
            <a className="text-white text-[14px]">Popular this week</a>
          </li>
          <li>
            <a className="text-white text-[14px]">All products</a>
          </li>

        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h3 className="title-font font-medium text-white tracking-widest text-sm mb-3">
          CATEGORIES
        </h3>
        <nav className="list-none mb-10">
          <li>
            <a className="text-white text-[14px]">Crockery</a>
          </li>
          <li>
            <a className="text-white text-[14px]">Furniture</a>
          </li>
          <li>
            <a className="text-white text-[14px]">Homeware</a>
          </li>
          <li>
            <a className="text-white text-[14px]">Plantpot</a>
          </li>
          <li>
            <a className="text-white text-[14px]">Chairs</a>
          </li>
          <li>
            <a className="text-white text-[14px]">Crockery</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h3 className="title-font font-medium text-white tracking-widest text-sm mb-3">
          Our Company
        </h3>
        <nav className="list-none mb-10">
          <li>
            <a className="text-white text-[14px]">Aboutus</a>
          </li>
          <li>
            <a className="text-white text-[14px]">Vacancies</a>
          </li>
          <li>
            <a className="text-white text-[14px]">Contactus</a>
          </li>
          <li>
            <a className="text-white text-[14px]">Privacy</a>
          </li>
          <li>
            <a className="text-white text-[14px]">ReturnPolicy</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4  ">
       
        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start  ">
          <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-5">
            <label
              htmlFor="footer-field"
              className="leading-7 text-sm text-white"
            >
              join our mailing list
            </label>
            <input
              type="text"
              id="footer-field"
              name="footer-field"
              placeholder="your@email.com"
              className="w-[350px] bg-[#4E4D93] bg-opacity-50 rounded border py-1 border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-white leading-8 transition-colors duration-200 ease-in-out relative "
            />
          </div>
          <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex bg-white text-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded absolute right-1">
            Sign up
          </button>
        </div>
      
      </div>
    </div>
    
    <div className=" px-5 py-6 mx-auto flex items-center sm:flex-row flex-col border-t-[0.5px] border-white ">
      
      
        <a
          href="https://twitter.com/knyttneve"
          rel="noopener noreferrer"
          className="text-white ml-1 text-[14px]"
          target="_blank"
        >
          Copyright 2022 Avion LTD
        </a>
      
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a className="text-white">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
        </a>
        <a className="ml-3 text-white">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </a>
        <a className="ml-3 text-white">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
          </svg>
        </a>
        <a className="ml-3 text-white">
          <svg
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path
              stroke="none"
              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
            />
            <circle cx={4} cy={4} r={2} stroke="none" />
          </svg>
        </a >
        <a className="text-white w-5 h-5 ml-3 mt-1 "><FaPinterest /></a>
        <a className="text-white  w-5 h-5 ml-3 mt-1"><SlSocialSkype /></a>
      </span>
    </div>
  </div>
  

</footer>
  
  

        </>
    )
}