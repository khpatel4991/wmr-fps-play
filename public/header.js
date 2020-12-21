import { useLoc } from 'preact-iso/router';
import { useEffect, useState } from 'preact/hooks';

export default function Header() {
	const { url } = useLoc();
	const [fps, setFps] = useState(0);
	const [lastFrame, setLastFrame] = useState(0);
	useEffect(() => {
		const t = performance.now();
		setFps(Math.round(1000 / (t - lastFrame)));
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
