import React, { useEffect, useState } from "react";
import CRUD from "../sevices/crud";
import {
    useHistory
} from "react-router-dom";


function FormInput({ onSubmitSuccess, item, RetrieveAllOrderDetail }) {
    // onSubmitSuccess <=> onUpdateSuccess
    let history = useHistory();
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState(null);
    const [product, setProduct] = useState(null);
    const [postData, setpostData] = React.useState({
        OrderDetailID: "",
        OrderID: "",
        ProductID: "",
        Quantity: "",
    })

    useEffect(() => {
        setLoading(true);
        if (item)
            setpostData(item);
        CRUD.getAllOrder().then((res) => {
            setOrder(res.data.data);
        }).catch((err) => {
            alert(err.response?.data.message || "Unknown Message");
            console.log(err);
        });
        CRUD.getAll().then((res) => {
            setProduct(res.data.data);
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
        CRUD.createOrderDetail(postData).then((res) => {
            RetrieveAllOrderDetail();
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
        <>
        {!loading ? (<form onSubmit={handleOnSubmit}>
            <select style={{ height: "50px", borderRadius: "5px", textAlign: "center", width: "22%" }} type="text" name="OrderID" value={postData.OrderID} onChange={handleChangeData} placeholder="OrderID">
                {
                    order.map((od) => (
                        <option key={od.OrderID} value={od.OrderID}>{od.OrderID}</option>
                    ))
                }
            </select>
            <select style={{ height: "50px", borderRadius: "5px", textAlign: "center", width: "22%" }} type="text" name="ProductID" value={postData.ProductID} onChange={handleChangeData} placeholder="ProductID">
                {
                    product.map((pr) => (
                        <option key={pr.ProductID} value={pr.ProductID}>{pr.ProductID}</option>
                    ))
                }
            </select>
            <input style={{ height: "50px", borderRadius: "5px", textAlign: "center", width: "22%" }} type="text" name="Quantity" value={postData.Quantity} onChange={handleChangeData} placeholder="Quantity"></input>
            <button style={{ height: "50px", borderRadius: "5px", textAlign: "center", width: "34%", backgroundColor: "rgb(230, 120, 116)" }} name="btnSubmit" onClick={handleOnclickSubmit}>Thêm</button>
        </form>) : <div>Loading ...</div>}
        </>
    )
}

export default FormInput;