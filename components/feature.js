import Image from "next/image";

export default function Feature({ headline, subheadline, image }) {
  return (
    <div className="feature">
      <div className="feature-inner">
        <div className="feature-icon">
          <div
            style={{
              position: "relative",
              height: "120px",
              width: "100%",
            }}
          >
            <Image
              alt={headline}
              src={image}
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
        </div>
        <h4 className="feature-title">{headline}</h4>
        <p className="text-sm">{subheadline}</p>
      </div>
    </div>
  );
}
