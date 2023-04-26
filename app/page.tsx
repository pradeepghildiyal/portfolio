import Image from "next/image";
import { Montserrat } from "next/font/google";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Services from "./components/Services";
import Technologies from "./components/Technologies";
import FeaturedProducts from "./components/FeaturedProducts";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import NewNav from "./components/NewNav";

const font = Montserrat({ subsets: ["latin"] });

export default function Home() {
	return (
		<main className="font.className h-screen bg-primary-50">
			<div className="bg-primary-50">
				{/* <Navbar /> */}
				<NewNav />
				<Hero />
				<Clients />
				<Services />
				<Technologies />
				<FeaturedProducts />
				<Testimonials />
				<ContactUs />
				<Footer />
			</div>
		</main>
	);
}
