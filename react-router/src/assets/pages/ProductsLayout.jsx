import { Outlet } from "react-router-dom";

export default function ProductsLayout(){
    return(
        <div>
        <h1> Enrin cosmetics 😊: </h1>

        <Outlet/>

        </div>
    )
}