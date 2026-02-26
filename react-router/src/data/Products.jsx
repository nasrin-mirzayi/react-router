import Des1 from "./des1";
import Des2 from "./des2";
import Des3 from "./Des3";
import Des4 from "./Des4";
import Des5 from "./Des5";
import Des6 from "./Des6";

export const Products  = [

  { id: "1", name: <span style={{color: "pink"}}> Lip-Stick</span>, price: "100$", Category:  <span style={{color: "gold"}}> Make Up</span>, 
    Description:<Des1/>} , 
 
  { id: "2", name: <span style={{color: "gold"}}> Eye Shadow</span> ,price: "110$", Category: <span style={{color: "gold"}}> Make Up</span>, 
    Description: <Des2/>} ,  

  { id: "3", name: <span style={{color: "yellow"}}> Sun Screen</span> ,price: "200$", Category:"cream", 
    Description: <Des3/>},

  { id: "4", name: <span style={{color: "darksalmon"}}> Moisturiser</span>,price: "120$", Category: <span style={{color: "yellow"}}> Skin Care</span>, 
    Description: <Des4/>},

  { id: "5", name:"vitamin c",price: "220$", Category: <span style={{color: "yellow"}}> Skin Care</span>, 
    Description: <Des5/>},

  { id: "6", name: <span style={{color: "aqua"}}> Light Mask</span>,price: "280$", Category:"skin care",
    Description: <Des6/>}

];


