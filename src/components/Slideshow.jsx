import React, { useState } from 'react';
import carouselLeftArrow from '@assets/icons/carousel-left-arrow.png';
import carouselRightArrow from '@assets/icons/carousel-right-arrow.png';

const Slideshow = ({ pictures, imagesAlt }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handlePreviousClick = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
		);
	};

	const handleNextClick = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
		);
	};

	if (pictures.length === 1) {
		return (
			<ul className="carousel">
				<li className="carousel__item carousel__item--active">
					<img
						className="carousel__item__image"
						src={pictures[0]}
						alt={`Picture of ${imagesAlt}`}
					/>
				</li>
			</ul>
		);
	}

	return (
		<ul className="carousel">
			<button
				className="carousel__button carousel__button--previous"
				aria-label="Previous picture"
				onClick={handlePreviousClick}
			>
				<img src={carouselLeftArrow} alt="previous image arrow icon" />
			</button>

			{pictures.map((picture, index) => (
				<li
					className={`carousel__item${
						index === currentIndex ? '--active' : ''
					}`}
					key={index}
				>
					<img
						className="carousel__item__image"
						src={picture}
						alt={`Picture of ${imagesAlt}`}
					/>
				</li>
			))}

			<p className="carousel__counter">
				{currentIndex + 1} / {pictures.length}
			</p>

			<button
				className="carousel__button carousel__button--next"
				aria-label="Next picture"
				onClick={handleNextClick}
			>
				<img src={carouselRightArrow} alt="next image arrow icon" />
			</button>
		</ul>
	);
};

export default Slideshow;
