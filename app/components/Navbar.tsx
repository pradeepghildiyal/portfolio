"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Scrollspy from "react-scrollspy";
import { Rocket } from "../assets/images";
import ThemeSwitcher from "./ThemeSwitcher";

const people = [
	"Durward Reynolds",
	"Kenton Towne",
	"Therese Wunsch",
	"Benedict Kessler",
	"Katelyn Rohan",
];

const Navbar = () => {
	const [theme, setTheme] = useState("rainforest");

	useEffect(() => {
		localStorage.setItem("theme", theme);
		localStorage.getItem("theme");
		console.log(theme);
	}, [theme]);

	return (
		<header className="flex container m-auto flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-primary-900 border-b border-primary-300/[.5] text-sm py-3 sm:py-0">
			<nav
				className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
				aria-label="Global"
			>
				<div className="flex items-center justify-between py-2">
					<a
						className="flex gap-4 text-xl font-semibold text-base-50"
						href="#"
						aria-label="Brand"
					>
						<Image alt="Logo" src={Rocket} height="50" width="50" />
						<h3 className="text-4xl">PG</h3>
					</a>
					<div className="sm:hidden">
						<button
							type="button"
							className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border border-base-50/[.5] font-medium text-base-50/[.5] shadow-sm align-middle hover:bg-base-50/[.1] hover:text-base-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-base-50 focus:ring-primary-600 transition-all text-sm"
							data-hs-collapse="#navbar-collapse-with-animation"
							aria-controls="navbar-collapse-with-animation"
							aria-label="Toggle navigation"
						>
							<svg
								className="hs-collapse-open:hidden w-4 h-4"
								width="16"
								height="16"
								fill="currentColor"
								viewBox="0 0 16 16"
							>
								<path
									fill-rule="evenodd"
									d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
								/>
							</svg>
							<svg
								className="hs-collapse-open:block hidden w-4 h-4"
								width="16"
								height="16"
								fill="currentColor"
								viewBox="0 0 16 16"
							>
								<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
							</svg>
						</button>
					</div>
				</div>
				<div
					id="navbar-collapse-with-animation"
					className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
				>
					<div className="flex flex-col gap-y-4 text-base-100 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7">
						<Scrollspy
							items={["hero", "services", "experience", "products", "contact"]}
							offset={-50}
							currentClassName="underline underline-offset-8 text-primary-300"
							className="flex gap-4 "
						>
							<li className="hover:text-primary-100">
								<a href="#hero">Home</a>
							</li>
							<li className="hover:text-primary-100">
								<a href="#services">Services</a>
							</li>
							<li className="hover:text-primary-100">
								<a href="#experience">Experience</a>
							</li>
							<li className="hover:text-primary-100">
								<a href="#products">Products</a>
							</li>
							<li className="hover:text-primary-100">
								<a href="#contact">Contact</a>
							</li>
						</Scrollspy>
						<ThemeSwitcher />
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
