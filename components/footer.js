import Logo from "./logo";
import NavigationLink from "./navigation-link";
import SocialLink from "./social-link";

export default function Footer({
  logo,
  companyName,
  navigationLinks,
  socialLinks,
}) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer-inner">
          <div className="brand footer-brand">
            <Logo logo={logo} companyName={companyName}></Logo>
          </div>

          <ul className="footer-links list-reset">
            {socialLinks.map(({ link, name, logo }, index) => (
              <li key={index}>
                <SocialLink link={link} name={name} logo={logo}></SocialLink>
              </li>
            ))}
          </ul>

          <div className="footer-copyright">
            &copy; {currentYear} {companyName}, all rights reserved
          </div>

          <ul className="footer-links list-reset">
            {navigationLinks.map(({ link, text }, index) => (
              <li key={index}>
                <NavigationLink link={link} text={text}></NavigationLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
