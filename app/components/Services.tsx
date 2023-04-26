import Image from "next/image";
import React from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { MdSlowMotionVideo } from "react-icons/md";
import { BsLaptop } from "react-icons/bs";
import { TbPointer } from "react-icons/tb";

import { lens, media, mobile, pointer } from "../assets/images/icons";
import ServiceCard from "./ServiceCard";
import { title } from "process";

const Services = () => {
	return (
		<section className="bg-primary-50 py-20" id="services">
			<div className="container mx-auto px-6 ">
				<h3 className="font-bold text-4xl text-center text-primary-900">
					What{" "}
					<span className="before:block before:absolute before:top-2/3 before:right-0 before:bottom-0 before:left-0 before:h-1/3 before:bg-orange-400 relative inline-block">
						<span className="relative">services</span>
					</span>{" "}
					do I provide
				</h3>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 items-stretch">
					{/* Service Card */}
					<ServiceCard
						icon={<HiOutlineMagnifyingGlass />}
						title="UI Design"
						paragraph="Varius amet, integer tellus non eget viverra. Ultrices tellus donec gravida id sed senectus dolor cursus sed. "
					/>
					<ServiceCard
						icon={<MdSlowMotionVideo />}
						title="Motion Design"
						paragraph="Porta sit curabitur tempor nulla diam. Lacus ligula sem tristique egestas orci cursus lectus ut."
					/>
					<ServiceCard
						icon={<BsLaptop />}
						title="Prototype"
						paragraph="Ridiculus nulla eu ultricies auctor purus. Tristique facilisis fermentum non in."
					/>
					<ServiceCard
						icon={<TbPointer />}
						title="UX Research"
						paragraph="Ac non massa non accumsan eget congue pellentesque neque. Pulvinar aliquet at puru."
					/>
				</div>
			</div>
		</section>
	);
};

export default Services;
