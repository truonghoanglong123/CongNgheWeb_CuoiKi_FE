import React, { useEffect } from "react";
import CRUD from "../sevices/crud";
import {
  useHistory
} from "react-router-dom";


function FormInput({ onSubmitSuccess, item, RetrieveAllSupplier }) {
    // onSubmitSuccess <=> onUpdateSuccess
    let history = useHistory();
    const [postData, setpostData] = React.useState({
        SupplierID:"",
        SupplierName:"",
        ContactName:"",
        Address:"",
        City:"",
        PostalCode:"",
        Country:"",
        Phone:"",
       
    })

    useEffect(() => {
        if (item)
            setpostData(item);
    }, [item])

    function handleChangeData(e) {

        setpostData({ ...postData, [e.target.name]: e.target.value });
    }

    function handleOnclickSubmit(e) {
            CRUD.createSupplier(postData).then((res) => {
                RetrieveAllSupplier();
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
            <input style={{height:"50px", borderRadius:"5px", textAlign: "center", width: "11%"}} type="text" name="SupplierName" value={postData.SupplierName} onChange={handleChangeData} placeholder="SupplierName"></input>
            <input style={{height:"50px", borderRadius:"5px", textAlign: "center", width: "11%"}} type="text" name="ContactName" value={postData.ContactName} onChange={handleChangeData} placeholder="ContactName"></input>
            <input style={{height:"50px", borderRadius:"5px", textAlign: "center", width: "11%"}} type="text" name="Address" value={postData.Address} onChange={handleChangeData} placeholder="Address"></input>
            <input style={{height:"50px", borderRadius:"5px", textAlign: "center", width: "11%"}} type="text" name="City" value={postData.City} onChange={handleChangeData} placeholder="City"></input>
            <input style={{height:"50px", borderRadius:"5px", textAlign: "center", width: "11%"}} type="text" name="PostalCode" value={postData.PostalCode} onChange={handleChangeData} placeholder="PostalCode"></input>
            <input style={{height:"50px", borderRadius:"5px", textAlign: "center", width: "11%"}} type="text" name="Country" value={postData.Country} onChange={handleChangeData} placeholder="Country"></input>
            <input style={{height:"50px", borderRadius:"5px", textAlign: "center", width: "11%"}} type="text" name="Phone" value={postData.Phone} onChange={handleChangeData} placeholder="Phone"></input>
            <button style={{height:"50px", borderRadius:"5px", textAlign: "center", width: "23%", backgroundColor: "rgb(230, 120, 116)"}} name="btnSubmit" onClick={handleOnclickSubmit}>Thêm</button>
        </form>
    )
}

export default FormInput;