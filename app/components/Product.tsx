import React from "react";
import Image from "next/image";
import { mockup1 } from "../assets/images/icons";
import MyModal from "./MyModal";

const Product = () => {
	return (
		<div className="w-full bg-primary-500 grid grid-cols-2 container mx-auto px-6 py-20 rounded-2xl items-center">
			<div className="col-span-2 sm:col-span-1">
				<h3 className="text-4xl text-primary-50 font-bold">Job Website</h3>
				<div className="flex gap-4 mt-8 text-base-900">
					<span className="bg-primary-50 bg-opacity-50 px-4 py-2 rounded-md">
						UI UX Design
					</span>
					<span className="bg-primary-50 bg-opacity-50 px-4 py-2 rounded-md">
						Branding
					</span>
				</div>
				<div className="mt-16 font-bold text-base text-primary-100 relative flex items-start">
					<MyModal />
				</div>
			</div>
			<div className="col-span-2 sm:col-span-1 mt-8 lg:mt-0">
				<Image
					src={mockup1}
					alt="Decoration"
					width={"50%"}
					height={"auto"}
					className="drop-shadow-2xl sm:col-span-1"
				/>
			</div>
		</div>
	);
};

export default Product;
