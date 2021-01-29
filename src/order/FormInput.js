import React, { useEffect, useState } from "react";
import CRUD from "../sevices/crud";
import {
    useHistory
} from "react-router-dom";


function FormInput({ onSubmitSuccess, item, RetrieveAllOrder }) {
    // onSubmitSuccess <=> onUpdateSuccess
    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [customer, setcustomer] = useState(null);
    const [employees, setemployees] = useState(null);
    const [shipper, setshipper] = useState(null);
    const [postData, setpostData] = React.useState({
        OrderID: "",
        CustomerID: "",
        EmployeeID: "",
        OrderDate: "",
        ShipperID: "",
    })

    useEffect(() => {
        if (item)
            setpostData(item);
        CRUD.getAllCustomer().then((res) => {
            setcustomer(res.data.data);
        }).catch((err) => {
            alert(err.response?.data.message || "Unknown Message");
            console.log(err);
        });
        CRUD.getAllEmployees().then((res) => {
            setemployees(res.data.data);
        }).catch((err) => {
            alert(err.response?.data.message || "Unknown Message");
            console.log(err);
        });
        CRUD.getAllShipper().then((res) => {

            setshipper(res.data.data);
            setLoading(false)
        }).catch((err) => {
            setLoading(false)
            alert(err.response?.data.message || "Unknown Message");
            console.log(err);
        });
    }, [item])

    function handleChangeData(e) {

        setpostData({ ...postData, [e.target.name]: e.target.value });
    }

    function handleOnclickSubmit(e) {
        CRUD.createOrder(postData).then((res) => {
            RetrieveAllOrder();
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
                <select style={{ height: "50px", borderRadius: "5px", textAlign: "center", width: "17%" }} type="text" name="CustomerID" value={postData.CustomerID} onChange={handleChangeData} placeholder="CustomerID">
                    {
                        customer.map((cus) => (
                            <option key={cus.customer_id} value={cus.customer_id}>{cus.customer_id}</option>
                        ))
                    }
                </select>
                <select style={{ height: "50px", borderRadius: "5px", textAlign: "center", width: "17%" }} type="text" name="EmployeeID" value={postData.EmployeeID} onChange={handleChangeData} placeholder="EmployeeID">
                    {
                        employees.map((em) => (
                            <option key={em.EmployeeID} value={em.EmployeeID}>{em.EmployeeID}</option>
                        ))
                    }
                </select>
                <input style={{ height: "50px", borderRadius: "5px", textAlign: "center", width: "17%" }} type="text" name="OrderDate" value={postData.OrderDate} onChange={handleChangeData} placeholder="OrderDate"></input>
                <select style={{ height: "50px", borderRadius: "5px", textAlign: "center", width: "17%" }} type="text" name="ShipperID" value={postData.ShipperID} onChange={handleChangeData} placeholder="ShipperID">
                    {
                        shipper.map((ship) => (
                            <option key={ship.ShipperID} value={ship.ShipperID}>{ship.ShipperID}</option>
                        ))
                    }
                </select>
                <button style={{ height: "50px", borderRadius: "5px", textAlign: "center", width: "32%", backgroundColor: "rgb(230, 120, 116)" }} name="btnSubmit" onClick={handleOnclickSubmit}>Thêm</button>
            </form>) : <div>Loading ...</div>}
        </>

    )
}

export default FormInput;