import { useState } from 'react';
import collapseArrow from '@assets/icons/collapse-arrow.png';

const Collapse = ({ title, content }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<article
				className={isOpen ? 'collapse collapse--open' : 'collapse'}
			>
				<header
					className="collapse__header"
					onClick={() => setIsOpen(!isOpen)}
				>
					<h2 className="collapse__header__title">{title}</h2>

					<img
						src={collapseArrow}
						alt="arrow icon"
						className={
							isOpen
								? 'collapse__header__icon--open'
								: 'collapse__header__icon'
						}
					/>
				</header>

				<div
					className={
						isOpen
							? 'collapse__content collapse__content--open'
							: 'collapse__content'
					}
				>
					{content.map((item, index) => (
						<p key={index}>{item}</p>
					))}
				</div>
			</article>
		</>
	);
};

export default Collapse;
