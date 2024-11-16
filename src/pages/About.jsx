import Banner from '@components/Banner';
import Collapse from '@components/Collapse';
import aboutData from '@data/about.json';

const about = () => {
	return (
		<>
			<Banner page={'about'} />

			<div className="about-center">
				<section className="collapses">
					{aboutData.map((data) => (
						<Collapse
							key={data.title}
							title={data.title}
							content={data.content}
						/>
					))}
				</section>
			</div>
		</>
	);
};

export default about;
