import './App.css';
import Counter from './Counter';
import {useSelector} from 'react-redux'

function App() {
  const count = useSelector((state) => state.counter.dark)


  return (
    <div className={count ? 'dark' : 'light'}> 
 <Counter/>
  
    </div>
    
  );
}

export default App;
