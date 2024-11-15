import { useLoaderData } from 'react-router-dom';
import Slideshow from '@components/Slideshow';
import Tag from '@components/Tag';
import Host from '@components/Host';
import Rating from '@components/Rating';
import Collapse from '@components/Collapse';

const Apartment = () => {
	const apartment = useLoaderData();

	const rating = parseInt(apartment.rating);

	return (
		<>
			<Slideshow
				pictures={apartment.pictures}
				imagesAlt={apartment.title}
			/>

			<section className="details">
				<section className="details__left">
					<h1 className="details__apartment-name">
						{apartment.title}
					</h1>
					<p className="details__location">{apartment.location}</p>

					<div className="details__tags">
						{apartment.tags.map((tag, index) => (
							<Tag tag={tag} key={index} />
						))}
					</div>
				</section>

				<section className="details__right">
					<Host
						name={apartment.host.name}
						picture={apartment.host.picture}
					/>

					<Rating value={rating} />
				</section>
			</section>

			<section className="apartment-informations">
				<Collapse
					title="Description"
					content={Array(apartment.description)}
				/>

				<Collapse title="Équipements" content={apartment.equipments} />
			</section>
		</>
	);
};

export default Apartment;
