import { useNavigate } from "react-router-dom";

export default function Home(){
        const navigate = useNavigate();

    return(
        <>

         
        <h1> welcome to Enrin shop 2 </h1>

        <p className="footer"> 
            As you may saw our online Enrin shop, we sell cosmetics around the world<br/> 
            it's such a honor to have our second round with our customers.<br/>
            thank you for choosing Enrin Online shop.  

        </p>

        <div>
        <button onClick={() =>
            navigate("/Footer")}> About</button>

        </div>

        </>
    )
}