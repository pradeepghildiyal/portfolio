import React from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

type ServiceCardProps = {
	icon: React.ReactNode;
	title: string;
	paragraph: string;
};
const ServiceCard = ({ icon, title, paragraph }: ServiceCardProps) => {
	return (
		<div>
			<div className="flex flex-col items-stretch justify-between h-full bg-white p-4 rounded-xl group hover:bg-primary-700 hover:translate-y-4 transition duration-300">
				<div className="bg-primary-700 p-4 w-fit rounded-xl group-hover:bg-white shadow-xl shadow-primary-300">
					<div className="text-2xl text-white  group-hover:text-primary-700 group-hover:shadow-none transition duration-300">
						{icon}
					</div>
				</div>
				<h3 className="mt-20 font-bold text-2xl text-primary-900 group-hover:text-base-100 transition duration-300">
					{title}
				</h3>
				<p className="font-medium text-xs mt-5 text-primary-800 group-hover:text-primary-100 transition">
					{paragraph}
				</p>
			</div>
		</div>
	);
};

export default ServiceCard;
