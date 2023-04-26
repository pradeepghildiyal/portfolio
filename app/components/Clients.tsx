import React from "react";
import clientImages from "../assets/images/clients";
import Image from "next/image";

const Clients = () => {
	return (
		<section className="bg-white justify-center ">
			<div className="py-32 flex justify-between flex-wrap w-full gap-8 container mx-auto px-6">
				<Image
					alt={clientImages.logo}
					src={clientImages.logo}
					width={150}
					height={150}
					container
					// className="grow"
				/>
				<Image
					alt={clientImages.logo1}
					src={clientImages.logo1}
					width={150}
					height={150}
					container
					// className="grow"
				/>
				<Image
					alt={clientImages.logo2}
					src={clientImages.logo2}
					width={150}
					height={150}
					container
					// className="grow"
				/>
				<Image
					alt={clientImages.logo3}
					src={clientImages.logo3}
					width={150}
					height={150}
					container
					// className="grow"
				/>
				<Image
					alt={clientImages.logo4}
					src={clientImages.logo4}
					width={150}
					height={150}
					container
					// className="grow"
				/>
			</div>
		</section>
	);
};

export default Clients;
