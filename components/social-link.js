import Image from "next/image";

export default function SocialLink({ link, name, logo }) {
    return (
        <a href={link}>
            <Image src={logo} alt={name} height={15} width={15}></Image>
        </a>
    );
}
