import { useNavigate } from "react-router-dom";

export default function Footer(){
     const navigate=useNavigate();
    return(
        <>
        <div className="footer">
             
            <p> this was react assignment 4. focusing on react router. <br/> <br/>

            <strong> considered content:</strong><br/> 
            <span style={ {color : " yellow" }}>Routes, Navigation, Nested Routes, Outlet, Useparams. </span> <br/> <br/>

            to be honest there was lots of moments which i struggled with this project, even confused but decided to work and work.
            u know , i have my goal and wanna get sure to recieve. so after all darkness and getting confused by react i kept going.
            and this is the result.😊 </p>
        </div>
 
         <button onClick={() =>
            navigate("/Home")}> Back to Home </button>
        </>
    )
}