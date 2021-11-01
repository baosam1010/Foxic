import classNames from 'classnames'
import React from 'react'

function ModalAccountHeader(props) {
    const { openModalAccountHeader, setOpenModalAccountHeader } = props;
    const { user, isRegister, setIsRegister, isLogin, setIsLogin, Logout } = props;


    return (
        <div className="lg:hidden fixed inset-0 bg-gray-500 bg-opacity-80 z-50 ">
            <div className="w-90vw sm:w-40vw h-screen absolute top-0 right-0 bottom-0 flex flex-col bg-white text-black">
                <div className="w-full flex items-center justify-center mt-10">
                    <button
                        className="px-4 py-1 rounded bg-red-500 left-0 text-lg font-medium text-white uppercase"
                        onClick={() => { setOpenModalAccountHeader(!openModalAccountHeader) }}
                    >
                        Close
                    </button>
                </div>

                <ul className="right-0 flex flex-col items-end mx-4 mt-10">
                    <li
                        className={classNames(
                            user.length > 0 ? "hidden" : "block",
                            "mt-2 text-lg font-medium")}
                        onClick={() => {
                            setOpenModalAccountHeader(!openModalAccountHeader);
                            setIsRegister(!isRegister)
                        }
                        }
                    >
                        Register
                    </li>
                    <li

                        className={classNames(
                            user.length > 0 ? "hidden" : "block",
                            "mt-2 text-lg font-medium")}
                        onClick={() => {
                            setOpenModalAccountHeader(!openModalAccountHeader);
                            setIsLogin(!isLogin)
                        }
                        }
                    >
                        Login
                    </li>

                    <li
                        className={classNames(
                            user.length > 0  ? "block" : "hidden",
                            "mt-2 text-lg font-medium")}
                        onClick={() => {
                            setOpenModalAccountHeader(!openModalAccountHeader);
                            Logout(Logout)
                        }
                        }
                    >
                        Logout
                    </li>


                </ul>


            </div>
        </div>
    )
}

export default ModalAccountHeader
