import Link from "next/link";

const NavigationItems = [
    {label: "Home", target: "/"},
    {label: "Who am I?", target: "/about"},
    {label: "Projects", target: "/projects"},
    {label: "Research", target: "/research"},
    {label: "Curriculum Vitae", target: "/cv"},
    {label: "Blog", target: "/blog"},
    {label: "Instagram", target: "https://www.instagram.com/kordiangalinski/"},
]

const Navigation = (): JSX.Element => {
    return (
        <nav className="md:border-r md:p-20 text-center border-slate-400">
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