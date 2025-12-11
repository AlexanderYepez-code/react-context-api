import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function SingoloProdotto() {
    const { samuel } = useParams();
    const [prodotto, setprodotto] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/products/${samuel}`)
            .then((resp) => {
                setprodotto(resp.data);
            })
            .catch((err) => {
                if (err.status === 404) {
                    navigate("/prodotti");
                }

            })
    }, [samuel]);

    return (
        <>
            {prodotto !== null && (
                <div>
                    <img src={prodotto.image} alt="" />
                    <h3>{prodotto.title}</h3>
                    <p><strong>{prodotto.price} €</strong></p>

                </div>
            )}
        </>
    )
}