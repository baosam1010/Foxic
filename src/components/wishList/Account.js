import classNames from 'classnames';
import React, {  useState } from 'react'

function Account(props) {
    const { inforAccount, onUpdateAccount } = props;
    console.log("inforAccount_ACC:", inforAccount)
    let infor = inforAccount[0]
    const [update, setUpdate] = useState(false);
    const [inforChange, setInforChange] = useState({firstName:'', lastName:'', email:'', phone:''})


    const handleChangeFirstName = (e) => {
        let txtName = e.target.value ;
        if(txtName && txtName !== ''){
            setInforChange( {
                firstName: txtName,
            })
        }else{
            setInforChange( {
            firstName: infor.firstName,
        }) }
    };
    const handleChangeLastName = (e) => {
        let txtName = e.target.value ;
        if(txtName && txtName !== ''){
            setInforChange( {
                lastName: txtName,
            })
        }else{
            setInforChange( {
            lastName: infor.lastName,
        }) }
    };
    const handleChangeEmail = (e) => {
        let txtName = e.target.value ;
        if(txtName && txtName !== ''){
            setInforChange( {
                email: txtName,
            })
        }else{
            setInforChange( {
            email: infor.email,
        }) }
    };
    const handleChangePhone = (e) => {
        let txtName = e.target.value ;
        if(txtName && txtName !== ''){
            setInforChange( {
                phone: txtName,
            })
        }else{
            setInforChange( {
            phone: infor.phone,
        }) }
        txtName=''
    };
    const handleSubmit=(inforChange)=>{

        onUpdateAccount(inforChange)
        setUpdate(!update)
        setInforChange({firstName:'', lastName:'', email:'', phone:''})
        console.log('inforChange:',inforChange)
    };
    const onSubmitForm = (e)=>{
        e.preventDefault();
    };

    // console.log('infor:', inforAccount)
    return (
        <div className="w-full">
            <h2 className="text-3xl font-semibold mb-7">Account Details</h2>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-6 border-1 rounded">
                    <div className=" p-3">
                        <h3 className="text-lg font-semibold mb-3">Personal Information</h3>
                        <div>
                            <div className="mb-1">
                                <label className="text-base font-medium mr-3">First Name:</label>
                                <span>{infor.firstName}</span>
                            </div>
                            <div className="mb-1">
                                <label className="text-base font-medium mr-3">Last Name:</label>
                                <span>{infor.lastName}</span>
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


            </div>
            
            
            <div className={classNames(update ? 'block' : 'hidden', "w-full border rounded mt-3")}>
                <form className="p-3" onSubmit={(e)=>onSubmitForm(e)}>
                    <h3 className="text-lg font-semibold mb-3">Update Account Details</h3>
                    <div className="grid grid-cols-2 gap-4">

                        {/* <div className="flex flex-col col-span-6"> */}
                            <div className="col-span-1 mb-1 flex flex-col">
                                <label htmlFor="name" className="text-base font-medium mr-3">First Name:</label>
                                <input
                                    className="bg-gray-100 pl-3 py-2 text-base "
                                    placeholder="First name..."
                                    name="firstName"
                                    // value={inforChange.firstName}
                                    onChange={(e) => handleChangeFirstName(e)}
                                />
                            </div>
                            <div className="col-span-1 mb-1 flex flex-col">
                                <label htmlFor="name"  className="text-base font-medium mr-3">Last Name:</label>
                                <input
                                    className="bg-gray-100 pl-3 py-2 text-base"
                                    placeholder="Email..."
                                    name="lastName"
                                    // value={inforChange.lastName}
                                    onChange={(e) => handleChangeLastName(e)}
                                />

                            </div>
                        {/* </div> */}
                        {/* <div className="flex flex-col col-span-6"> */}
                            <div className="col-span-1 mb-1 flex flex-col ">
                                <label htmlFor="name" className="text-base font-medium mr-3">Email:</label>
                                <input
                                    className="bg-gray-100 pl-3 py-2 text-base"
                                    placeholder="Last name..."
                                    name="email" 
                                    // value={inforChange.email}
                                    onChange={(e) => handleChangeEmail(e)}
                                />
                            </div>
                            <div className="col-span-1 mb-1 flex flex-col">
                                <label htmlFor="name"  className="text-base font-medium mr-3">Phone:</label>
                                <input
                                    className="bg-gray-100 pl-3 py-2 text-base"
                                    placeholder="Phone"
                                    name="phone"
                                    // value={inforChange.phone}
                                    onChange={(e) => handleChangePhone(e)}
                                />
                            </div>
                        </div>
                    {/* </div> */}
                    <div className="w-full mt-3">
                        <button
                            className="px-3 py-1 bg-green-300 text-white rounded mr-3 hover:bg-black"
                            onClick={() => setUpdate(!update)}
                        >
                            CANCEL
                        </button>
                        <button
                            className="px-3 py-1 bg-green-300 text-white rounded mr-3 hover:bg-black"
                            onClick={() =>handleSubmit(inforChange)}
                        >
                            UPDATE
                        </button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Account
