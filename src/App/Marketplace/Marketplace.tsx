import IconBox from './IconBox/IconBox';
import React from 'react';
import iconNamesJson from '../iconnames.json';



interface MarketplaceProps {
	addOrRemoveItem: (itemName: string) => void,
	alreadyInCart: (itemName: string) => boolean
}

export default function Marketplace ({
	addOrRemoveItem, alreadyInCart
}: MarketplaceProps) {
	const [query, setQuery] = React.useState("");
	const inputRef = React.useRef<HTMLInputElement>(null);

	const [pageSize, setPageSize] = React.useState(40);
	const [pageNumber, setPageNumber] = React.useState(0);

	const iconNames = iconNamesJson.iconNames;
	const filterWords = query.trim().split(" ").map(word => word.trim()).filter(word => word);
	const filteredIconNames = iconNames.filter(iconName => {
		if (filterWords.length === 0) return true;
		for (const word of filterWords) {
			if (iconName.includes(word)) return true;
		}
		return false;
	});

	const startIndex = pageNumber * pageSize;
	const endIndex = startIndex + pageSize;
	const iconsOnCurrentPage = filteredIconNames.slice(startIndex, endIndex);

	const handleKeydown = (ev: KeyboardEvent) => {
		switch (ev.key) {
			case "/":
				if (inputRef && inputRef.current) {
					ev.preventDefault();
					inputRef.current.focus();
				}
				break;
			case "Escape":
				if (inputRef && inputRef.current && inputRef.current === document.activeElement) {
					ev.preventDefault();
					inputRef.current.blur();
				}
				break;
			default:
				console.log(`You pressed: '${ev.key}'`)
		}
	};
	React.useEffect(() => {
		window.addEventListener('keydown', handleKeydown);
		return () => window.addEventListener('keydown', handleKeydown);
	}, []);

	return (
		<section className="px-2 py-4 min-h-screen">
			<section className='max-w-5xl mx-auto '>
				<header className='py-3'>
					<input className='px-3 py-3 w-full bg-zinc-950' value={query} ref={inputRef} onChange={e => setQuery(e.target.value)} />
				</header>

				<section className="icon-grid">
					{iconsOnCurrentPage.map((iconName, k) => <IconBox key={k} name={iconName}
						alreadyInCart={alreadyInCart(iconName)}
						onButtonClick={() => addOrRemoveItem(iconName)} />)}
				</section>
			</section>
		</section>
	);
}
