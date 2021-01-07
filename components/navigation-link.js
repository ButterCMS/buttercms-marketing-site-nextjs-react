import Link from "next/link";

export default function NavigationLink({ link, text }) {
    return (
        <Link href={link}>
            <a>{text}</a>
        </Link>
    );
}
