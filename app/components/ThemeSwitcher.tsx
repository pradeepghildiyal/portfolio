import { Fragment, useState, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { AiOutlineFormatPainter } from "react-icons/ai";

let themes = Object.keys(require("/themes.json"));

function ThemeSwitcher() {
	const [theme, setTheme] = useState(themes[0]);
	const [formData, setFormData] = useState({
		theme: "",
	});
	function handleChange(event) {
		event.preventDefault();
		console.log(theme);
		localStorage.setItem("theme", JSON.stringify(theme));
		const root = document.getElementsByTagName("html")[0];
		root.dataset.theme = event.target.value;
		const { name, value } = event.target;
		setFormData((prevFormData) => {
			setTheme(value);
			return {
				...prevFormData,
				[name]: value,
			};
		});
	}

	return (
		<div>
			<form className="flex bg-primary-800 rounded-md justify-center px-2 ">
				<label
					for="theme"
					className="flex text-white justify-center items-center"
				>
					<AiOutlineFormatPainter
						height={"100%"}
						className="items-center m-auto"
					/>
				</label>
				<select
					id="theme"
					value={formData.theme}
					onChange={handleChange}
					name="theme"
					className="text-primary-100 w-full py-1 px-4 bg-primary-800 rounded-md capitalize outline-none border-none form-select"
				>
					{themes.map((item) => {
						return (
							<option
								value={item}
								className="py-2 rounded-md capitalize bg-primary-500 mt-2 hover:bg-primary-600 outline-none"
							>
								{item}
							</option>
						);
					})}
				</select>
			</form>
		</div>
	);
}

export default ThemeSwitcher;
