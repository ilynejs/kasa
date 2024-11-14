import { Link } from 'react-router-dom';

const HotelCard = ({ hotel }) => {
	return (
		// <Link to={`/hotels/${hotel.id}`} className="hotel-card">
		<article className="hotel-card">
			<div className="hotel-card__cover">
				<img
					src={hotel.cover}
					alt={hotel.title}
					className="hotel-card__cover__img"
				/>
			</div>

			<div className="hotel-card__content">
				<h2 className="hotel-card__title">{hotel.title}</h2>
			</div>
		</article>
		// </Link>
	);
};

export default HotelCard;
