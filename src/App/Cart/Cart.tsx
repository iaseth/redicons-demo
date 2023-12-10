import IconBox from "../Marketplace/IconBox/IconBox";
import JsonBlock from "./JsonBlock/JsonBlock";



interface CartProps {
	cartItems: string[],
	addOrRemoveItem: (itemName: string) => void
}

export default function Cart ({
	cartItems, addOrRemoveItem
}: CartProps) {

	return (
		<section>
			<section className="max-w-5xl mx-auto">
				<header className="text-center px-3 py-6">
					<h4>Cart has {cartItems.length} items</h4>
				</header>

				<section className="icon-grid">
					{cartItems.map((iconName, k) => <IconBox key={k} name={iconName}
						idx={k+1}
						alreadyInCart={true}
						onButtonClick={() => addOrRemoveItem(iconName)} />)}
				</section>
			</section>

			<JsonBlock {...{cartItems}} />
		</section>
	);
}
