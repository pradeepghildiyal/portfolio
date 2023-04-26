"use client";
import Carousel from "./Carousel";

import Image from "next/image";

import reviews from "../data/testimonials";

const Testimonials = () => {
	return (
		<section>
			<div className="container mx-auto px-6" id="second">
				<Carousel reviews={reviews} />
			</div>
		</section>
	);
};

export default Testimonials;
