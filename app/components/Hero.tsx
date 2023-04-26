import React from "react";
import Image from "next/image";
import {
	AiOutlineInstagram,
	AiOutlineBehanceSquare,
	AiFillLinkedin,
	AiFillBehanceSquare,
} from "react-icons/ai";

import { line } from "../assets/images/icons";
import profilePic from "../assets/images/GRAPHIC.png";
import { Astronaut } from "../assets/images";

const Hero = () => {
	return (
		<section className="bg-primary-800 py-6 w-full" id="hero">
			<div className="items-center px-6 container m-auto">
				<div
					className="p-6 mx-auto grid
				sm:grid-cols-2 items-center"
				>
					<div className="order-2 md:order-1">
						<h1 className="text-base-100 uppercase font-bold">
							Hi, I am Pradeep Ghildiyal
						</h1>
						<h3 className="text-2xl md:text-4xl lg:text-6xl font-bold mt-6 leading-normal text-white">
							Proffesional{" "}
							<span className="before:block before:absolute before:top-2/3 before:right-0 before:bottom-0 before:left-0 before:h-1/3 before:bg-orange-400 relative inline-block">
								<span className="relative">Web Developer</span>
							</span>{" "}
							based in USA{" "}
						</h3>
						<p className="mt-4 text-base-100">
							Varius amet, integer tellus non eget viverra. Ultrices tellus
							donec gravida id sed senectus dolor cursus sed. Ullamcorper tellus
							ac cras nec, pretium laoreet duis.{" "}
						</p>
						<div className="flex flex-col lg:flex-row gap-4 mt-6">
							<div>
								<button className="bg-primary-400 grow w-full text-white px-6 py-2 rounded-md animate-pulse">
									Contact Us
								</button>
							</div>
							<div className="flex gap-4 justify-center items-center">
								<div>
									<AiOutlineInstagram className="text-gray-100 text-2xl" />
								</div>
								<div>
									<AiFillBehanceSquare className="text-gray-100 text-2xl" />
								</div>
								<div>
									<AiFillLinkedin className="text-gray-100 text-2xl" />
								</div>
							</div>
							<div className="flex align-middle grow-0 text-primary-50 justify-center fill-white">
								<Image
									src={line}
									alt="line"
									width={150}
									height={16}
									className="animate-pules color fill-white"
								/>
							</div>
						</div>
					</div>
					<div className="order-1 p-8">
						<Image alt="My Photo" src={Astronaut} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
