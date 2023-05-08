import Image from "next/image";
import React from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { MdSlowMotionVideo } from "react-icons/md";
import { BsLaptop } from "react-icons/bs";
import { TbPointer } from "react-icons/tb";

import ServiceCard from "./ServiceCard";
import services from "../data/services";

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
					{services.map((service) => {
						return (
							<ServiceCard
								key={service.id}
								icon={service.icon}
								title={service.title}
								paragraph={service.subtitle}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Services;
