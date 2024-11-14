import Banner from '@components/Banner';
import Collapse from '@components/Collapse';
import collapses from '@data/about-collapses.json';

const about = () => {
	return (
		<>
			<Banner page={'about'} />

			<div className="about-center">
				<section className="collapses">
					{collapses.map((collapse) => (
						<Collapse
							key={collapse.title}
							title={collapse.title}
							content={collapse.content}
						/>
					))}
				</section>
			</div>
		</>
	);
};

export default about;
