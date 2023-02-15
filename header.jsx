import collegeLogo from "/src/assets/logo.png";
import no1 from "/src/assets/no1.png";
import Navbar from "/src/components/navbar/navbar";

let Header = () => {
	return (
		<>
			<header className="general-header flex justify-center items-center md:justify-between xl:justify-between">
				<img
					className="college-logo hidden md:block h-24 m-2 xl:h-36"
					src={collegeLogo}
				></img>
				<div className="college-desc flex flex-col justify-center items-center m-3 md:-mt-2 w-max">
					<div className="college-title text-primary font-bold text-sm md:text-lg xl:text-3xl">
						BAPATLA ENGINEERING COLLEGE
					</div>
					<div className="text-xs xl:text-lg">(AUTONOMOUS)</div>
					<div className="text-xs xl:text-xl">
						Affiliated to Acharaya Nagarjuna University, Guntur
					</div>
					<div className="college-extra-info text-xs w-full flex justify-between">
						<div className="estd-date xl:text-base font-medium ml-1">
							ESTD.1981
						</div>
						<div className="code xl:text-base font-medium mr-1">
							EAMCET CODE: BECB
						</div>
					</div>
				</div>
				<img
					className="college-logo hidden md:block md:h-20 md:-mt-4 md:mr-4 xl:h-32 xl:mr-4 xl:mt-2"
					src={no1}
				></img>
			</header>
			<nav className="bg-primaryColor w-full h-10 -mt-2 flex items-center">
				<Navbar />
			</nav>
		</>
	);
};

export default Header;
