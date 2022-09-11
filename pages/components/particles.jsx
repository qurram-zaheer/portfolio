import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import bgImg from "../../public/images/bg.jpg";

const ParticlesComponent = () => {
	const particlesInit = useCallback(async (engine) => {
		console.log(engine);
		// you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(async (container) => {
		await console.log(container);
	}, []);

	return (
		<div className="absolute z-20 h-screen" style={{ width: "50%" }}>
			<Particles
				id="tsparticles"
				init={particlesInit}
				loaded={particlesLoaded}
				options={{
					fpsLimit: 60,
					interactivity: {
						detectsOn: "canvas",
						events: {
							onClick: {
								enable: false,
								mode: "push",
							},
							onHover: {
								enable: false,
								mode: "repulse",
							},
							resize: true,
						},
						modes: {
							bubble: {
								distance: 400,
								duration: 2,
								opacity: 0.8,
								size: 30,
								speed: 3,
							},
							push: {
								quantity: 4,
							},
							repulse: {
								distance: 200,
								duration: 0.4,
							},
						},
					},
					particles: {
						color: {
							value: "#ffffff",
						},
						collisions: {
							enable: true,
						},
						move: {
							direction: "none",
							enable: true,
							outMode: "bounce",
							random: false,
							speed: 1,
							straight: false,
						},
						number: {
							density: {
								enable: true,
								value_area: 800,
							},
							value: 30,
						},
						opacity: {
							value: 0.2,
						},
						shape: {
							type: "circle",
						},
						size: {
							random: true,
							value: 4,
						},
					},
					detectRetina: true,
				}}
			/>
		</div>
	);
};

export default ParticlesComponent;
