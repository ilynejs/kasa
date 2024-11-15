const Host = ({ name, picture }) => {
	return (
		<div className="host">
			<h3 className="host__name">{name}</h3>

			<img
				className="host__picture"
				src={picture}
				alt={`Picture of ${name}`}
			/>
		</div>
	);
};

export default Host;
