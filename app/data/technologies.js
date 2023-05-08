import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { MdSlowMotionVideo } from "react-icons/md";
import { BsLaptop } from "react-icons/bs";
import { TbPointer } from "react-icons/tb";

const technologies = [
	{
		id: 1,
		icon: <HiOutlineMagnifyingGlass />,
		title: "HTML, CSS, JavaScript",
		subtitle:
			"As a developer with expertise in HTML, CSS, and JavaScript, I can create stunning and responsive web applications that are both visually appealing and user-friendly. With my ability to design user interfaces, create web animations, and build responsive websites, I can create a website that is tailored to your unique needs.",
	},
	{
		id: 2,
		icon: <MdSlowMotionVideo />,
		title: "Next.js",
		subtitle:
			"With my knowledge of Next.js, a popular React-based web framework, I can create fast and efficient web applications that deliver a great user experience. With Next.js, I can take advantage of server-side rendering and other performance optimizations to ensure that your website loads quickly and is easy to use.",
	},
	{
		id: 3,
		icon: <BsLaptop />,
		title: "React",
		subtitle:
			"As a developer with expertise in React, a popular JavaScript library, I can create dynamic and interactive web applications that keep your users engaged. With my ability to design user interfaces, create web animations, and build responsive websites, I can help you create a website that is both visually stunning and easy to use.",
	},
	{
		id: 4,
		icon: <TbPointer />,
		title: "Tailwind",
		subtitle:
			"With my knowledge of Tailwind, a popular CSS framework, I can create beautiful and responsive web applications that are both easy to maintain and visually appealing. With Tailwind, I can use pre-built classes to quickly and easily style your website, saving time and ensuring consistency across your entire site.",
	},
];

export default technologies;
