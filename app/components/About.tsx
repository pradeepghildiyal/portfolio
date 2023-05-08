// "use client";
import clientImages from "../assets/images/clients";
import Image from "next/image";

import {
	htmlLogo,
	cssLogo,
	nextjsLogo,
	reactLogo,
	tailwindLogo,
} from "../assets/images/icons";

import { GrReactjs } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { ImCss3 } from "react-icons/im";
import { AiFillHtml5 } from "react-icons/ai";

const About = () => {
	return (
		<section className="bg-primary-900 justify-center py-32 px-6">
			<div className=" container mx-auto ">
				<h3 className="text-xl text-primary-100 text-center">
					With my expertise in HTML, CSS, JavaScript, Next.js, React, and
					Tailwind, and my ability to design user interfaces, create web
					animations, build responsive websites, and create scroll motion
					effects, I can help you create a web application that stands out from
					the competition and delivers a great user experience.
				</h3>
				<div className="justify-between items-center flex flex-wrap w-full gap-4 md:gap-12  text-4xl md:text-8xl text-primary-50 mt-8">
					<div className="md:p-12 p-6 hover:scale-110 transition-all ">
						<AiFillHtml5 title="HTML5" />
					</div>
					<div className="md:p-12 p-6 hover:scale-110 transition-all">
						<ImCss3 title="CSS" />
					</div>
					<div className="md:p-12 p-6  hover:scale-110 transition-all">
						<SiTailwindcss title="TailwindCSS" />
					</div>
					<div className="md:p-12 p-6  hover:scale-110 transition-all">
						<GrReactjs title="React" />
					</div>
					<div className="md:p-12 p-6 hover:scale-110 transition-all">
						<TbBrandNextjs title="NextJs" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
