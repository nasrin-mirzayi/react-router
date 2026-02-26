import { useNavigate, useParams } from "react-router-dom";
import { Products } from "../../data/Products";

function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const product = Products.find((p) =>
        p.id === (id));


    if (!product) {
        return (
            <div>
                <h3> product not found</h3>
                <button onClick={() =>
                    navigate("/products")}> back</button>
            </div>
        );
    }

    return (
        <div>
            <h3>{product.name}</h3>

            <p>{product.price}</p>
            <h3><strong> Category:</strong> {product.Category}</h3>
            <p><strong> Description:</strong> {product.Description}</p>

            <button onClick={() =>
                 navigate("/products")}> back</button>

        </div>
    )
}
export default ProductDetails