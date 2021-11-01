import classNames from 'classnames';
import React, {  useState } from 'react'

function Account(props) {
    const { inforAccount, onUpdateAccount, onLogout } = props;
    // console.log("inforAccount_ACC:", inforAccount)
    let infor = inforAccount[0]
    // console.log("infor", infor)
    const [update, setUpdate] = useState(false);
    const [inforChange, setInforChange] = useState({name:'', username:'', email:'', phone:''})

    const onSubmitForm = (e)=>{
        e.preventDefault();
        // onUpdateAccount({...infor,...inforChange})
        console.log('infor123:', {...infor,...inforChange})
        onUpdateAccount({...infor,...inforChange})
        setInforChange({name:'', username:'', email:'', phone:''})
        onLogout()
    };

    // console.log('infor:', inforAccount)
    return (
        <div className="w-full">
            <h2 className="text-3xl font-semibold mb-7">Account Details</h2>
            {inforAccount.length === 0 ?(<span className="text-lg font-medium">You must be Logined</span>):(
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 lg:col-span-6  border-1 rounded">
                    <div className=" p-3">
                        <h3 className="text-lg font-semibold mb-3">Personal Information</h3>
                        <div>
                            <div className="mb-1">
                                <label className="text-base font-medium mr-3">Name:</label>
                                <span>{infor.name}</span>
                            </div>
                            <div className="mb-1">
                                <label className="text-base font-medium mr-3">UserName:</label>
                                <span>{infor.username}</span>
                            </div>
                            <div className="mb-1">
                                <label className="text-base font-medium mr-3">E-mail:</label>
                                <span>{infor.email}</span>
                            </div>
                            <div className="mb-1">
                                <label className="text-base font-medium mr-3">Phone:</label>
                                <span>{infor.phone}</span>
                            </div>
                            <button
                                className="my-3 hover:text-green-300"
                                onClick={() => setUpdate(!update)}
                            >
                                <i className="mr-2 fas fa-pen"></i>Edit
                            </button>
                        </div>
                    </div>
                </div>


            </div>)}
                        
            <div className={classNames(update ? 'block' : 'hidden', "w-full border rounded mt-3")}>
                <form className="p-3" onSubmit={(e)=>onSubmitForm(e)}>
                    <h3 className="text-lg font-semibold mb-3">Update Account Details</h3>
                    <div className="grid grid-cols-2 gap-4">

                        {/* <div className="flex flex-col col-span-6"> */}
                            <div className="col-span-2 md:col-span-1 mb-1 flex flex-col">
                                <label htmlFor="name" className="text-base font-medium mr-3">Name:</label>
                                <input
                                    className="bg-gray-100 pl-3 py-2 text-base "
                                    placeholder="Name..."
                                    required
                                    name="name"
                                    value={inforChange.name}
                                    onChange={(e) =>setInforChange({...inforChange, name: e.target.value })}

                                />
                            </div>
                            <div className="col-span-2 md:col-span-1 mb-1 flex flex-col">
                                <label htmlFor="name"  className="text-base font-medium mr-3">User Name:</label>
                                <input
                                    className="bg-gray-100 pl-3 py-2 text-base"
                                    placeholder="User name..."
                                    required
                                    name="username"
                                    value={inforChange.username}
                                    onChange={(e) =>setInforChange({...inforChange, username: e.target.value })}
                                />

                            </div>
                        {/* </div> */}
                        {/* <div className="flex flex-col col-span-6"> */}
                            <div className="col-span-2 md:col-span-1 mb-1 flex flex-col ">
                                <label htmlFor="name" className="text-base font-medium mr-3">Email:</label>
                                <input
                                    className="bg-gray-100 pl-3 py-2 text-base"
                                    placeholder="Last name..."
                                    required
                                    name="email" 
                                    value={inforChange.email}
                                    onChange={(e) =>setInforChange({...inforChange, email: e.target.value })}
                                />
                            </div>
                            <div className="col-span-2 md:col-span-1 mb-1 flex flex-col">
                                <label htmlFor="name"  className="text-base font-medium mr-3">Phone:</label>
                                <input
                                    className="bg-gray-100 pl-3 py-2 text-base"
                                    placeholder="Phone"
                                    required
                                    name="phone"
                                    value={inforChange.phone}
                                    onChange={(e) =>setInforChange({...inforChange, phone: e.target.value })}
                                />
                            </div>
                        </div>
                    {/* </div> */}
                    <div className="w-full mt-3">
                        <button
                            className="px-4 py-2 text-lg font-medium bg-green-300 text-white rounded mr-3 hover:bg-black"
                            onClick={() => setUpdate(!update)}
                        >
                            CANCEL
                        </button>
                        <button
                            className="px-4 py-2 text-lg font-medium bg-green-300 text-white rounded mr-3 hover:bg-black"
                            type="submit"
                        >
                            UPDATE
                        </button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default (Account);
