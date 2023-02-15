import { useRef, useState, useEffect } from "react";
import downArrow from "/src/assets/angle-down-solid.svg";
import React from "react";
import IT from "/src/pages/departments/IT.jsx";
let navbar = () => {
	// const [showLeftButton, setShowLeftButton] = useState(false);
	// const [dropdown1, setDropDown1] = React.useState("");

	// function clickHandler() {
	// 	setDropDown1("flex");
	// }

	// const containerRef = useRef(null);
	// const [showButton, setShowButton] = useState(false);

	// useEffect(() => {
	// 	if (containerRef.current.offsetWidth < containerRef.current.scrollWidth) {
	// 		setShowButton(true);
	// 	}
	// }, []);

	// useEffect(() => {
	// 	function handleResize() {
	// 		if (containerRef.current.offsetWidth < containerRef.current.scrollWidth) {
	// 			setShowButton(true);
	// 		} else {
	// 			setShowButton(false);
	// 		}
	// 	}

	// 	window.addEventListener("resize", handleResize);
	// 	return () => window.removeEventListener("resize", handleResize);
	// }, []);

	// useEffect(() => {
	// 	if (containerRef.current) {
	// 		if (containerRef.current.scrollLeft > 0) {
	// 			setShowLeftButton(true);
	// 		} else {
	// 			setShowLeftButton(false);
	// 		}
	// 	}
	// }, [containerRef.current]);

	// function handleClick() {
	// 	containerRef.current.scrollLeft += 5000;
	// }
	// function handleLeftClick() {
	// 	containerRef.current.scrollLeft += 50;
	// }

	return (
		<>
			{/* {showLeftButton && <button onClick={handleLeftClick}>See More</button>}
			<div ref={containerRef} className="flex detect overflow-x-auto">
				<div
					data-id="1"
					onClick={clickHandler}
					className={
						"navbar-item w-max m-2 p-1 flex items-center cursor-pointer hover:bg-slate-600 bg-white"
					}
				>
					h
					<img
						data-id="1"
						className="h-5 ml-3"
						alt="drop down arrow"
						src={downArrow}
					></img>
					<div data-drop="1" className={"dropdownList hidden" + dropdown1}>
						<div>item -1 </div>
						<div>item -2 </div>
						<div>item -3 </div>
						<div>item -4 </div>
						<div>item -5 </div>
					</div>
				</div>
			</div>
			{showButton && (
				<button onClick={handleClick} className="right">
					Right
				</button>
			)} */}
		</>
	);
};

export default navbar;
