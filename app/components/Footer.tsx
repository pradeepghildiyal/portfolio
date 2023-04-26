import React from "react";
import {
	AiFillBehanceSquare,
	AiFillLinkedin,
	AiOutlineInstagram,
} from "react-icons/ai";

const Footer = () => {
	return (
		<footer className="container mx-auto ">
			<div className=" px-6  py-16">
				<div>
					<h3 className="lg:text-6xl text-4xl font-bold text-primary-800">
						Have a project idea to{" "}
						<span className="before:block before:absolute before:top-2/3 before:right-0 before:bottom-0 before:left-0 before:h-1/3 before:bg-orange-400 relative inline-block">
							<span className="relative">collaborate with</span>
						</span>
						?
					</h3>
				</div>
				<div className="mt-8 flex justify-center">
					<button className="bg-primary-700 text-white px-6 py-2 rounded-md w-full md:max-w-sm animate-pulse">
						Contact Us
					</button>
				</div>
			</div>
			<div className="flex gap-4 justify-center items-center py-12 ">
				<div>
					<AiOutlineInstagram className="text-primary-500 text-2xl" />
				</div>
				<div>
					<AiFillBehanceSquare className="text-primary-500 text-2xl" />
				</div>
				<div>
					<AiFillLinkedin className="text-primary-500 text-2xl" />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
