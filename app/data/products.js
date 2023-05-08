import {
	JobIt,
	carRent,
	laptopCarRent,
	laptopJobIt,
} from "../assets/images/products";

const products = [
	{
		id: "JobIt01",
		name: "JobIt - Job Website",
		tags: ["Business", "UI", "UX", "Branding", "API"],
		technologies: ["TailwindCss", "NextJs", "React", "ReactRouter"],
		primaryImage: laptopJobIt,
		secondaryImage: JobIt,
		company: "JobIT",
		caseStudy: `Job Website Case StudyThe job website you have created is an excellent example of your skills in using HTML, CSS, Javascript, Next.js, React, and Tailwind. Your app enables job seekers to find employment opportunities from multiple sources. This not only saves them time and effort but also helps them find jobs that match their skill set.

			Additionally, employers benefit from having their job listings easily accessible to a wider pool of qualified candidates. To create your job website, you started by designing the user interface using HTML and CSS. You ensured that the design was both aesthetically pleasing and easy to use. Then, you used React to build the frontend of the website. This allowed you to create a dynamic and interactive user experience. Next, you used Next.js to build the server-side rendering of the website. This ensured that the website was fast and efficient, even when handling large amounts of data.

			Finally, you used Tailwind to style the website and make it responsive, ensuring that it looked great on any device. Overall, your job website is a great example of your skills in using a variety of technologies to build a functional and user-friendly app.`,
		description:
			"The JobIT website is a great example of your skills in using a variety of technologies to build a functional and user-friendly app.",
	},
	{
		id: "MoRent01",
		name: "MoRent - Car Rental Website Website",
		tags: ["Business", "UI", "UX", "Branding", "API"],
		technologies: ["TailwindCss", "NextJs", "React"],
		primaryImage: laptopCarRent,
		secondaryImage: carRent,
		company: "JobIT",
		caseStudy: `Job Website Case StudyThe job website you have created is an excellent example of your skills in using HTML, CSS, Javascript, Next.js, React, and Tailwind. Your app enables job seekers to find employment opportunities from multiple sources. This not only saves them time and effort but also helps them find jobs that match their skill set.

			Additionally, employers benefit from having their job listings easily accessible to a wider pool of qualified candidates. To create your job website, you started by designing the user interface using HTML and CSS. You ensured that the design was both aesthetically pleasing and easy to use. Then, you used React to build the frontend of the website. This allowed you to create a dynamic and interactive user experience. Next, you used Next.js to build the server-side rendering of the website. This ensured that the website was fast and efficient, even when handling large amounts of data.

			Finally, you used Tailwind to style the website and make it responsive, ensuring that it looked great on any device. Overall, your job website is a great example of your skills in using a variety of technologies to build a functional and user-friendly app.`,
		description:
			"The JobIT website is a great example of your skills in using a variety of technologies to build a functional and user-friendly app.",
	},
];

export default products;
