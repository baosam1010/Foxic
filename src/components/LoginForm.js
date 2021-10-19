import React, { useState } from 'react'

function LoginForm(props) {

    const [details, setDetais] = useState({ name: '', email: '', password: '' });
    const { Login, error, isLogin, setIsLogin }=props;

    const handleSubmitForm = (e) => {
        e.preventDefault();
        Login(details)
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-200 bg-opacity-40 z-20">
            <div className="p-2 bg-gradient-to-br from-red-400 to-yellow-600  w-full mx-2 lg:w-3/12 rounded">
                <form onSubmit={handleSubmitForm} className=" bg-white rounded" >
                    <h2 className="p-1 mb-2 text-xl text-center bg-yellow-400 text-white font-semibold w-full ">Login Form</h2>
                    {/* error */}
                    {error !== '' ? (<span className="my-2 italic text-red-500 text-sm ">{error}</span>) : null}
                    <div className="p-2">

                        {/* <div className=" flex flex-col mb-2">
                            <label className="text-base font-medium mb-1" htmlFor="name">Username:</label>
                            <input
                                className="px-2 py-1 border-2 border-gray-400 rounded outline-none focus:border-yellow-400 "
                                type="text"
                                name="name"
                                id="name"
                                max={15}
                                onChange={(e) => setDetais({ ...details, name: e.target.value })}
                                value={details.name}
                            />
                        </div> */}

                        <div className="flex flex-col mb-2">
                            <label className="text-base font-medium mb-1" htmlFor="email">Email:</label>
                            <input
                                className="px-2 py-1 border-2 border-gray-400 rounded outline-none focus:border-yellow-400 "
                                type="email" name="email" id="email" required
                                onChange={(e) => setDetais({ ...details, email: e.target.value })}
                                value={details.email}
                            />
                        </div>
                        <div className="flex flex-col mb-2">
                            <label className="text-base font-medium mb-1" htmlFor="password">Password:</label>
                            <input
                                className="px-2 py-1 border-2 border-gray-400 rounded outline-none focus:border-yellow-400 "
                                type="password" name="password" id="password" required
                                onChange={(e) => setDetais({ ...details, password: e.target.value })}
                                value={details.password}
                            />
                        </div>
                        {/* <button className="px-3 py-1 bg-yellow-400 text-white text-base uppercase font-medium rounded hover:bg-black " type="submit" >LOGIN</button> */}
                        <div className="mx-2 pb-2 flex justify-between">
                            <button
                                className=" px-3 py-1 bg-yellow-400 text-white text-base uppercase font-medium rounded hover:bg-black "
                                type="submit"
                            >
                                Login
                            </button>
                            <button
                                onClick={() => setIsLogin(!isLogin)}
                                className=" px-3 py-1 bg-yellow-400 text-white text-base uppercase font-medium rounded hover:bg-black ">
                                CLOSE
                            </button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm
