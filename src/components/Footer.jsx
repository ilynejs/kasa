import kasaLogo from '@assets/img/logo-white.png';

const Footer = () => {
	return (
		<footer className="footer">
			<img src={kasaLogo} alt="Logo Kasa" className="footer__logo" />
			<p className="footer__text">© 2020 Kasa. All rights reserved</p>
		</footer>
	);
};

export default Footer;
