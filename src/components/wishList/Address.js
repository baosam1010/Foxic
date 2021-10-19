import classNames from 'classnames';
import React, { useState } from 'react'

function Addresses(props) {
    const { inforAccount, onLogout, onUpdateAccount}=props;

    const [update, setUpdate] = useState(false);
    const [inforChange, setInforChange] = useState({ city:'hanoi', street:'', zipcode:'550000', setDefault:false})


    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Information:", {...inforAccount[0],  address: inforChange})
        onUpdateAccount({...inforAccount[0],  address: inforChange})
        setInforChange({ city:'hanoi', street:'', zipcode:'550000', setDefault:false})
        onLogout()
        setUpdate(!update)
    };

    return (
        <div className="w-full">
            <h2 className="text-3xl font-semibold mb-7">My Address</h2>
            {inforAccount.length === 0 ?(<span className="text-lg font-medium">You must be Logined</span>):(
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-6 border-1 rounded">
                    <div className=" p-3">
                        <h3 className="text-lg font-semibold mb-3">
                            Address 1
                           {inforChange.setDefault === true ? (<span className="ml-3">{`(Default)`}</span>) :"" }
                        </h3>
                        <div className="">
                            <div className="flex">
                                <span className="text-base font-medium mr-2">City:</span>
                                <p >{inforAccount[0].address.city}</p>
                            </div>
                            <div className="flex">
                                <span className="text-base font-medium mr-2">Street:</span>
                                <p>{inforAccount[0].address.street}</p>
                            </div>
                            <div className="flex">
                                <span className="text-base font-medium mr-2">ZipCode:</span>
                                <p>{inforAccount[0].address.zipcode}</p>
                            </div>                                                    
                        </div>
                        <div className="flex justify-between">
                            <button
                                className="my-3 hover:text-green-300"
                                onClick={() => setUpdate(!update)}
                            >
                                <i className="mr-2 fas fa-pen"></i>Edit
                            </button>
                            {/* <button className="my-3 hover:text-green-300">Delete</button> */}
                        </div>
                    </div>
                </div>
            </div>
            )}

            <div className={classNames(update === false ? 'hidden' : 'block', "w-full border rounded mt-3")}>
                <form className="p-3" onSubmit={(e)=>handleSubmit(e)}>
                    <h3 className="text-lg font-semibold mb-3">Edit Address</h3>
                    <div className="w-full">

                        <div className="flex flex-col">                           
                            <div className="mb-1 flex flex-col">
                                <label className="text-base font-medium mr-3 mb-2">CITY:</label>
                                <select 
                                    className="bg-gray-100 pl-3 py-2 text-base "
                                    name="city"
                                    id="city"
                                    value={inforChange.city}
                                    onChange={(e) =>setInforChange({...inforChange, city: e.target.value })}

                                >
                                    <option value="Chicago">Chicago</option>
                                    <option value="hanoi">Hanoi</option>
                                    <option value="danang">Da Nang</option>
                                    <option value="losangeles">Los Angeles</option>
                                    <option value="london">London</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-row ">
                            <div className="mb-1 mr-3 flex flex-col ">
                                <label className="text-base font-medium mr-3 mb-2">STREET:</label>
                                <input 
                                    className="bg-gray-100 pl-3 py-2 text-base" 
                                    name="street"
                                    id="street"
                                    value={inforChange.street}
                                    onChange={(e) =>setInforChange({...inforChange, street: e.target.value })}

                                />
                            </div>
                            <div className="mb-1 mr-3 flex flex-col">
                                <label className="text-base font-medium mr-3 mb-2">ZIP/POSTAL CODE:</label>
                                <input 
                                    className="bg-gray-100 pl-3 py-2 text-base" 
                                    name="zipcode"
                                    id="zipcode"
                                    value={inforChange.zipcode}
                                    onChange={(e) =>setInforChange({...inforChange, zipcode: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className="mb-1 mt-3 flex items-center">
                            <input
                                className=" w-6 h-6"
                                type="checkbox"
                                name="setDefault"
                                id="setDefault"
                                defaultValue={inforChange.setDefault}
                                onChange={(e)=> setInforChange({...inforChange, setDefault: !inforChange.setDefault}) }

                            />
                            <label className="text-base  ml-3 ">Set address as default</label>
                        </div>
                    </div>
                    <div className="w-full mt-3">
                        <button className="px-4 py-2 text-xl font-medium bg-green-300 text-white rounded mr-3 hover:bg-black">CANCEL</button>
                        <button 
                            className="px-4 py-2 text-xl font-medium bg-green-300 text-white rounded mr-3 hover:bg-black"
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

export default Addresses;
