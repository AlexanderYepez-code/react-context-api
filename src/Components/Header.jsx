import { NavLink } from "react-router-dom"

export default function Header() {
    const navLinks = [
        {
            title: "Homepage",
            path: "/",
        },
        {
            title: "Chi siamo",
            path: "/chi-siamo",
        },
        {
            title: "Prodotti",
            path: "/prodotti",
        }
    ]
    return (
        <header className="container">
            <div>
                Logo
            </div>
            <div>

                <ul className="flex jc-space-between">
                    {navLinks.map((link, index) => (

                        <li key={index}>
                            <NavLink to={link.path}>{link.title}</NavLink>
                        </li>

                    ))}
                </ul>
            </div>
        </header>
    )
}