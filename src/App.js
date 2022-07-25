
import './App.css';
import Header from "./Header"
import Slider from './Slider';
import { useState,useEffect } from "react"
import MyData from "./relatedProducts.json"
import Products from './Products';
import BestSeller from "./bestSeller.json"
import Footer from "./Footer"

function App() {
  
  
 
  const [card, setCard] = useState([])
  const [bestSeller, setBestSeller] = useState([])
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || 0)

    useEffect(()=>{
      const data = MyData.map((item)=> {
        return ({...item,isFav:false})
      } )
      setCard(data)
    },[])
   useEffect(()=>{
    localStorage.setItem("cart", JSON.stringify(cart))
   },[cart])
   useEffect(()=>{
    const data = BestSeller.map((item)=>{
      return ({...item})
    })
    setBestSeller(data)
    console.log(bestSeller)
   },[])

console.log(card)
  
  let arda = 0
  console.log(cart)


  return (
    <div>
      <Header
        cart={cart}
      />
      <Slider />
      <Products
      cart={setCart}
      items={card}
      bestSeller={bestSeller}
      MyData={MyData}
      />
      <Footer/>
    </div>
  )
}

export default App;
