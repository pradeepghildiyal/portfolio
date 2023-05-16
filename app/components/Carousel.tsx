"use client";
import {
	Navigation,
	Pagination,
	Scrollbar,
	A11y,
	Thumbs,
	Keyboard,
	Autoplay,
	EffectFade,
	Controller,
	EffectCoverflow,
} from "swiper";

import { AiFillStar } from "react-icons/ai";
import { GiStarFormation } from "react-icons/gi";

import { Star } from "../assets/images";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/bundle";
import "./swiperStyles.css";
import { useState, useRef } from "react";

// Import Swiper styles
const Carousel = ({ reviews }) => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const [thumbnail, setThumbsnail] = useState(null);

	return (
		<section className="py-20">
			{/* Slider */}
			<Swiper
				// install Swiper modules
				modules={[
					Navigation,
					Pagination,
					Scrollbar,
					A11y,
					Autoplay,
					Thumbs,
					EffectFade,
				]}
				thumbs={{ swiper: thumbsSwiper }}
				spaceBetween={50}
				slidesPerView={1}
				navigation
				loop
				autoplay={true}
				// effect="fade"
				// pagination={{ clickable: true }}
				// scrollbar={{ draggable: true }}
				// onSwiper={(swiper) => console.log(swiper)}
				// onSlideChange={() => console.log("slide change")}
				className="flex"
			>
				<div className="flex items-center w-full m-auto">
					{reviews.map((review, index) => (
						<div key={index + "_slide"} className="flex justify-center">
							<SwiperSlide className="flex flex-col items-center py-12 px-12">
								<div className="flex text-2xl gap-4">
									{[...Array(review.rating)].map((star, i) => {
										return (
											// <Image src={Star} height={40} width={40} key={star} />
											<GiStarFormation
												key={"slide_" + i}
												className="text-primary-900"
											/>
										);
									})}
								</div>
								<h3 className="text-4xl font-bold text-primary-900 text-center mt-12">
									{review.reviewTitle}
								</h3>
								<p className="px-4 max-w-3xl text-center m-auto mt-12 hyphens-auto text-base-800">
									{review.review}
								</p>
								<div className="flex flex-col items-center mt-8 text-base-800">
									<h3 className="font-bold text-primary-800">{review.name}</h3>
									<p>
										<span>{review.designation}</span> at
										<span>{review.company}</span>
									</p>
								</div>
							</SwiperSlide>
						</div>
					))}
				</div>
			</Swiper>
			<Swiper
				className="p-4 w-96 m-auto flex mySwiper"
				modules={[Thumbs]}
				watchSlidesProgress
				onSwiper={setThumbsSwiper}
				spaceBetween={5}
				// centeredSlides={true}
				slidesPerView={reviews.length}
			>
				{/* Thumbnails */}
				{reviews.map((review, index) => (
					<SwiperSlide
						key={index + "_thumb"}
						className="rounded-full overflow-hidden flex items-start gap-8 "
					>
						<Image
							src={review.image}
							alt="image"
							width={200}
							height={200}
							className="rounded-full"
						/>
					</SwiperSlide>
				))}
			</Swiper>
			<div className="w-10"></div>
		</section>
	);
};

export default Carousel;
