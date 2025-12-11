import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { BudgetContext } from "../context/BudgetContest"

export default function Header() {
    const {budgetMode, setBudgetMode} = useContext(BudgetContext)
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
            <button onClick={()=>{ setBudgetMode(prev => !prev)}}>
                {budgetMode ? "Attiva Modalita Bdget": "Disattiva Modalita Budget"}
            </button>
        </header>
    )
}