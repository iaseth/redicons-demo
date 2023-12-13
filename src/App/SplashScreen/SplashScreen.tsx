


export default function SplashScreen () {
	return (
		<main className="bg-zinc-900 text-white min-h-screen flex">
			<header className="m-auto p-6 text-center bg-zinc-950 rounded space-y-2">
				<section className="py-2">
					<img src="/img/redpapr-icon.svg" className="w-20 h-20 m-auto" />
				</section>
				<h1 className="text-4xl">RedIcon</h1>
				<p>Please wait while icons are loading.</p>
			</header>
		</main>
	);
}
