"use client";
import React, { useState } from "react";

function ContactUsForm() {
	const [fullname, setFullname] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	//   Form validation
	const [errors, setErrors] = useState({});

	//   Setting button text
	const [buttonText, setButtonText] = useState("Improve your website now");

	const [showSuccessMessage, setShowSuccessMessage] = useState(false);
	const [showFailureMessage, setShowFailureMessage] = useState(false);

	const handleValidation = () => {
		let tempErrors = {};
		let isValid = true;

		if (fullname.length <= 0) {
			tempErrors["fullname"] = true;
			isValid = false;
		}
		if (email.length <= 0) {
			tempErrors["email"] = true;
			isValid = false;
		}
		if (subject.length <= 0) {
			tempErrors["subject"] = true;
			isValid = false;
		}
		if (message.length <= 0) {
			tempErrors["message"] = true;
			isValid = false;
		}

		setErrors({ ...tempErrors });
		console.log("errors", errors);
		return isValid;
	};

	//   const [form, setForm] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		let isValidForm = handleValidation();

		if (isValidForm) {
			setButtonText("Sending");
			const res = await fetch("/api/sendgrid", {
				body: JSON.stringify({
					email: email,
					fullname: fullname,
					subject: subject,
					message: message,
				}),
				headers: {
					"Content-Type": "application/json",
				},
				method: "POST",
			});

			const { error } = await res.json();
			if (error) {
				console.log(error);
				setShowSuccessMessage(false);
				setShowFailureMessage(true);
				setButtonText("Send");

				// Reset form fields
				setFullname("");
				setEmail("");
				setMessage("");
				setSubject("");
				return;
			}
			setShowSuccessMessage(true);
			setShowFailureMessage(false);
			setButtonText("Send");
			// Reset form fields
			setFullname("");
			setEmail("");
			setMessage("");
			setSubject("");
		}
		console.log(fullname, email, subject, message);
	};
	return (
		<main>
			<header className="p-8 grid grid-cols-1 w-full  gap-4 pt-10 lg:px-10   md:h-96">
				<form
					method="POST"
					onSubmit={handleSubmit}
					className="rounded-lg shadow-xl flex w-full flex-col px-8 py-8 bg-primary-900 -mt-32"
				>
					<h1 className="text-2xl font-bold text-primary-50 ">
						Send a message
					</h1>

					<label
						htmlFor="fullname"
						className="text-primary-100 font-light mt-8 "
					>
						Full name
						<span className="text-primary-100 text-2xl  ml-2  ">*</span>
					</label>
					<input
						type="text"
						value={fullname}
						onChange={(e) => {
							setFullname(e.target.value);
						}}
						name="fullname"
						className="bg-transparent border-b border-primary-800 rounded-md py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-primary-100 font-light text-primary-100"
					/>
					{errors?.fullname && (
						<p className="text-red-500">Fullname cannot be empty.</p>
					)}

					<label htmlFor="email" className="text-primary-100 font-light mt-4 ">
						E-mail
						<span className="text-primary-100 text-2xl  ml-2 ">*</span>
					</label>
					<input
						type="email"
						name="email"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						className="bg-transparent border-b border-primary-800 rounded-md py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-primary-100 font-light text-primary-100"
					/>
					{errors?.email && (
						<p className="text-red-500">Email cannot be empty.</p>
					)}

					<label
						htmlFor="subject"
						className="text-primary-100 font-light mt-4 "
					>
						Subject
						<span className="text-primary-100 text-2xl  ml-2  ">*</span>
					</label>
					<input
						type="text"
						name="subject"
						value={subject}
						onChange={(e) => {
							setSubject(e.target.value);
						}}
						className="bg-transparent border-b border-primary-800 rounded-md py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-primary-100 font-light text-primary-100"
					/>
					{errors?.subject && (
						<p className="text-red-500">Subject cannot be empty.</p>
					)}
					<label
						htmlFor="message"
						className="text-primary-100 font-light mt-4 "
					>
						Message
						<span className="text-primary-100 text-2xl  ml-2  ">*</span>
					</label>
					<textarea
						name="message"
						value={message}
						onChange={(e) => {
							setMessage(e.target.value);
						}}
						className="bg-transparent border-b border-primary-800 rounded-md py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-primary-100 font-light text-primary-100"
					></textarea>
					{errors?.message && (
						<p className="text-red-500">Message body cannot be empty.</p>
					)}
					<div className="flex flex-row items-center justify-start">
						<button
							type="submit"
							className="px-10 mt-8 py-2 w-full justify-center bg-primary-700 text-primary-50 font-light rounded-md text-lg flex flex-row items-center hover:bg-primary-800 transition-all  "
						>
							{buttonText}
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								className="text-primary-400 ml-2"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
									fill="currentColor"
								/>
							</svg>
						</button>
					</div>
					<div className="text-left">
						{showSuccessMessage && (
							<p className="text-primary-100 font-semibold text-sm my-2">
								Thankyou! Your Message has been delivered.
							</p>
						)}
						{showFailureMessage && (
							<p className="text-red-500">
								Oops! Something went wrong, please try again.
							</p>
						)}
					</div>
				</form>
			</header>
			<section className=""></section>
		</main>
	);
}

export default ContactUsForm;
