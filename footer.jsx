import FooterLinks from "/src/components/footer/footerlinks";
import quickLinksData from "/src/Data/footerLinks/quickLinks.js";
import statutoryLinksData from "/src/Data/footerLinks/statutoryDataLinks";
import locationIcon from "/src/assets/icons/Location dot Classic Solid Icon _ Font Awesome-6.webp";
import phoneIcon from "/src/assets/icons/cellphone.webp";
import emailIcon from "/src/assets/icons/envelope-white.webp";
import mapIcon from "/src/assets/icons/map.webp";
import igIcon from "/src/assets/icons/instagram.webp";
import fbIcon from "/src/assets/icons/facebook.webp";
import ytIcon from "/src/assets/icons/youtube.webp";
import twitIcon from "/src/assets/icons/twitter.webp";

const quickLinks = quickLinksData.map((arg) => {
	return <FooterLinks key={arg.linkId} item={arg} />;
});

const statutoryLinks = statutoryLinksData.map((arg) => {
	return <FooterLinks key={arg.linkId} item={arg} />;
});

export default function footerWrapper() {
	return (
		<footer className="footer-wrapper bg-primaryColor mt-5 pt-5 pb-5 sm:flex sm:flex-wrap sm:justify-start lg:justify-center xl:justify-center">
			<div className="quick-links">
				<div className="quick-links-heading text-footerHeading text-lg  font-extrabold mb-3 pl-3">
					Quick Links
				</div>
				<div className="quick-links-content flex flex-col justify-center pl-6">
					{quickLinks}
				</div>
			</div>
			<div className="statutory-data">
				<div className="statutory-data-heading text-footerHeading text-lg font-extrabold mb-3 pl-3">
					Statutory Data and Committees
				</div>
				<div className="statutory-data-content flex flex-col justify-center pl-6">
					{statutoryLinks}
				</div>
			</div>
			<div className="get-in-touch">
				<div className="get-in-touch-heading text-footerHeading text-lg font-extrabold mb-3 pl-3">
					Get in touch with us
				</div>
				<div className="get-in-touch-content text-white flex flex-col justify-center pl-6">
					<div className="address mb-3 flex items-start">
						<img className="h-5 mr-2 mt-0.5" src={locationIcon} />
						Bapatla Engineering College, <br /> Bapatla-522102, Guntur(Dt).
					</div>
					<div className="phone-num mb-3 flex items-start">
						<img className="h-5 mr-2 mt-0.5" src={phoneIcon} />
						+91-8643-224244
					</div>
					<div className="email mb-3 flex items-start">
						<img className="h-5 mr-2 mt-0.5" src={emailIcon} />
						<a
							className="underline underline-offset-4 hover:text-white"
							href="mailto:bec.principal@becbapatla.ac.in"
						>
							Email us
						</a>
					</div>
					<div className="location-map text-footerHeading text-lg font-extrabold mb-3 flex items-start">
						<img className="h-7 mr-2 mt-0.5" src={mapIcon} />
						Find us at
					</div>
					<div className="location mb-3">
						<a>
							<iframe
								className="w-60 xs:w-72 sm:w-80"
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.3590539151496!2d80.43984695033782!3d15.89024948893766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a408f042c3c75%3A0x3aa398870aa48578!2sBapatla%20Engineering%20College!5e0!3m2!1sen!2sin!4v1664966910989!5m2!1sen!2sin"
								width="300"
								height="200"
								style={{ border: "0", borderRadius: "10px" }}
								allowFullScreen=""
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							></iframe>
						</a>
					</div>
					<div className="socials text-footerHeading text-lg font-extrabold">
						Follow us
					</div>
					<div>
						<div className=" flex">
							<a href="https://www.instagram.com/becbapatlaofficial/">
								<img className="h-7 mr-4 mt-0.5" src={igIcon} />
							</a>
							<a href="https://www.facebook.com/becbapatlaofficial/">
								<img className="h-7 mr-4 mt-0.5" src={fbIcon} />
							</a>
							<a href="https://www.youtube.com/@bapatlaengineeringcollege8024">
								<img className="h-7 mr-4 mt-0.5" src={ytIcon} />
							</a>
							<a href="https://twitter.com/BapatlaC?t=XsVZK02bBqBrKVOMxo73mA&s=08">
								<img className="h-7 mr-4 mt-0.5" src={twitIcon} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
