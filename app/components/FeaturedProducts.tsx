import Image from "next/image";
import React from "react";
import { mockup1 } from "../assets/images/icons";
import Product from "./Product";

import products from "../data/products";

const FeaturedProducts = () => {
	return (
		<section className="container mx-auto px-6 " id="products">
			<h3 className="font-bold text-4xl text-center text-primary-900">
				{" "}
				<span className="before:block before:absolute before:top-2/3 before:right-0 before:bottom-0 before:left-0 before:h-1/3 before:bg-orange-400 relative inline-block">
					<span className="relative">Featured</span>
				</span>{" "}
				Products
			</h3>
			<div className="mt-12 grid gap-8">
				{products.map((product) => {
					return <Product key={product.id} product={product} />;
				})}
			</div>
		</section>
	);
};

export default FeaturedProducts;
