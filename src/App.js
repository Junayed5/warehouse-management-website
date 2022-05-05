import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Item from './components/Item/Item';
import Login from './components/Login/Login';
import ManageInventories from './components/ManageInventories/ManageInventories';
import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/manageAll' element={<ManageInventories/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/product/:productId' element={
          <RequireAuth>
            <Item/>
          </RequireAuth>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
