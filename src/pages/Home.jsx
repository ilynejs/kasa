import Banner from '@components/Banner';
import HotelCard from '@components/HotelCard';
import logements from '@data/logements.json';

const Home = () => {
	return (
		<>
			<Banner page={'home'} />

			<section className="home__hotel-cards">
				{logements.map((hotel) => (
					<HotelCard hotel={hotel} key={hotel.id} />
				))}
			</section>
		</>
	);
};

export default Home;
