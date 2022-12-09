import Link from "next/link";

const NavigationItems = [
    {label: "Home", target: "/"},
    {label: "Who am I?", target: "/about"},
    {label: "Blog", target: "/blog"},
    {label: "Projects", target: "/projects"},
    {label: "Research", target: "/research"},
    {label: "Curriculum Vitae", target: "/cv"},
    {label: "Instagram", target: "https://www.instagram.com/kordiangalinski/"},
    {label: "Twitter", target: "https://www.twitter.com/kordiangalinski/"},
]

const Navigation = (): JSX.Element => {
    return (
        <nav className=" md:p-20 text-center border-slate-400 shadow-2xl">
            <ul>
                {NavigationItems && NavigationItems.map((items, index) =>
                    <Link key={index} href={items.target}>
                        <li className="my-3 uppercase text-lg font-medium text-slate-300 hover:text-slate-100">
                            {items.label}
                        </li>
                    </Link>
                )}
            </ul>
        </nav>
    );
}

export default Navigation;