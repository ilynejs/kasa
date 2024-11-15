import Banner from '@components/Banner';
import ApartmentCard from '@components/ApartmentCard';
import apartments from '@data/apartments.json';

const Home = () => {
	return (
		<>
			<Banner page={'home'} />

			<section className="home__apartment-cards">
				{apartments.map((apartment) => (
					<ApartmentCard apartment={apartment} key={apartment.id} />
				))}
			</section>
		</>
	);
};

export default Home;
