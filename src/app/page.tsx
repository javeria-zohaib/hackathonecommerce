
import { CiCircleCheck, CiDeliveryTruck } from "react-icons/ci";
import Header from "./component/Header";
import { IoFolderOutline } from "react-icons/io5";
import { PiPlantThin } from "react-icons/pi";

export default function Home() {
  return (
    <>
       <Header/>
       
       <section className="text-white h-[704px] body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center h-[704px] ">
    <div className=" bg-[#2A254B] lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center  h-[584px] ">
      <h3 className="title-font sm:text-4xl font-normal  text-sm mb-12  mx-7 text-balance text-gray-400 mt-16">
      The furniture brand for the future, with timeless designs
      </h3>
     
      <div className="flex justify-center">
        <button className="inline-flex text-gray-300 bg-[#4E4D93] border-0 py-2 px-6 focus:outline-none hover:bg-[#4E4D93] rounded text-lg mx-7 ">
          View Collection
        </button>
        
      </div>
      <p className="mb-8 leading-relaxed mt-40 mx-7 text-gray-400 ">
      A new era in eco friendly furniture with Avelon, the French luxury retail brand
with nice fonts, tasteful colors and a beautiful way to display things digitally 
using modern web technologies.
      </p>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-[525px] h-[584px]  ">
      <img
        className="object-cover object-center rounded h-full"
        alt="hero"
        src="/heroimage.png"
        
        
      />
    </div>
  </div>
</section>
<section>
  <h3 className="flex  justify-center items-center mb-10 text-2xl text-[#2A254B]">What makes  our brand different</h3>
  <div className="flex flex-row mx-12 mb-10 text-[#2A254B] gap-6 text-balance" >
    <div>
    <CiDeliveryTruck />
    <h4>Next day as standard</h4>
    <p>Order before 3pm and get your order
    the next day as standard</p>
    </div>
    <div>
    <CiCircleCheck />
      <h4>Made by true artisans</h4>
      <p>Handmade crafted goods made with
      real passion and craftmanship</p>
    </div>
    <div>
    <IoFolderOutline />
      
      <h4>Unbeatable prices</h4>
      <p>For our materials and quality you won’t find better prices anywhere</p>
    </div>
    <div>
    <PiPlantThin />
      <h4>Recycled packaging
      </h4>
      <p>We use 100% recycled packaging to ensure our footprint is manageable</p>
    </div>

  </div>
</section>

  

<section className="body-font">
  <div className="container px-5 py-24 mx-auto">
    <h2 className="text-2xl text-[#2A254B] mb-7">New Cermics</h2>
    <div className="flex flex-wrap -m-4">

      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-[375px] rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="/chair.png"
          />
        </a>
        <div className="mt-4">
          <h3 className="text-[#4E4D93] text-xs tracking-widest title-font mb-1">
          The Dandychair
          </h3>
         
          <p className="mt-1 text-[#4E4D93]">€250</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-[375px] rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="/cermics.png"
          />
        </a>
        <div className="mt-4">
          <h3 className="text-[#4E4D93] text-xs tracking-widest title-font mb-1">
            Rustic VaseSet
          </h3>
          
          <p className="mt-1 text-[#4E4D93]">€155</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-[375px] rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="/lamp.png"
          />
        </a>
        <div className="mt-4">
          <h3 className="text-[#4E4D93] text-xs tracking-widest title-font mb-1">
            The SilkyVase
          </h3>
          
          <p className="mt-1 text-[#4E4D93]">€125</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-[375px] rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="pot.png"
          />
        </a>
        <div className="mt-4">
          <h3 className="text-[#4E4D93] text-xs tracking-widest title-font mb-1">
            The LucyLamp
          </h3>
        
          <p className="mt-1 text-[#4E4D93]">€399</p>
        </div>
      </div>
    </div>
    <button className=" border-b-[0.5px] mx-auto mt-7 w-full text-[#4E4D93] font-medium ">View collection</button>
  </div>
  
</section>
<section className=" body-font">
  <div className="container px-5 py-24 mx-auto">
    <h2 className="text-2xl text-[#2A254B] mb-7">Our popular products</h2>
    <div className="flex flex-wrap  justify-between gap-1 ">

      <div className="lg:w-[22%] md:w-[48%] w-full px-2">
        <a className="block relative h-[374px] w-[450px] rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="/large.png"
          />
        </a>
        <div className="mt-4">
          <h3 className="text-[#4E4D93] text-xs tracking-widest title-font mb-1">
          The popularsuede sofa
          </h3>
         
          <p className="mt-1 text-[#4E4D93]">€900</p>
        </div>
      </div>
      <div className="lg:w-[22%] md:w-[48%] w-full ml-44 px-2">
        <a className="block relative h-[375px] rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="/chair.png"
          />
        </a>
        <div className="mt-4">
          <h3 className="text-[#4E4D93] text-xs tracking-widest title-font mb-1">
            The Dandychair
          </h3>
          
          <p className="mt-1 text-[#4E4D93]">€250</p>
        </div>
      </div>
      <div className="lg:w-[22%] md:w-[48%] w-full  px-2">
        <a className="block relative h-[375px] rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="/chair2.png"
          />
        </a>
        <div className="mt-4">
          <h3 className="text-[#4E4D93] text-xs tracking-widest title-font mb-1">
            The Dandychair
          </h3>
          
          <p className="mt-1 text-[#4E4D93]">€250</p>
        </div>
      </div>
     
    </div>
    <button className=" border-b-[0.5px] mx-auto mt-7 w-full text-[#4E4D93] font-medium ">View collection</button>
  </div>
  
</section>





       
   
   
 

    </>

   

  );
}
