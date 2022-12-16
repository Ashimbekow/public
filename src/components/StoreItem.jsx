import React from "react";





export default function StoreItem({produc, index}) {
   const btn = (elem) => {
      console.log('Товар добавлен!');
   }
   return(
       <li className="home">
         <strong>{index + 1}</strong>
         {produc.title} <br></br> {produc.price}
         <p className="script">Lorem ipsum dolor sit amet consectetur, 
         adipisicing elit. Officiis expedita, corporis architecto eveniet nihil ipsam facilis
          rem deleniti soluta officia! Odio deserunt omnis adipisci. </p>
          <button id="button" onClick={btn}>В корзину</button>
      </li>
   )
}
