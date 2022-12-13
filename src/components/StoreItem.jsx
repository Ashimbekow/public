import React from "react";





export default function StoreItem({produc, index}) {
   return(
       <li   className="home">
         <strong>{index + 1}</strong>
         {produc.title} <br></br> {produc.price}
         <p className="script">Lorem ipsum dolor sit amet consectetur, 
         adipisicing elit. Officiis expedita, corporis architecto eveniet nihil ipsam facilis
          rem deleniti soluta officia! Odio deserunt omnis adipisci laudantium sunt ipsum fugit, velit 
          illo veniam consequatur. Ipsa architecto rerum nemo illum reprehenderit sequi adipisci. In delectus rem perspiciatis velit, adipisci
           asperiores ut vel eum enim sunt illum consectetur veritatis fuga aliquam dignissimos magnam voluptatibus natus tempore pariatur a quisquam placeat.
            Laboriosam minima commodi magni.</p>
      </li>
   )
}
