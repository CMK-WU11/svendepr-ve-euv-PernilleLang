"use client"

import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";
import { BsPerson } from "react-icons/bs";

export default function Navigation( ) {

    return(
        <nav className="bg-white h-[4em] fixed-bottom-0">
            <ul className="flex justify-around mt-[1em] mb-[1em]">
                <li className="border rounded-full border-black h-[3em] w-[4em] flex items-center justify-center">
                    <Link href="/">
                        <AiOutlineHome size={"1.5em"}/>
                    </Link>
                </li>
                <li className="border rounded-[20em] border-black h-[3em] w-[4em] flex items-center justify-center">
                    <Link href="/search">
                        <FiSearch size={"1.5em"} />
                    </Link>
                </li>
                <li className="border rounded-[20em] border-black h-[3em] w-[4em] flex items-center justify-center">
                    <Link href="/loginform">
                        <BsPerson size={"1.5em"} /> 
                    </Link>     
                </li>
                {/* <li className="border rounded-[20em] border-black h-[3em] w-[4em] flex items-center justify-center">
                    <Link href="/usercalender">
                        <SlCalender size={"1.5em"} />
                    </Link>
                </li> */}
            </ul>
        </nav>
    )
}
