import React from 'react'
import StoreItem from './StoreItem' 



const styles = {
   ul: {
      listStyle:'none',
      margin: 0,
      padding: 0
   }
}



 function StoreList(props) {
   return(
      <ul style={styles.ul}>
         {props.product.map((produc, index,)  =>{
            return<StoreItem  className="home" produc={produc} key={produc.id}  index={index}/>
         }) }
      </ul>
   )
}



export default StoreList