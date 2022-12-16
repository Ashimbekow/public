import StoreList from './components/StoreList.jsx'
import './App.css'
import imgfors from "./images/force.svg"
import jordan from "./images/jordan.svg"
import reebok from "./images/reebok.svg"
import versache from "./images/versache.svg"
import nike_air_plus from "./images/nike_air_plus.svg"
import nike_air_max from "./images/nike_air_max.svg"


function App() {
    const product =[
      {id: 1,  completed: false, title: 'Nike Force',price:'Цена:871.43$',},
      {id: 2, completed: false, title: 'Nike Jordan',price :'Цена:456.12$',},
      {id: 3,completed: false, title: 'Reebok Classik',price:'Цена:245.63$',},
      {id: 4, completed:false, title: 'versache',price : 'Цена:432.21$',},
      {id: 5, completed:false, title: 'nike_air_plus',price : 'Цена:562.51$',},
      {id: 6, completed:false, title: 'nike_air_max',price : 'Цена:602.32$',}
    ]
     const change = (elem) => {
        console.log(event.target.value + ":Товар найден" )
     }
  return (
    <div className="wrapper">
      <div className='menu'>
      <h1>Amazon</h1>
        <div className='nav_bar'>
        <a  href="#">О нас</a>
        <a href="#">Главная</a>
        <a href="#">Наши телефоны</a>
        <input id='input' onChange={(event.target.value)} type="number" placeholder='Поиск товаров по номеру...'/><button onClick={change}  id="create_button"  className='cards'>Добавить</button>
        </div>
      </div>
      <StoreList className="list" product={product} />
      <img  className='force' src={imgfors} alt="" />
      <img className='jordan' src={jordan} alt="" />
      <img className='rebook' src={reebok} alt="" />
      <img className='versache' src={versache} alt="" />
      <img className='nike_air_plus' src={nike_air_plus} alt="" />
      <img className='nike_air_max' src={nike_air_max} alt="" />
    </div>
  )
}

export default App
