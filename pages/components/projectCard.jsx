import Image from "next/image";
import React from "react";

const ProjectCard = ({ title, content, repo, bg, type, delay }) => {
	return (
		<div className="flex flex-col rounded-md hover:shadow-2xl transition duration-500 ease-in-out border p-6 relative">
			<div>
				<div className="flex w-100 justify-between">
					<div className="flex flex-col">
						<div
							className="text-xl font-bold"
							onClick={() => console.log("hi")}
						>
							{title}
						</div>
						<div className="text-xs">{type.toUpperCase()}</div>
					</div>
					<div className="m-1">
						<Image
							src={`/images/${bg}.PNG`}
							height={40}
							width={40}
							quality={100}
							alt="poketwo"
						/>
					</div>
				</div>

				<div className="text-xs md:text-sm py-4">{content}</div>
				{repo ? (
					<div className="absolute bottom-0 right-0 flex p-4">
						<a href={repo}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								x="0px"
								y="0px"
								width="30"
								height="30"
								viewBox="0 0 172 172"
								className="hover:text-blue-500 transition duration-500 ease-in-out"
							>
								<g
									fill="none"
									fillRule="nonzero"
									stroke="none"
									strokeWidth="1"
									strokeLinecap="butt"
									strokeLinejoin="miter"
									strokeMiterlimit="10"
									strokeDasharray=""
									strokeDashoffset="0"
									fontFamily="none"
									fontWeight="none"
									fontSize="none"
									textAnchor="none"
									style={{ mixBlendMode: "normal" }}
								>
									<path d="M0,172v-172h172v172z" fill="none" />
									<g className="fill-current">
										<path d="M86,17.2c-37.9948,0 -68.8,30.8052 -68.8,68.8c0,32.23853 22.19947,59.21387 52.12747,66.67867c-0.32107,-0.9288 -0.52747,-2.00667 -0.52747,-3.34253v-11.75907c-2.79213,0 -7.47053,0 -8.64587,0c-4.70707,0 -8.8924,-2.02387 -10.922,-5.78493c-2.2532,-4.1796 -2.64307,-10.57227 -8.22733,-14.4824c-1.65693,-1.30147 -0.3956,-2.7864 1.5136,-2.58573c3.526,0.9976 6.45,3.41707 9.202,7.00613c2.74053,3.5948 4.03053,4.40893 9.1504,4.40893c2.48253,0 6.19773,-0.14333 9.69507,-0.69373c1.88053,-4.77587 5.13133,-9.17333 9.10453,-11.2488c-22.9104,-2.3564 -33.84387,-13.75427 -33.84387,-29.22853c0,-6.66213 2.838,-13.1064 7.65973,-18.53587c-1.5824,-5.38933 -3.57187,-16.38013 0.60773,-20.56547c10.30853,0 16.54067,6.68507 18.03707,8.49107c5.13707,-1.76013 10.77867,-2.75773 16.70693,-2.75773c5.93973,0 11.60427,0.9976 16.7528,2.7692c1.4792,-1.79453 7.71707,-8.50253 18.04853,-8.50253c4.1968,4.19107 2.1844,15.22773 0.5848,20.6056c4.79307,5.418 7.61387,11.84507 7.61387,18.49573c0,15.4628 -10.91627,26.85493 -33.79227,29.2228c6.2952,3.2852 10.8876,12.51587 10.8876,19.4704v15.67493c0,0.59627 -0.13187,1.02627 -0.20067,1.53653c26.80907,-9.39693 46.06733,-34.85293 46.06733,-64.87267c0,-37.9948 -30.8052,-68.8 -68.8,-68.8z" />
									</g>
								</g>
							</svg>
						</a>
					</div>
				) : null}
			</div>
		</div>
	);
};

export default ProjectCard;