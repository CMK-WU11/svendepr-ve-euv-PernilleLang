"use client"

import Login from "@/actions/login"
import { useActionState, useEffect } from "react"

export default function LoginForm() {

    const [formState, formAction] = useActionState(Login)

    useEffect(function () {
        console.log("formState", formState)
    }, [formState])

    {/* const og useEffect er taget med  stor inspiration fra gennemgangen af terminsprøven med Brian*/ }

    return (
        <article className="relative z-0 bg-[url('/splash-image.jpg')] bg-cover bg-center h-screen w-screen flex flex-col justify-center items-center overflow-hidden">
            <div className="absolute z-10 top-24 bg-black opacity-50 w-[100%] h-[75%] transform rotate-45"></div>
            <form action={formAction} className="z-20 h-[25%] flex flex-col items-center">
                <div className="text-white text-[36px]">
                    <p>Log ind</p>
                </div>
                <div className="w-[75%]">
                    <label>
                        <input type="text" required placeholder="Bruger" name="username" className="w-[100%] h-[100%] text-[18px] pl-[0.5em]" />
                    </label>
                    <span className="text-red-700">{formState?.username?.password?._errors}</span>
                </div>
                <div className="pt-[0.5em] w-[75%]">
                    <label>
                        <input type="password" required placeholder="Adgangskode" name="password" className="w-[100%] h-[100%] text-[18px] pl-[0.5em]" />
                    </label>
                    <span className="text-red-700">{formState?.errors?.password?._errors}</span>
                </div>
                <div className="w-[75%] ml-[4em] flex flex-col justify-center">
                    <button
                        type="submit"
                        className="bg-[#5E2E53] text-white text-[18px] rounded-md  mt-[1em] w-[70%] h-[75%]">
                        Log Ind
                    </button>
                    <span className="text-red-700 font-bold">{formState?.errors}</span>
                </div>
            </form>
        </article>
    )
}