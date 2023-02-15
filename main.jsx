import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "/src/routes/root.jsx";
import Homepage from "/src/pages/homepage.jsx";
import ExaminationCell from "/src/pages/examsResults/examination.jsx";
import ExamNotifs from "/src/pages/examsResults/examsNotifs.jsx";
import It from "/src/pages/departments/IT.jsx";
import Naac from "/src/pages/saturaotryData/aicte.jsx"
import NaacHome from "/src/pages/saturaotryData/naacHomepage.jsx"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		// errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <Homepage /> },
			{
				path: "/departments",
				element: <It />,
			},
			{
				path: "/examination-cell",
				element: <ExaminationCell />,
			},
			{
				path: "/exam-notifications",
				element: <ExamNotifs />,
			},
			{
				path: "/naac",
				element: <NaacHome />,
			},
			{
				path: "/naacInfo",
				element: <Naac />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<>
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	</>
);
