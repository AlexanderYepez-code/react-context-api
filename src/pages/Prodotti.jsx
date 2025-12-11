import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import axios from "axios";
import { BudgetContext } from "../context/BudgetContest";

export default function Prodotti() {
    const {budgetMode} = useContext(BudgetContext);

    const [prodotti, setprodotti] = useState([]);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((resp) => {
                setprodotti(resp.data)

            })
    }, [])

    const filtroPerPrezzo = budgetMode ? prodotti.filter((product)=> product.price <= 30) : prodotti

    return (
        <>
            <section className="flex container jc-space-between">
                {filtroPerPrezzo.map((product) => (

                    
                        <div className="card " key={product.id}>
                            <Link to={`/prodotti/${product.id}`}>
                            <img src={product.image} alt="" />
                            <h3>{product.title}</h3>
                            <p><strong>{product.price} €</strong></p>
                            </Link>

                        </div>
                    
                ))}
            </section>

        </>
    )
}