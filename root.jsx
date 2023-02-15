import Header from "/src/components/header/header.jsx";
import Footer from "/src/components/footer/footer.jsx";

import { Outlet, Link } from "react-router-dom";

export default function Root() {
	return (
		<>
			<Header />
			<button>
				<Link className=" m-2 p-2 border-2 border-black" to={"/departments"}>
					Placements
				</Link>
			</button>
			<button>
				<Link
					className=" m-2 p-2 border-2 border-black"
					to={"/examination-cell"}
				>
					Exams and results
				</Link>
			</button>
			<button>
				<Link
					className=" m-2 p-2 border-2 border-black"
					to={"/exam-notifications"}
				>
					Exam notifications
				</Link>
			</button>
			<button>
				<Link
					className=" m-2 p-2 border-2 border-black"
					to={"/naac"}
				>
					NAAC
				</Link>
			</button>
			<Outlet />
			<Footer />
		</>
	);
}
