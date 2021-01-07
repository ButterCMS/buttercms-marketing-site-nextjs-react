import Image from "next/image";
import Link from "next/link";

export default function Logo({ logo, companyName }) {
    return (
        <Link href="/">
            <a
                style={{
                    display: "block",
                    height: "32px",
                    width: "32px",
                    position: "relative",
                }}
            >
                <Image src={logo} alt={companyName} layout="fill" />
            </a>
        </Link>
    );
}
