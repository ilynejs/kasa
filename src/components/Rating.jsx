import activeStar from '@assets/icons/active-star.png';
import inactiveStar from '@assets/icons/inactive-star.png';

const Rating = ({ value }) => {
	const inactiveStars = 5 - value;

	return (
		<span className="rating">
			{[...Array(value)].map((_, index) => (
				<img
					className="rating__star"
					src={activeStar}
					alt="star icon"
					key={index}
				/>
			))}

			{[...Array(inactiveStars)].map((_, index) => (
				<img
					className="rating__star"
					src={inactiveStar}
					alt="inactive star icon"
					key={index}
				/>
			))}
		</span>
	);
};

export default Rating;
