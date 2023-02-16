import './App.css';
import {useState} from 'react';
import Box from './Box'

function App() {
  const [products, setProducts] = useState([])
const [item, setItem] = useState({
  itemName: "",
  price: "",
  image: ""
})

const handleInput = (e) =>{
  setItem({...item, [e.target.name] : e.target.value});
  console.log(item);
}
const saveData = (e) =>{
  e.preventDefault();
  setProducts([...products, item]);
  console.log(products);
  setItem({
    itemName :"",
    price: "",
    image:""
  });
}
const orderData = (e) =>{
  e.preventDefault();
  setProducts([...products.sort((a,b) => a.price - b.price)])
}
  return (
   
   <div>
    <form autoComplete='off'>
    <input value={item.itemName} onChange={handleInput} name='itemName' placeholder='mehsul adi' type='text' /> <br/>
    <input  value={item.price} onChange={handleInput} name='price' placeholder='qiymeti' type='text' /> <br/>
    <input  value={item.image} onChange={handleInput} name='image' placeholder='goruntusu' type='text' /> <br/>
    <button onClick={saveData}>Add</button>
    </form>
    <button onClick={orderData}>Sirala</button>
    <div className='boxes'>
      {products.map((a,b) => <Box key={b} itemName={a.itemName} price={a.price} image={a.image}/>)}
    </div>
   </div>
    
  );
}

export default App;
