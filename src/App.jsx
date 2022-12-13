import StoreList from './components/StoreList.jsx'
import './App.css'
import imgfors from "./images/force.svg"
import jordan from "./images/jordan.svg"
import reebok from "./images/reebok.svg"

function App() {
    const product =[
      {id: 1,  completed: false, title: 'Nike Force',price:'Цена:870.43$',},
      {id: 2, completed: false, title: 'Nike Jordan',price :'Цена:456.12$',},
      {id: 3,completed: false, title: 'Reebok Classik',price:'Цена:245.14$',}
    ]


  return (
    <div className="wrapper">
      <h1>S N E A C E R S</h1>
      <StoreList className="list" product={product} />
      <img  className='force' src={imgfors} alt="" />
      <img className='jordan' src={jordan} alt="" />
      <img className='rebook' src={reebok} alt="" />
    </div>
  )
}

export default App
