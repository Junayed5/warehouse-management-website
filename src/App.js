import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './components/AddItem/AddItem';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Item from './components/Item/Item';
import Login from './components/Login/Login';
import ManageInventories from './components/ManageInventories/ManageInventories';
import MyItem from './components/MyItem/MyItem';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/manageAll' element={
          <RequireAuth>
            <ManageInventories/>
          </RequireAuth>
        }/>
        <Route path='/addItem' element={
          <RequireAuth>
            <AddItem/>
          </RequireAuth>
        }/>
        <Route path='/myItem' element={
          <RequireAuth>
            <MyItem/>
          </RequireAuth>
        }/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/product/:productId' element={
          <RequireAuth>
            <Item/>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
