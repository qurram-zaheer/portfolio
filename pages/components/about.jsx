import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
	return (
		<motion.div
			className="h-full"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.75 }}
		>
			<div className="flex flex-col items-center justify-center relative h-full items-center">
				<div className="flex flex-col px-16 max-w-2xl">
					<div
						className={`text-4xl font-hairline pb-3 max-w-lg border-b-2 border-blue-200 border-double`}
					>
						About Me
					</div>
					<div className="pt-6 leading-relaxed font-hairline text-gray-600 text-sm md:text-base">
						I am a graduate computer science student at Dalhousie University. I
						have been obsessed with computers since my dad got us our first
						Pentium 5 family computer. I love learning new things and
						challenging myself regularly. I pride myself in my ability to grasp
						new concepts quickly and approaching problems in new and interesting
						ways.
					</div>
					<div className="pt-3 leading-relaxed font-hairline text-gray-600 text-sm md:text-base">
						Abstract concepts interest me deeply. I am very intrigued by how
						people work, how conciousness works, and how these concepts might be
						implemented in computers. My hobbies include soccer, swimming, and
						playing video games. I also enjoy speaking in public.
					</div>
					<div className="flex p-1 w-full mt-4">
						<div className="mr-1">
							<Image
								height={32}
								width={32}
								src="/images/python.png"
								alt="python"
							/>
						</div>
						<div className="mr-1">
							<Image height={32} width={32} src="/images/java.png" alt="java" />
						</div>
						<div className="mr-1">
							<Image height={32} width={32} src="/images/ts.png" alt="ts" />
						</div>
						<div className="mr-1">
							<Image height={32} width={32} src="/images/rust.png" alt="rust" />
						</div>
						<div className="mr-1">
							<Image height={32} width={32} src="/images/go.png" alt="go" />
						</div>
					</div>
					<div className="flex mt-1 p-1 w-full">
						<div className="mr-1">
							<Image
								height={32}
								width={32}
								src="/images/airflow.png"
								alt="airflow"
							/>
						</div>
						<div className="mr-1">
							<Image
								height={32}
								width={32}
								src="/images/docker.png"
								alt="docker"
							/>
						</div>
						<div className="mr-1">
							<Image
								height={32}
								width={64}
								src="/images/spark.png"
								alt="spark"
							/>
						</div>
						<div className="mr-1">
							<Image
								height={32}
								width={32}
								src="/images/pytorch.png"
								alt="pytorch"
							/>
						</div>
						<div className="mr-1">
							<Image height={32} width={32} src="/images/tf.png" alt="tf" />
						</div>
						<div className="mr-1">
							<Image
								height={32}
								width={64}
								src="/images/django.png"
								alt="django"
							/>
						</div>
						<div className="mr-1">
							<Image
								height={32}
								width={32}
								src="/images/react.png"
								alt="react"
							/>
						</div>
						{/* </div> */}
						{/* <div className="flex mt-1 p-1 w-full"> */}
						<div className="mr-1">
							<Image
								height={32}
								width={32}
								src="/images/mongo.png"
								alt="mongo"
							/>
						</div>
						<div className="mr-1">
							<Image height={32} width={32} src="/images/pg.png" alt="pg" />
						</div>
						{/* </div> */}
						{/* <div className="flex mt-1 p-1 w-full"> */}
						<div className="mr-1">
							<Image height={32} width={32} src="/images/aws.png" alt="aws" />
						</div>
						<div className="mr-1">
							<Image height={32} width={32} src="/images/GCP.png" alt="GCP" />
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default About;
