"use client"

import Link from "next/link";
import Login from "@/actions/login"
import { useActionState, useEffect } from "react"

export default function LoginForm () {
    
    const [formState, formAction] = useActionState(Login)

	useEffect(function () {
		console.log("formState", formState)
	}, [formState])


  return (
    <form 
        action={formAction}
        className="relative bg-[url('/splash-image.jpg')] bg-cover bg-center h-screen w-screen flex flex-col justify-center items-center">
        {/* <div className="absolute top-24 bg-black opacity-50 w-[100%] h-[75%] transform rotate-45"></div> */}
        <div className="text-white text-[36px]">
            <h2>Log ind</h2>
        </div>
        <div className="w-[75%] h-[5%]">
            <label>
                <input type="text" required placeholder="Bruger" name="username" className="w-[100%] h-[100%] text-[18px] pl-[0.5em]"/>
            </label>
            <span>{formState?.errors?.username?._errors}</span>
        </div>
        <div className="pt-[0.5em] w-[75%] h-[6%]">
            <label>
                <input type="password" required placeholder="Adgangskode" name="password" className="w-[100%] h-[100%] text-[18px] pl-[0.5em]" />
            </label>
            <span>{formState?.errors?.password?._errors}</span>
        </div>
        <div className="w-[75%] h-[5%] ml-[4em]">
            <Link href="/loginform">
                <button className="bg-[#5E2E53] text-white text-[18px] rounded-md  mt-[1em] w-[75%] h-[100%]">Log Ind</button>
            </Link>
        </div>
    </form>
  )
}