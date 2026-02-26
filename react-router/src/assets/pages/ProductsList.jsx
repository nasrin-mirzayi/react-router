
import { Link } from "react-router-dom";
import { Products } from "../../data/Products";

export default function ProductsList() {
    return (
        <div className="items">

            {Products.map((product) => (
                <div key={product.id}
                    style={{ marginBottom: "15px" }}>
                    <h4>{product.name}</h4>
                    <p>{product.price}</p>

                    <Link to={`/products/${product.id}`}> view details  | </Link>
                </div>
            ))}

        </div>
    )
}