import Client from "./client";

export default function Clients({ clients }) {
  return (
    <section className="clients section">
      <div className="container">
        <div className="clients-inner section-inner has-top-divider">
          <div className="container-sm">
            <ul className="list-reset mb-0">
              {clients.map(({ image, name }, index) => (
                <Client key={index} name={name} image={image}></Client>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
