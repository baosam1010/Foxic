import React from 'react'

function Addresses() {
    return (
        <div className="w-full">
            <h2 className="text-3xl font-semibold mb-7">My Address</h2>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-6 border-1 rounded">
                    <div className=" p-3">
                        <h3 className="text-lg font-semibold mb-3">
                            Address 1
                            <span className="ml-3">(Default)</span>
                        </h3>
                        <div>
                            <p>Thomas Nolan Kaszas</p>
                            <p>5322 Otter Ln Middleberge</p>
                            <p>FL 32068 Palm Bay FL 32907</p>
                        </div>
                        <div className="flex justify-between">
                            <button className="my-3 hover:text-green-300"><i className="mr-2 fas fa-pen"></i>Edit</button>
                            <button className="my-3 hover:text-green-300">Delete</button>

                        </div>
                    </div>
                </div>
                <div className="col-span-6 border-1 rounded">
                    <div className=" p-3">
                        <h3 className="text-lg font-semibold mb-3">
                            Address 2
                            <span className="ml-3"></span>
                        </h3>
                        <div>
                            <p>Thomas Nolan Kaszas</p>
                            <p>5322 Otter Ln Middleberge</p>
                            <p>FL 32068 Palm Bay FL 32907</p>
                        </div>
                        <div className="flex justify-between">
                            <button className="my-3 hover:text-green-300"><i className="mr-2 fas fa-pen"></i>Edit</button>
                            <button className="my-3 hover:text-green-300">Delete</button>

                        </div>
                    </div>
                </div>

            </div>
            <div className="w-full border rounded mt-3">
                <div className="p-3">
                    <h3 className="text-lg font-semibold mb-3">Edit Address</h3>
                    <div className="w-full">

                        <div className="flex flex-col">
                            <div className="mb-1 flex flex-col">
                                <label className="text-base font-medium mr-3 mb-2">COUNTRY:</label>
                                <select className="bg-gray-100 pl-3 py-2 text-base ">
                                    <option>United States</option>
                                    <option>Vietnam</option>
                                    <option>England</option>
                                </select>
                            </div>
                            <div className="mb-1 flex flex-col">
                                <label className="text-base font-medium mr-3 mb-2">STATE:</label>
                                <select className="bg-gray-100 pl-3 py-2 text-base ">
                                    <option>Chicago</option>
                                    <option>Hanoi</option>
                                    <option>Da Nang</option>
                                    <option>Los Angeles</option>
                                    <option>London</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-row ">
                            <div className="mb-1 mr-3 flex flex-col ">
                                <label className="text-base font-medium mr-3 mb-2">CITY:</label>
                                <input className="bg-gray-100 pl-3 py-2 text-base" />
                            </div>
                            <div className="mb-1 mr-3 flex flex-col">
                                <label className="text-base font-medium mr-3 mb-2">ZIP/POSTAL CODE:</label>
                                <input className="bg-gray-100 pl-3 py-2 text-base" />
                            </div>
                        </div>
                        <div className="mb-1 mt-3 flex items-center">
                            <input className=" w-6 h-6" type="checkbox" />
                            <label className="text-base  ml-3 ">Set address as default</label>
                        </div>
                    </div>
                    <div className="w-full mt-3">
                        <button className="px-4 py-2 text-xl font-medium bg-green-300 text-white rounded mr-3 hover:bg-black">CANCEL</button>
                        <button className="px-4 py-2 text-xl font-medium bg-green-300 text-white rounded mr-3 hover:bg-black">UPDATE</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Addresses;
