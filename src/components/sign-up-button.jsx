"use client"

import { useState } from "react"

// Dette er taget fra vores gennemgang af terminsprøve med Brian

export default function SignUpButton({isSignedUp, handleSignup, handleLeave}) {
	const [signedUp, setSignedUp] = useState(isSignedUp)

	function handleClick() {
		if (signedUp) {
			setSignedUp(!signedUp)
			handleLeave()
		} else {
			setSignedUp(!signedUp)
			handleSignup()
		}
	}

	return (
		<>
			{signedUp
				? <button onClick={handleClick} className="absolute bg-[#5E2E53] text-white text-[18px] rounded-md w-[50%] h-[6%]">Leave</button>
				: <button onClick={handleClick} className="absolute bg-[#5E2E53] text-white text-[18px] rounded-md w-[50%] h-[6%]">Sign Up</button>}
		</>
	)
}