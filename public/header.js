import { useLoc } from 'preact-iso/router';
import { useEffect, useState } from 'preact/hooks';

const UPDATE_FPS_INTERVAL_MS = 100;

export default function Header() {
	const { url } = useLoc();
	const [fps, setFps] = useState(0);
	const [lastFrame, setLastFrame] = useState(0);
	const [lastUpdated, setLastUpdated] = useState(Number.NEGATIVE_INFINITY);
	useEffect(() => {
		const t = performance.now();
		if(t - lastUpdated > UPDATE_FPS_INTERVAL_MS) {
			setLastUpdated(t);
			setFps(Math.round(1000 / (t - lastFrame)));
		}
		setLastFrame(t);
	});
	return (
		<header>
			<nav>
				<a href="/">Home</a>
				<a href="/about">About</a>
				<a href="/error">Error</a>
			</nav>
			<label>
				URL:
				<input readonly value={url} ref={c => c && (c.size = c.value.length)} />
			</label>
			<label>
				FPS:
				<input readonly value={fps} />
			</label>
		</header>
	);
}
