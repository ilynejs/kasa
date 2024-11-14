const Banner = ({ page }) => {
	return (
		<div className={'banner ' + 'banner__' + page}>
			{page === 'home' ? (
				<h1 className="banner__title">
					Chez vous, partout et ailleurs
				</h1>
			) : null}
		</div>
	);
};

export default Banner;
