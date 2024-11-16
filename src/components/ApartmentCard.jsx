import { Link } from 'react-router-dom';

const ApartmentCard = ({ apartment }) => {
	return (
		<Link to={`/apartment/${apartment.id}`} className="apartment-card">
			<article className="apartment-card">
				<div className="apartment-card__cover">
					<img
						src={apartment.cover}
						alt={apartment.title}
						className="apartment-card__cover__img"
					/>
				</div>

				<div className="apartment-card__content">
					<h2 className="apartment-card__title">{apartment.title}</h2>
				</div>
			</article>
		</Link>
	);
};

export default ApartmentCard;
