import ProjectCard from "./projectCard";
import { motion } from "framer-motion";

const projects = [
	{
		title: "QConnect",
		type: "Dalhousie University",
		content: "Quality aware developer productivity dashboard.",
		// repo: "https://github.com/covindia/CovIndia-Website",
		bg: "QScored",
	},
	{
		title: "Serverless B&B",
		type: "Dalhousie University",
		content:
			"Fully serverless multi-cloud B&B application with usage analytics and a tour recommendation system.",
		// repo: "https://github.com/covindia/CovIndia-Website",
		bg: "serverless",
	},
	{
		title: "Custom D-DBMS",
		type: "Dalhousie University",
		content:
			"Custom-built distributed DBMS that runs SQL-like queries. Includes transactions, load balancing and fragmentation",
		// repo: "https://github.com/covindia/CovIndia-Website",
		bg: "dbms",
	},
	{
		title: "OptionForecast",
		type: "Mahindra University",
		content:
			"Using Kalman Filters and SVMs to predict long term option prices.",
		// repo: "https://github.com/covindia/CovIndia-Website",
		bg: "erasto",
	},
	{
		title: "Covindia",
		type: "Mahindra University",
		content:
			"Real time district wise tracker for the Corona virus spread in India.",
		repo: "https://github.com/covindia/CovIndia-Website",
		bg: "covindia",
	},
	{
		title: "Erastothenes",
		type: "Personal",
		content:
			"Discord bot that tracks community trader performance over time, and analyzes community market sentiment.",
		repo: "https://github.com/covindia/erastothenes",

		bg: "erasto",
	},
	{
		title: "Euclid",
		type: "Personal",
		content: "Multi purpose Reddit data mining bot",
		repo: "https://github.com/covindia/euclid",
		bg: "reddit",
	},
	{
		title: "Poketwo",
		type: "Personal",
		content:
			"Real time multiplayer cross-browser pokemon battle simulator, built using websockets.",
		repo: "https://github.com/covindia/CovIndia-Website",

		bg: "poketwo",
	},
];

const Work = () => {
	return (
		<motion.div
			className="h-full"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.75 }}
		>
			<div className="grid relative h-full grid-cols-2 lg:grid-cols-3 py-48 px-4 lg:px-16 gap-4">
				{projects.map((project, index) => {
					return (
						<ProjectCard
							{...project}
							key={project.title}
							delay={(index + 1) * 200}
						/>
					);
				})}
			</div>
		</motion.div>
	);
};

export default Work;
