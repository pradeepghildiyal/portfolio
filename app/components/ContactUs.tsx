import React from "react";
import Image from "next/image";

import { Rocket, Shuttle } from "../assets/images";

const ContactUs = () => {
	return (
		<section
			className="grid container grid-cols-1 sm:grid-cols-2 gap-8 px-6 py-16 mx-auto rounded-lg bg-primary-800"
			id="contact"
		>
			<div className="flex flex-col justify-between text-primary-100 text-center items-center">
				<div className="space-y-2">
					<h2 className="text-4xl font-bold leading-tight lg:text-5xl">
						Let's launch your website!
					</h2>
					<div className="text-base-400">Vivamus in nisl metus? Phasellus.</div>
				</div>
				<Image
					src={Shuttle}
					alt="line"
					width={250}
					height={100}
					className="animate-pules items-center text-center"
					sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
				/>
			</div>
			<form
				novalidate=""
				className="space-y-6 ng-untouched ng-pristine ng-valid text-primary-100"
			>
				<div>
					<label for="name" className="text-sm">
						Full name
					</label>
					<input
						id="name"
						type="text"
						placeholder=""
						className="w-full p-3 rounded  border-2 mt-2 border-primary-500"
					/>
				</div>
				<div>
					<label for="email" className="text-sm">
						Email
					</label>
					<input
						id="email"
						type="email"
						className="w-full p-3 rounded border-2 mt-2 border-primary-500"
					/>
				</div>
				<div>
					<label for="message" className="text-sm">
						Message
					</label>
					<textarea
						id="message"
						rows={3}
						className="w-full p-3 rounded border-2 mt-2 border-primary-500"
					></textarea>
				</div>
				<button
					type="submit"
					className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-primary-500 text-primary-50 animate-pulse"
				>
					Send Message
				</button>
			</form>
		</section>
	);
};

export default ContactUs;
