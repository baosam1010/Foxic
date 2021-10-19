import classNames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom';


function AccountHeader(props) {
    const {user,isRegister, setIsRegister, isLogin, setIsLogin, Logout} = props;

    // console.log("user2222:", user);

    return (
        <li className="relative h-10 group px-3 flex items-center  ">
              <div className="">
                <i className="pr-2 far fa-user"></i>
                <Link to="/account">
                  {user.length > 0  ? (
                    <span className="text-sm mr-2 hover:text-indigo-500 hover:cursor-pointer">
                      {user[0].username}
                    </span>
                  ) : (
                    <span className="text-sm mr-2 hover:text-indigo-500 hover:cursor-pointer">
                      Account
                    </span>
                  )}
                  
                </Link>
              </div>
              <div className="hidden group-hover:block absolute top-0 right-0 transform translate-y-10 w-full z-10 bg-white rounded border border-gray-400">
                <ul className="w-full ">
                  <li
                    className={classNames(
                      user.length > 0 ? "hidden" : "block",
                      "w-full flex items-center hover:bg-gray-400  "
                    )}
                  >
                    <span
                      onClick={() => setIsRegister(!isRegister)}
                      className="w-full text-black text-base text-center px-2 py-1 hover:cursor-pointer"
                    >
                      Register
                    </span>
                  </li>
                  <li
                    className={classNames(
                      user.length  > 0 ? "hidden" : "block",
                      "w-full flex items-center hover:bg-gray-400  "
                    )}
                  >
                    <span
                      onClick={() => setIsLogin(!isLogin)}
                      className="w-full text-black text-base text-center px-2 py-1 hover:cursor-pointer"
                    >
                      Login
                    </span>
                  </li>
                  <li
                    className={classNames(
                      user.length  > 0 ? "block" : "hidden",
                      "w-full flex items-center hover:bg-gray-400"
                    )}
                  >
                    <span
                      onClick={() => Logout(Logout)}
                      className="w-full text-black text-base text-center px-2 py-1 hover:cursor-pointer"
                    >
                      Logout
                    </span>
                  </li>
                </ul>
              </div>
            </li>
    )
}

export default AccountHeader
