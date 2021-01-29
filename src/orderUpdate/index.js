import { useEffect, useState } from "react";
import { useHistory, useLocation, useParams, Link } from "react-router-dom";
import React from "react";
import CRUD from "../sevices/crud";
import "./style.css";


function Order() {
    const { id } = useParams();
    // const location = useLocation();
    // const item = (location.state.item)
    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [postData, setpostData] = React.useState(null);

    function handleChangeData(e) {
        setpostData({ ...postData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        CRUD.updateOneOrder(postData.OrderID, postData).then((res) => {
            history.goBack();
        }).catch((err) => {
            console.log(err);
        })

    }

    useEffect(() => {
        setLoading(true)
        CRUD.getOneOrder(id)
            .then(res => {
                setpostData(res.data.data);
                setLoading(false)
            })
            .catch(err => {
                console.log(err);
                setLoading(false)
            })
    }, [id])

    return (
        <>
            <div className="container">
                <nav>
                <div className="logo"><Link to="/">TLH</Link></div>
                    <label for="btn" class="icon">
                        <span className="fa fa-bars"></span>
                    </label>
                    <ul>
                    <li>
                            <Link to="/customer">Customers</Link>
                        </li>
                        <li>
                            <Link to="/categories">Categories</Link>
                        </li>
                        <li>
                            <Link to="/employees">Employees</Link>
                        </li>
                        <li><Link to="/orderDetail">OrderDetails</Link>

                        </li>
                        <li>
                            <Link to="/order">Orders</Link>
                        </li>
                        <li>
                            <Link to="/Product">Products</Link>
                        </li>
                        <li><Link to="shipper">Shippers</Link>

                        </li>
                        <li><Link to="/supplier">Suppliers</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="content">
                <div className="form">
                    <h1>Employees</h1>
                    {!loading ?
                        postData ?
                            <>
                                <div className="txtb">
                                    <label for="">CustomerID:</label>
                                    <input type="text" name="CustomerID" value={postData.CustomerID} onChange={handleChangeData} placeholder="CustomerID"></input>
                                </div>
                                <>
                                    <div className="txtb">
                                        <label for="">EmployeeID:</label>
                                        <input type="text" name="EmployeeID" value={postData.EmployeeID} onChange={handleChangeData} placeholder="EmployeeID"></input>
                                    </div>
                                    <>
                                    <div className="txtb">
                                        <label for="">OrderDate:</label>
                                        <input type="text" name="OrderDate" value={postData.OrderDate} onChange={handleChangeData} placeholder="OrderDate"></input>
                                    </div>
                                    <>
                                    <div className="txtb">
                                        <label for="">ShipperID:</label>
                                        <input type="text" name="ShipperID" value={postData.ShipperID} onChange={handleChangeData} placeholder="ShipperID"></input>
                                    </div>
                                    
                                        <>
                                            <button className="btn btn-primary" name="btnSubmit" value="Submit" onClick={handleSubmit}><i class="fas fa-tools"></i>Submit</button>
                                                
                                        </>
                                    </>
                                    </>
                                </>
                            </>
                            : <div>khong co data</div>
                        : <div>Loading ...</div>
                    }
                </div>
            </div>
        </>
    );
}

// <ul>
//   {listCustomer.map((item, index) => (
//     <li key={item.ProductID}>{item.ProductName}</li>
//   ))}
// </ul>
export default Order;
