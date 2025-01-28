import Link from "next/link";

export default function Login() {
  return (
    <form className="relative bg-[url('/splash-image.jpg')] bg-cover bg-center h-screen w-screen flex flex-col justify-center items-center">
         <div className="absolute top-48 bg-black opacity-50 w-[100%] h-[50%]"></div>
        <div className="text-white text-[36px]">
            <h2>Log ind</h2>
        </div>
        <div className="w-[75%] h-[5%]">
            <label>
                <input type="text" placeholder="brugernavn" name="username" className="w-[100%] h-[100%] text-[18px] pl-[0.5em]"/>
            </label>
        </div>
        <div className="pt-[0.5em] w-[75%] h-[6%]">
            <label>
                <input type="text" placeholder="adgangskode" name="password" className="w-[100%] h-[100%] text-[18px] pl-[0.5em]" />
            </label>
        </div>
        <div className="w-[75%] h-[5%] ml-[4em]">
            <Link href="/usercalender">
                <button className="bg-[#5E2E53] text-white text-[18px] rounded-md  mt-[1em] w-[75%] h-[100%]">Log Ind</button>
            </Link>
        </div>
    </form>
    <h2>Godmorgen</h2>
  )
}