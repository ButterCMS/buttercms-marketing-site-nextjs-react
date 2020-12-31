import Image from "next/image";

export default function Client({ image, name }) {
    return (
        <div style={{ position: "relative", width: "200px", height: "100px" }}>
            <Image alt={name} src={image} layout="fill" objectFit="contain" />
        </div>
    );
}
