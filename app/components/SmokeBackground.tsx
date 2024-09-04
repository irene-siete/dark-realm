import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const SmokeBackground: React.FC = () => {
	const mountRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!mountRef.current) return;

		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);
		const renderer = new THREE.WebGLRenderer({ alpha: true });
		renderer.setSize(window.innerWidth, window.innerHeight);
		mountRef.current.appendChild(renderer.domElement);

		const smokeTexture = new THREE.TextureLoader().load("/smoke.png");
		const smokeMaterial = new THREE.MeshLambertMaterial({
			color: 0x444444,
			map: smokeTexture,
			transparent: true,
		});

		const smokeGeo = new THREE.PlaneGeometry(300, 300);
		const smokeParticles: THREE.Mesh[] = [];

		for (let p = 0; p < 150; p++) {
			const particle = new THREE.Mesh(smokeGeo, smokeMaterial);
			particle.position.set(
				Math.random() * 500 - 250,
				Math.random() * 500 - 250,
				Math.random() * 1000 - 100
			);
			particle.rotation.z = Math.random() * 360;
			scene.add(particle);
			smokeParticles.push(particle);
		}

		const light = new THREE.DirectionalLight(0xffffff, 1);
		light.position.set(0, 0, 1);
		scene.add(light);

		camera.position.z = 1000;

		const animate = () => {
			requestAnimationFrame(animate);

			smokeParticles.forEach((particle) => {
				particle.rotation.z += 0.001;
			});

			renderer.render(scene, camera);
		};

		animate();

		const handleResize = () => {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
			mountRef.current?.removeChild(renderer.domElement);
		};
	}, []);

	return (
		<div
			ref={mountRef}
			style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}
		/>
	);
};

export default SmokeBackground;
