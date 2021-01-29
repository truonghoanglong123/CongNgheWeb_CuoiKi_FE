import React, { useEffect } from "react";
import CRUD from "../sevices/crud";
import {
  useHistory
} from "react-router-dom";


function FormInput({ onSubmitSuccess, item, RetrieveAllCustomers }) {
    // onSubmitSuccess <=> onUpdateSuccess
    let history = useHistory();
    const [postData, setpostData] = React.useState({
        CustomerName: "",
        ContactName: "",
        Address: "",
        City: "",
        PostalCode: "",
        Country: "",
    })

    useEffect(() => {
        if (item)
            setpostData(item);
    }, [item])

    function handleChangeData(e) {

        setpostData({ ...postData, [e.target.name]: e.target.value });
    }

    function handleOnclickSubmit(e) {
        const {
            CustomerName,
            ContactName,
            Address,
            City,
            PostalCode,
            Country,
        } = postData;
            CRUD.createCustomer({customer_name: CustomerName,contact_name: ContactName, address: Address
                , city: City, postal_code: PostalCode, country: Country}).then((res) => {
                // alert(res.data.message);
                //window.location.reload();
                RetrieveAllCustomers();
                const check = res.data.message === "Insert successfully";
                onSubmitSuccess(check);
            }).catch((err) => {
                console.log(err)
                alert(err.response.data.message || "Unknown Message");
            });
        // }

        console.log("Data : " + JSON.stringify(postData));
    }

    function handleOnSubmit(e) {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <input style={{height:"50px", borderRadius:"5px", textAlign: "center", width: "13%"}} type="text" name="CustomerName" value={postData.CustomerName} onChange={handleChangeData} placeholder="CustomerName"></input>
            <input style={{height:"50px", borderRadius:"5px", textAlign: "center", width: "13%"}} type="text" name="ContactName" value={postData.ContactName} onChange={handleChangeData} placeholder="ContactName"></input>
            <input style={{height:"50px", borderRadius:"5px", textAlign: "center", width: "13%"}} type="text" name="Address" value={postData.Address} onChange={handleChangeData} placeholder="Address"></input>
            <input style={{height:"50px", borderRadius:"5px", textAlign: "center", width: "13%"}} type="text" name="City" value={postData.City} onChange={handleChangeData} placeholder="City"></input>
            <input style={{height:"50px", borderRadius:"5px", textAlign: "center", width: "13%"}} type="text" name="PostalCode" value={postData.PostalCode} onChange={handleChangeData} placeholder="PostalCode"></input>
            <input style={{height:"50px", borderRadius:"5px", textAlign: "center", width: "13%"}} type="text" name="Country" value={postData.Country} onChange={handleChangeData} placeholder="Country"></input>
            <button style={{height:"50px", borderRadius:"5px", textAlign: "center", width: "22%", backgroundColor: "rgb(230, 120, 116)"}} name="btnSubmit" onClick={handleOnclickSubmit}>Thêm</button>
        </form>
    )
}

export default FormInput;