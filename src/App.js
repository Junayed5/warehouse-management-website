import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Item from './components/Item/Item';
import ManageInventories from './components/ManageInventories/ManageInventories';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/manageAll' element={<ManageInventories/>}/>
        <Route path='/product/:productId' element={<Item/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
