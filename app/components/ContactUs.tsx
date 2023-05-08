import React from "react";
import Image from "next/image";

import { Rocket, Shuttle } from "../assets/images";
import ContactUsForm from "./ContactUsForm";

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
					<div className="text-base-100">
						Ready to get a better performing website?
					</div>
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
			<ContactUsForm />
		</section>
	);
};

export default ContactUs;
