import React from "react";
import Image from "next/image";
import { mockup1 } from "../assets/images/icons";
import MyModal from "./MyModal";

const Product = ({ product }) => {
	return (
		<div className="w-full bg-primary-500 grid grid-cols-2 container mx-auto px-6 py-20 rounded-2xl items-center ">
			<div className="col-span-2 sm:col-span-1">
				<h3 className="text-2xl md:text-4xl text-primary-100 font-bold">
					{product.name}
				</h3>
				<div className="flex flex-wrap gap-4 mt-8 text-base-900">
					{product.tags.map((tag) => {
						return (
							<span className="bg-primary-300 bg-opacity-50 text-primary-50 px-4 py-2 rounded-md">
								{tag}
							</span>
						);
					})}
				</div>
				<div className="mt-16 font-bold text-base text-primary-100 relative flex items-start">
					<MyModal product={product} />
				</div>
			</div>
			<div className="mt-4 sm:mt-0 w-full col-span-2 sm:col-span-1">
				<Image
					src={product.primaryImage}
					alt="Decoration"
					width={500}
					height={500}
					className="drop-shadow-2xl m-auto"
				/>
			</div>
		</div>
	);
};

export default Product;
