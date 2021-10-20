import './App.css';
import Header from './Pages/Shared/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Services/Services';
import Booking from './Pages/Booking/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './Context/AuthProvider';
import Register from './Pages/Register/Register';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Profile from './Pages/Profile/Profile';
import About from './Pages/About/About';
import Contacts from './Pages/Contacts/Contacts';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';



function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <PrivateRoute path='/profile'>
          <Profile></Profile>
        </PrivateRoute>
        <Route path='/about'>
          <About></About>
        </Route>
        <Route path='/contacts'>
          <Contacts></Contacts>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path='/register'>
          <Register></Register>
        </Route>
        <Route path='/services'>
          <Services></Services>
        </Route>
        <PrivateRoute path="/booking/:id">
          <Booking></Booking>
        </PrivateRoute>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
  </AuthProvider>

  );
}

export default App;
