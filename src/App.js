
import React, { useState } from 'react';
// import  { useEffect } from 'react';
import ButtonTop from './components/ButtonTop';
import Footer from './components/Footer';
import Header from './components/header/Header';
// import Main from './components/main/main';
import Toast from './components/Toast';
import {
  BrowserRouter as Routers,
  Switch,
  Route,
} from 'react-router-dom';
// import CartPage from './pages/CartPage';
// import PostListPage from './pages/PostListPage';
import { Routes } from './constants/Routes';
import userAdmin from './constants/admin'
import LoginForm from './components/LoginForm';


function App() {

  const [isToast, setIsToast] = useState(false);
  const [user, setUser] = useState({ name: '', email: '' });
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  const Login = (details) => {
    console.log(details)
    if (details.email === userAdmin.email && details.password === userAdmin.password) {
      console.log('Logined')
      setUser({
        name: details.name,
        email: details.email,
      });
      setError('');
      setIsLogin(!isLogin);
    } else {
      setError('PLease check your email & password !!!')
    }
  }
  const Logout = () => {
    console.log("logout");
    setUser({ ...user, ...{ name: '', email: '' } })
    setError('');
    console.log("user:", user)
  }

  // console.log('Appprops:',props)

  function handleToast(event) {
    if (event) {
      setIsToast(!isLogin)
    }
  };

  function handleLoginForm(e) {
    if (e) {
      setIsLogin(!isToast)
    }
  }
  // useEffect(() => {

  //   let times = setInterval(function handleToast1() {
  //     setIsToast(!isToast)
  //   }, 5000);
  //   return () => {
  //     clearInterval(times)
  //   }
  // }, [])

  const showRoutes = (Routes) => {
    let result = null;
    result = Routes.map((item, index) => {
      return (
        <Route
          key={index}
          path={item.path}
          exact={item.exact}
          component={item.component}
        />
      )
    })
    return result;
  };

  return (
    <Routers>

      <div className="max-w-full">
        <Header isLogin={isLogin} setIsLogin={handleLoginForm} Logout={Logout} user={user} />
        <Switch>
          {showRoutes(Routes)}
        </Switch>
        <Footer />
        <ButtonTop />
        <Toast isOpen={isToast} setIsOpen={handleToast} />
        {isLogin && <LoginForm Login={Login} error={error} />}
      </div>
    </Routers>
  );
}

export default App;
