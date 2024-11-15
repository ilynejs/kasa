import Banner from '@components/Banner';
import Collapse from '@components/Collapse';
import aboutDatas from '@data/about.json';

const about = () => {
	return (
		<>
			<Banner page={'about'} />

			<div className="about-center">
				<section className="collapses">
					{aboutDatas.map((data) => (
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
