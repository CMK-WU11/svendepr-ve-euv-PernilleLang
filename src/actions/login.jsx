"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import z from "zod"

export default async function Login(formState, formData) {
	const [username, password] = formData.values()

	console.log("formData", username, password)

	const schema = z.object({
		username: z.string().min(1, { message: "Indtast venligst et brugernavn!" }),
		password: z.string().min(1, { message: "Indtast venligst en adgangskode!" })
	})

	const validated = schema.safeParse({ username, password })

	if (!validated.success) {
		const errors = validated.error.format()

		return {
			success: false,
			formData: {
				username,
				password
			},
			errors
		}
	}

	const response = await fetch("http://localhost:4000/auth/token", {
		signal: AbortSignal.timeout(30000),
		method: "POST",
		headers: {
			"content-type": "application/json"
		},
		body: JSON.stringify({
			username,
			password
		})
	})
	console.log("fejl", response)

	if (response.status === 401) {
		return {
			success: false,
			errors: ["Forkert brugernavn eller adgangskode!"]
		}
	}

	if (response.statusText === "OK") {
		// håndter token, gem i cookie
		const data = await response.json()
		const cookieStore = await cookies()

		const expires = new Date(data.validUntil)

		cookieStore.set("ld_uid", data.userId, { expires })
		cookieStore.set("ld_token", data.token, { expires })

		redirect("/usercalender")
	} else {
		console.error("UPS", response.statusText)
		throw new Error("Auth error")
	}
}