import { RedIcon } from 'redicons';



interface IconBoxProps {
	name: string,
	alreadyInCart: boolean,
	onButtonClick: () => void,
	idx?: number
}

export default function IconBox ({
	name, alreadyInCart, onButtonClick,
	idx=0
}: IconBoxProps) {
	return (
		<div className='px-2 py-2 relative bg-zinc-950 text-center border border-transparent hover:border-red-600'>
			<div className='absolute top-0 right-0 p-2 cursor-pointer hover:bg-zinc-900' onClick={onButtonClick}>
				<RedIcon name={alreadyInCart ? 'check-square-fill' : 'plus-circle'} className='text-green-500' />
			</div>

			<h6 className='absolute top-2 left-2 p-1 text-white rounded' hidden={idx === 0}>#{idx}</h6>

			<header className='py-3'>
				<RedIcon name={name} size={32} className='mx-auto' fill='red' />
			</header>
			<footer>
				<h6 className='py-2'>
					<span className='px-1.5 py-1 rounded bg-zinc-900'>{name}</span>
				</h6>
			</footer>
		</div>
	);
}
