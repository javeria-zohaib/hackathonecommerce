
import { CiCircleCheck, CiDeliveryTruck } from "react-icons/ci";
import Header from "./component/Header";

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
  <h3>What makes  our brand different</h3>
  <div >
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
      
      
      <h4></h4>
      <p></p>
    </div>
    <div>
      <h4></h4>
      <p></p>
    </div>

  </div>
</section>

       
   
   
 

    </>

   

  );
}
