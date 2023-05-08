"use client";
import Image from "next/image";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const MyModal = ({ product }) => {
	let [isOpen, setIsOpen] = useState(false);

	function handleClick() {
		setIsOpen((prevState) => {
			return !prevState;
		});
	}

	function showModal() {
		document.getElementById(product.id).showModal();
	}
	function performClose() {
		document.getElementById(product.id).close();
	}

	return (
		<>
			<button
				type="button"
				onClick={showModal}
				className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-normal uppercase text-primary-100 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-100 focus-visible:ring-opacity-75"
			>
				More Information
				<span className="text-xl ml-4 ">&#10230;</span>
			</button>
			<dialog
				id={product.id}
				className="fixed backdrop:bg-gray-900 backdrop:opacity-50 p-0 rounded-md"
				data-modal
			>
				<div
					className="relative
				"
				>
					<div className="relative  max-w-6xl">
						<div className="bg-primary-900 p-4 items-center  w-full ">
							<Image
								src={product.secondaryImage}
								alt="Decoration"
								width={800}
								height={600}
								className="drop-shadow-2xl items-center m-auto"
							/>
						</div>
						<div className="p-8 col-span-4">
							<h3 className="text-2xl text-primary-800">{product.name}</h3>
							<div className="mt-4 flex flex-wrap gap-4">
								{product.tags.map((tag) => {
									return (
										<span className="bg-primary-800 text-primary-50 bg-opacity-80 font-light px-4 py-2 rounded-md">
											{tag}
										</span>
									);
								})}
							</div>
							<div className="mt-2 flex flex-wrap gap-4">
								{product.technologies.map((tech) => {
									return (
										<span className="bg-primary-800 text-primary-50 bg-opacity-80 font-light px-4 py-2 rounded-md">
											{tech}
										</span>
									);
								})}
							</div>
							<p className="text-gray-800 mt-6 font-normal">
								Company:{" "}
								<span className="text-primary-500 font-bold">
									{product.company}
								</span>
							</p>
							<div className="mt-4 font-normal text-base-500">
								{product.caseStudy}
							</div>
							<div className="mt-4 text-primary-800">{product.description}</div>
						</div>
						<form method="dialog" className="fixed top-10 right-10">
							<button
								type="button"
								className="inline-flex justify-center rounded-md border border-transparent bg-primary-100 p-2 text-sm font-medium text-primary-900 hover:bg-primary-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
								onClick={performClose}
							>
								Close <AiOutlineCloseCircle className="text-lg ml-2 h-full" />
							</button>
						</form>
					</div>
				</div>
			</dialog>
		</>
	);
};

export default MyModal;
