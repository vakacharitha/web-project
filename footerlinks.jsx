import { Link } from "react-router-dom";
import arrow from "/src/assets/icons/angleRightSolidWhite.webp";

let footerlinks = (props) => {
	const { item } = props;
	return (
		<div className="footer-link flex items-start mb-3 hover:scale-105 hover:transition hover:duration-500">
			<img className="h-5" src={arrow}></img>
			<Link
				className="text-white text-base break-words hover:underline-offset-4 "
				to={item.link}
			>
				{item.linkName}
			</Link>
		</div>
	);
};

export default footerlinks;
