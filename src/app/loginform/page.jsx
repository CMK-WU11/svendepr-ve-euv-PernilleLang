"use client"

import Login from "@/actions/login"
import { useActionState, useEffect } from "react"

export default function LoginForm () {
    
    const [formState, formAction] = useActionState(Login)

	useEffect(function () {
		console.log("formState", formState)
	}, [formState])

    {/* const og useEffect er taget med  stor inspiration fra gennemgangen af terminsprøven med Brian*/ }

  return (
    <section className="relative z-0 bg-[url('/splash-image.jpg')] bg-cover bg-center h-screen w-screen flex flex-col justify-center items-center">
        <div className="absolute z-10 top-24 bg-black opacity-50 w-[100%] h-[75%] transform rotate-45"></div>
        <form action={formAction} className="z-20 h-[25%] flex flex-col items-center">
            <div className="text-white text-[36px]">
                <h2>Log ind</h2>
            </div>
            <div className="w-[75%]">
                <label>
                    <input type="text" required placeholder="Bruger" name="username" className="w-[100%] h-[100%] text-[18px] pl-[0.5em]"/>
                </label>
                <span>{formState?.errors?.username?._errors}</span>
            </div>
            <div className="pt-[0.5em] w-[75%]">
                <label>
                    <input type="password" required placeholder="Adgangskode" name="password" className="w-[100%] h-[100%] text-[18px] pl-[0.5em]" />
                </label>
                <span>{formState?.errors?.password?._errors}</span>
            </div>
            <div className="w-[75%] ml-[4em]">
                <button type="submit" className="bg-[#5E2E53] text-white text-[18px] rounded-md  mt-[1em] w-[70%] h-[75%]">Log Ind</button>
            </div>
        </form>
    </section>
  )
}