import React, { useEffect, useState } from "react";
import CRUD from "../sevices/crud";
import {
  useHistory
} from "react-router-dom";


function FormInput({ onSubmitSuccess, item }) {
    // onSubmitSuccess <=> onUpdateSuccess
    let history = useHistory();
    const [loading, setLoading] = useState(true)
    const [postData, setpostData] = React.useState({
        ProductName: "",
        SupplierID: "",
        CategoryID: "",
        Unit: "",
        Price: "",
    })
    const [categories, setCategories] = useState(null) 

    useEffect(() => {
        setLoading(true)
        if (item)
            setpostData(item);
        
        CRUD.getAllCategories().then((res) => {
            setCategories(res.data.data);
            setLoading(false)
        }).catch((err) => {
            setLoading(false)
            alert(err.response.data.message || "Unknown Message");
        });
    }, [item])

    function handleChangeData(e) {
        setpostData({ ...postData, [e.target.name]: e.target.value });
    }

    function handleOnclickSubmit(e) {
            CRUD.create(postData).then((res) => {
                // alert(res.data.message);
                //window.location.reload();
                const check = res.data.message === "Insert successfully";
                onSubmitSuccess(check);
            }).catch((err) => {
                alert(err.response.data.message || "Unknown Message");
            });

        // }

        console.log("Data : " + JSON.stringify(postData));
    }

    function handleOnSubmit(e) {
        e.preventDefault();
    }


    return (
        <>
        {!loading ? (
            <form onSubmit={handleOnSubmit}>
            <input style={{height:"50px", borderRadius:"5px", textAlign: "center", width: "15%"}} type="text" name="ProductName" value={postData.ProductName} onChange={handleChangeData} placeholder="ProductName"></input>
            <input style={{height:"50px", borderRadius:"5px", textAlign: "center", width: "15%"}} type="text" name="SupplierID" value={postData.SupplierID} onChange={handleChangeData} placeholder="SupplierID"></input>
            <select style={{height:"50px", borderRadius:"5px", textAlign: "center", width: "15%"}} type="text" name="CategoryID" onChange={handleChangeData} placeholder="CategoryID" value={postData.CategoryID}>
                {
                    categories.map((ct) => (
                        <option key={ct.CategoryID} value={ct.CategoryID}>{ct.CategoryID}</option>
                    ))
                }
            </select>
            <input style={{height:"50px", borderRadius:"5px", textAlign: "center", width: "15%"}} type="text" name="Unit" value={postData.Unit} onChange={handleChangeData} placeholder="Unit"></input>
            <input style={{height:"50px", borderRadius:"5px", textAlign: "center", width: "15%"}} type="text" name="Price" value={postData.Price} onChange={handleChangeData} placeholder="Price"></input>
            <button style={{height:"50px", borderRadius:"5px", textAlign: "center", width: "25%", backgroundColor: "rgb(230, 120, 116)"}} name="btnSubmit" onClick={handleOnclickSubmit}>Thêm</button>
        </form>
        ): <div>Loading ...</div>}
        </>
    )
}

export default FormInput;