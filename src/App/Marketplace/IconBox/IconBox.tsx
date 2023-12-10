import { RedIcon } from 'redicons';



interface IconBoxProps {
	name: string,
	alreadyInCart: boolean,
	onClick: () => void,
	idx?: number
}

export default function IconBox ({
	name, alreadyInCart, onClick,
	idx=0
}: IconBoxProps) {
	return (
		<div className='px-2 py-2 relative bg-zinc-950 text-center border border-transparent cursor-pointer hover:border-red-600' onClick={onClick}>
			{alreadyInCart && <RedIcon name='check-square-fill' className='absolute top-2 right-2 text-green-500' />}
			<h6 className='absolute top-2 left-2 px-2 py-1 bg-red-600 text-white rounded' hidden={idx === 0}>{idx}</h6>

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
