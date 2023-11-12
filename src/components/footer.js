import logoUNITEC from '../images/logoUnitec.png'
const Footer = () => {
    return (
        <footer className="container">
            <p>&copy; {(new Date().getFullYear())} UNITEC. &middot; <img src={logoUNITEC} width="100" /> </p>
        </footer>
    );
}

export default Footer;