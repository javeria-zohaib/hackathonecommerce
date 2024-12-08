import { FaRegCircleUser } from "react-icons/fa6";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";


export default function Header(){
    return(
        <>
        <header className="max-w-[1440px] h-[70px] flex  justify-between  items-center p-2 border-b-[0.5px] border-[#726E8D] md:h-[70px]">
<IoSearchOutline  className=" text-[#726E8D] text-xl sm:text-xl"/>
<h1 className="items-center text-[#2A254B] text-[24px] font-normal sm:text-xl md:text-2xl">Avions</h1>
<div className="justify-end flex gap-4 mr-6">
<HiOutlineShoppingCart className=" text-[#726E8D] text-xl sm:text-xl"/>
<FaRegCircleUser className=" text-[#726E8D] text-xl sm:text-xl"/>
</div>

</header>
<nav >
    <ul className=" flex  justify-center items-center gap-4 mt-3 text-[#726E8D] flex-wrap sm:text-base">
        <li><a href="/">Plantpots</a></li>
        <li><a href="/">Ceramics</a></li>
        <li><a href="/">Tables</a></li>
        <li><a href="/">Chairs</a></li>
        <li><a href="/">Crockery</a></li>
        <li><a href="/">Tablewares</a></li>
        <li><a href="/">Cutlery</a></li>
    </ul>

</nav>

        </>
    )


}