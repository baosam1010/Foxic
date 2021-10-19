

import React, { useEffect, useState } from 'react';
import ButtonTop from './components/ButtonTop';
import Footer from './components/Footer';
import Header from './components/header/Header';
import Toast from './components/Toast';
import {
  BrowserRouter as Routers,
  Switch,
  Route,
} from 'react-router-dom';

import { Routes } from './constants/Routes';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import { connect } from 'react-redux';
import {
  actHideLoading,
  actLogin,
  actLogout,
  actRegister,
  actShowToast,
  // actLogin,
  actHideToast,
  actSaveUsers,
  actShowLoading
} from './action';
import userApi from './api/userApi';
import LoadingGlobal from './components/LoadingGlobal';


function App(props) {

  const {
    onLogin,
    onLogout,
    inforAccount,
    onSaveUserOnStore,
    onRegister,
    Users, 
    // onShowToast,
  } = props;
  // console.log('showLoading:', showLoading.showLoading)

  const [userRegister, setUserRegister] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    address: {
      street: '',
      district: '',
      city: '',
      country: '',
      zipcode: '',
      default: false,
    },
  });
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState('');

  let arrEmail = Users.map(user => user.email)

  const Login = (details) => {
    // console.log(details)
    if (arrEmail.includes(details.email)) {
      let userLogin = Users.filter(item => { return item.email === details.email })
      console.log('Logined')
      // console.log('userLogin', userLogin)
      onLogin(userLogin)
      setIsLogin(!isLogin);
      setError('');
    } else {
      setError('PLease check your email & password !!!')
    }
  };

  const Register = (details) => {
    console.log(details)
    if (!arrEmail.includes(details.email)) {
      console.log('Registered')
      setUserRegister({
        ...userRegister,
        name: details.firstname,
        username: details.username,
        email: details.email,
        phone: details.phone,
        password: details.password,
        comfirmpasswords: details.comfirmpasswords,
        address: {
          street: details.address.street,
          city: details.address.city,
          country: details.address.country,
          zipcode: details.address.zipcode,
        },
        default: details.default,
      });
      onRegister(details)
      setError('');
      setIsRegister(!isRegister);
    } else {
      setError('PLease check your email & password !!!')
    }
  };

  const Logout = () => {
    console.log("logout");
    onLogout();
    setError('');
    // console.log("user:", user)
  }



  // function handleToast(event) {
  //   if (event) {
  //     setIsToast(!isToast)
  //   }
  // };

  function handleLoginForm(e) {
    if (e) {
      // setIsLogin(!isToast)
      setIsLogin(!isLogin)
    }
  }


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

  useEffect(() => {
    const getUers = async () => {
      try {
        const response = await userApi.getAll();
        // console.log("response: ",response);
          onSaveUserOnStore(response); 
      } catch (error) {
        console.log('Fail to get Users');
      }
    };
    getUers();
  }, [onSaveUserOnStore]);

  // useEffect(()=>{
  //   onShowToast("Login Success")
  // },[inforAccount])

  return (
    <Routers>

      <div className="max-w-full">
        <Header
          isLogin={isLogin}
          setIsLogin={handleLoginForm}
          isRegister={isRegister}
          setIsRegister={setIsRegister}
          Logout={Logout}
          // user={user} 
          user={inforAccount}
        />

        <Switch>
          {showRoutes(Routes)}
        </Switch>

        <Footer />
        <ButtonTop />
        <LoadingGlobal />
        <Toast  />
        {isLogin && <LoginForm isLogin={isLogin} setIsLogin={setIsLogin} Login={Login} error={error} />}
        {isRegister && <RegisterForm isRegister={isRegister} setIsRegister={setIsRegister} Register={Register} error={error} />}
      </div>
    </Routers>
  );
}
const mapStateToProps = (state) => {
  return {
    Users: state.User,
    inforAccount: state.AccountReducer,
    isLoading: state.Loading,
  }
};
const mapDispatchToProps = (dispatch, props) => {
  return {

    onLogin: (user) => {
      dispatch(actLogin(user));
      dispatch(actShowToast("Login Success"));
      setTimeout(() => {
        dispatch(actHideToast(''));
      }, 1500)
    },

    onLogout: () => {
      dispatch(actLogout())
    },

    onSaveUserOnStore: (users) => {
      dispatch(actShowLoading());
      dispatch(actSaveUsers(users));
      setTimeout(() => {
        dispatch(actHideLoading())
      }, 1500);
    },

    onRegister: (users) => {
      dispatch(actShowLoading());
      dispatch(actRegister(users))
      setTimeout(() => {
        dispatch(actHideLoading())
      }, 500);
    },

    // onShowToast:(message)=>{
    //   dispatch(actShowToast(message));
    //   setTimeout(() => {
    //     dispatch(actHideToast(''));
    //   }, 1500)
    // }

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
