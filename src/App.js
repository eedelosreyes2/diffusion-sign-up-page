// import "./App.css";
import './AppV2.css';
import { useState, useEffect } from 'react';
// import HeroComponent from "./components/HeroComponent";
import HeroComponentV2 from './components/HeroComponentV2';
import Particles from 'react-particles-js';
import ReactGa from 'react-ga';

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
}

function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	);

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowDimensions;
}

function App() {
	const { width } = useWindowDimensions();

	useEffect(() => {
		ReactGa.initialize('UA-199567565-1');
		ReactGa.pageview('/');
	}, []);

	return (
		<div className="App">
			{width >= 810 ? (
				<>
					<div style={{ height: '50px' }} />
					<Particles
						params={{
							particles: {
								color: {
									value: '#00b1d2',
								},
								line_linked: {
									color: {
										value: '#FDDB27',
									},
								},
								number: {
									value: 50,
								},
								size: {
									value: 3,
								},
							},
						}}
					/>{' '}
				</>
			) : null}
			<div
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
				}}
			>
				<HeroComponentV2 width={width} />
			</div>
		</div>
	);
}

export default App;
