import { CiCircleCheck, CiDeliveryTruck } from "react-icons/ci";
import { IoFolderOutline } from "react-icons/io5";
import { PiPlantThin } from "react-icons/pi";

export default function About (){
    return(
        <>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
      <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-[#2A254B]">
      A brand built on the love of craftmanship,
quality and outstanding customer service
View our products
      </h1>
      <button className="flex-shrink-0 text-[#2A254B] bg-white -0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">
        View our products
      </button>
    </div>
  </div>
</section>
<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        Before they sold out
        
      </h1>
      <p className="mb-8 leading-relaxed">
        Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
        plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
        tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
        chambray.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Button
        </button>
       
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img
        className="object-cover object-center rounded"
        alt="hero"
        src="https://dummyimage.com/720x600"
      />
    </div>
  </div>
</section>
<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img
        className="object-cover object-center rounded"
        alt="hero"
        src="https://dummyimage.com/720x600"
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        Before they sold out
        <br className="hidden lg:inline-block" />
        readymade gluten
      </h1>
      <p className="mb-8 leading-relaxed">
        Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
        plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
        tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
        chambray.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Button
        </button>
       
      </div>
    </div>
  </div>
</section>
<section className="py-12">
  <h3 className="flex justify-center items-center mb-10 text-2xl text-[#2A254B] text-center">
    What makes our brand different
  </h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-6 text-[#4E4D93]">
    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
      <CiDeliveryTruck className="text-4xl mb-4" />
      <h4 className="text-lg font-medium mb-2">Next day as standard</h4>
      <p className="text-sm">
        Order before 3pm and get your order the next day as standard
      </p>
    </div>
    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
      <CiCircleCheck className="text-4xl mb-4" />
      <h4 className="text-lg font-medium mb-2">Made by true artisans</h4>
      <p className="text-sm">
        Handmade crafted goods made with real passion and craftsmanship
      </p>
    </div>
    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
      <IoFolderOutline className="text-4xl mb-4" />
      <h4 className="text-lg font-medium mb-2">Unbeatable prices</h4>
      <p className="text-sm">
        For our materials and quality, you won’t find better prices anywhere
      </p>
    </div>
    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
      <PiPlantThin className="text-4xl mb-4" />
      <h4 className="text-lg font-medium mb-2">Recycled packaging</h4>
      <p className="text-sm">
        We use 100% recycled packaging to ensure our footprint is manageable
      </p>
    </div>
  </div>
</section>
<section className=" body-font">
  <div className="container px-5 py-24 mx-auto h-[481px]">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-[#2A254B]">
      Join the club and get the benefits
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-2xl text-[#2A254B]">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
      </p>
    </div>
    <div className="flex lg:w-2/3 w-full mx-auto items-center">
      <div className="relative w-full max-w-lg mx-auto">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-3 pl-4 pr-20 transition-colors duration-200 ease-in-out "
        />
        <button className="absolute right-1 top-1/2 transform -translate-y-1/2 text-white bg-[#2A254B] border-0 py-4 px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm">
          Signup
        </button>
      </div>
      </div>
    </div>
  
</section>
</>

    )
}