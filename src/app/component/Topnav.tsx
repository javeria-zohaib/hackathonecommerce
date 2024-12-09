"use client"
import { useState } from "react"
import Link from "next/link"
import { FaRegCircleUser } from "react-icons/fa6"
import { HiOutlineShoppingCart } from "react-icons/hi"
import { IoSearchOutline } from "react-icons/io5"

export default function Topnav(){

const[isMenuOpen,setIsMenuOpen]=useState(false)



    return(
        
<header className=" body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    
      <span className="ml-3 text-xl text-[#2A254B]">Avions</span>
      <button
          className="md:hidden ml-auto text-[#726E8D]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </button>
   
    
    <nav  className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:ml-auto flex-wrap items-center text-base justify-center`}>
      <Link  href="/" className="mr-5 hover:text-gray-900 text-[#726E8D]">Home</Link>
      <Link  href="/about" className="mr-5 hover:text-gray-900 text-[#726E8D]">Aboutus</Link>
      <Link  href="/product" className="mr-5 hover:text-gray-900 text-[#726E8D]">product</Link>
      <Link  href="/contact" className="mr-5 hover:text-gray-900 text-[#726E8D]">contact</Link>
      <Link  href="/cart" className="mr-5 hover:text-gray-900 text-[#726E8D]"><HiOutlineShoppingCart/></Link>
      <Link  href="/" className="mr-5 hover:text-gray-900"><IoSearchOutline/></Link>
      <Link  href="/" className="mr-5 hover:text-gray-900 text-[#726E8D]">
      <FaRegCircleUser /></Link>
     
    </nav>
   </div>
</header>
    )

}


