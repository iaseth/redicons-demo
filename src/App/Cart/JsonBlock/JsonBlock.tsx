import { red } from "redicons";



interface JsonBlockProps {
	cartItems: string[]
}

export default function JsonBlock ({cartItems}: JsonBlockProps) {
	const icons = cartItems.map(iconName => red.icons.find(icon => icon.name === iconName));
	const jo = { icons };
	const jsonText = JSON.stringify(jo, null, "\t");

	return (
		<section className="max-w-5xl mx-auto py-4 space-y-1">
			<header className="bg-zinc-950 px-3 py-3 rounded">
				<h4>JSON Icons</h4>
			</header>
			<section className="bg-zinc-950 px-3 py-3 overflow-x-scroll rounded">
				<pre className="w-parent">{jsonText}</pre>
			</section>
		</section>
	);
}
