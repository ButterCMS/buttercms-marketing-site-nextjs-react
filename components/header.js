import Logo from "./logo";

export default function Header({ logo, companyName }) {
  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header-inner">
          <div className="brand header-brand">
            <Logo logo={logo} companyName={companyName}></Logo>
          </div>
        </div>
      </div>
    </header>
  );
}
