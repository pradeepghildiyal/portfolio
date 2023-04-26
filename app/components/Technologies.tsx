"use client";
import React from "react";
import { Tab } from "@headlessui/react";
import { tabLineDecoration } from "../assets/images/icons";
import Image from "next/image";

const Technologies = () => {
	return (
		<section className="container mx-auto py-60 px-6 " id="experience">
			<Tab.Group vertical defaultIndex={0}>
				<div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
					<div className="col-span-4 order-2 lg:order-1">
						<Tab.Panels className="h-full ">
							<div className="h-full">
								<Tab.Panel className="p-20  bg-primary-900 rounded-md h-full text-primary-100 flex  flex-col items-stretch ">
									<h3 className="font-bold text-4xl text-primary-50">
										Working {/* Highlight */}
										<span className="before:block before:absolute before:top-2/3 before:right-0 before:bottom-0 before:left-0 before:h-1/3 before:bg-orange-500 before:opacity-100 relative inline-block">
											<span className="relative">Experience</span>
										</span>{" "}
									</h3>
									<p className="font-medium text-xs text-primary-400 mt-6">
										Tincidunt purus lacus nascetur nunc commodo. Netus at
										dignissim urna quam. Imperdiet proin sapien posuere egestas.
										Tristique nam magna velit odio ullamcorper eget donec.
									</p>
									<Image
										src={tabLineDecoration}
										alt="decoration"
										width={"100%"}
										height={"auto"}
										className="mt-8"
									/>
								</Tab.Panel>
								<Tab.Panel className="p-20 bg-primary-900 rounded-md h-full text-primary-100 flex  flex-col items-stretch">
									<h3 className="font-bold text-4xl text-primary-50">
										Working {/* Highlight */}
										<span className="before:block before:absolute before:top-2/3 before:right-0 before:bottom-0 before:left-0 before:h-1/3 before:bg-orange-500 before:opacity-100 relative inline-block">
											<span className="relative">Experience</span>
										</span>{" "}
									</h3>
									<p className="font-medium text-xs text-primary-400 mt-6">
										Tincidunt purus lacus nascetur nunc commodo. Netus at
										dignissim urna quam. Imperdiet proin sapien posuere egestas.
										Tristique nam magna velit odio ullamcorper eget donec.
									</p>
									<Image
										src={tabLineDecoration}
										alt="decoration"
										width={"100%"}
										height={"auto"}
										className="mt-8"
									/>
								</Tab.Panel>
								<Tab.Panel className="p-20 bg-primary-900 rounded-md h-full text-primary-100 flex  flex-col items-stretch">
									<h3 className="font-bold text-4xl text-primary-50">
										Working {/* Highlight */}
										<span className="before:block before:absolute before:top-2/3 before:right-0 before:bottom-0 before:left-0 before:h-1/3 before:bg-orange-500 before:opacity-100 relative inline-block">
											<span className="relative">Experience</span>
										</span>{" "}
									</h3>
									<p className="font-medium text-xs text-primary-400 mt-6">
										Tincidunt purus lacus nascetur nunc commodo. Netus at
										dignissim urna quam. Imperdiet proin sapien posuere egestas.
										Tristique nam magna velit odio ullamcorper eget donec.
									</p>
									<Image
										src={tabLineDecoration}
										alt="decoration"
										width={"100%"}
										height={"auto"}
										className="mt-8"
									/>
								</Tab.Panel>
							</div>
						</Tab.Panels>
					</div>
					<div className="col-span-4 lg:col-span-2 order-1">
						<Tab.List>
							<div className="flex flex-col gap-4">
								<Tab className="focus:outline-none w-full">
									{({ selected }) => (
										/* Use the `selected` state to conditionally style the selected tab. */
										<div
											className={`${
												selected
													? " border-primary-300 bg-primary-500 text-primary-50 border-[1px]"
													: "bg-primary-50 border-primary-300   border-[1px] "
											} outline-none py-4 rounded-md font-bold uppercase hover:translate-x-2 hover:translate-y-2 transition hover:shadow-xl duration-300 focus:outline-none outline-0`}
										>
											Tab 1
										</div>
									)}
								</Tab>
								<Tab className="focus:outline-none">
									{({ selected }) => (
										/* Use the `selected` state to conditionally style the selected tab. */
										<div
											className={`${
												selected
													? " border-primary-300 bg-primary-500 text-primary-50 border-[1px]"
													: "bg-primary-50 border-primary-300   border-[1px] "
											} outline-none py-4 rounded-md font-bold uppercase hover:translate-x-2 hover:translate-y-2 transition hover:shadow-xl duration-300 focus:outline-none outline-0`}
										>
											Tab 2
										</div>
									)}
								</Tab>
								<Tab className="focus:outline-none">
									{({ selected }) => (
										/* Use the `selected` state to conditionally style the selected tab. */
										<div
											className={`${
												selected
													? " border-primary-300 bg-primary-500 text-primary-50 border-[1px]"
													: "bg-primary-50 border-primary-300   border-[1px] "
											} outline-none py-4 rounded-md font-bold uppercase hover:translate-x-2 hover:translate-y-2 transition hover:shadow-xl duration-300 focus:outline-none outline-0`}
										>
											Tab 3
										</div>
									)}
								</Tab>
							</div>
						</Tab.List>
					</div>
				</div>
			</Tab.Group>
		</section>
	);
};

export default Technologies;
