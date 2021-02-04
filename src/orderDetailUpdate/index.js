import { useEffect, useState } from "react";
import { useHistory, useLocation, useParams, Link } from "react-router-dom";
import React from "react";
import CRUD from "../sevices/crud";
import "./style.css";


function OrderDetail() {
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
        CRUD.updateOneOrderDetail(postData.OrderDetailID, postData).then((res) => {
            history.goBack();
        }).catch((err) => {
            console.log(err);
        })

    }

    function handleHuy(e) {
        e.preventDefault();
        history.goBack();
    }

    useEffect(() => {
        setLoading(true)
        CRUD.getOneOrderDetail(id)
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
            <div className="container-app">
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
                                    <label for="">OrderID:</label>
                                    <input type="text" name="OrderID" value={postData.OrderID} onChange={handleChangeData} placeholder="OrderID"></input>
                                </div>
                                <>
                                    <div className="txtb">
                                        <label for="">ProductID:</label>
                                        <input type="text" name="ProductID" value={postData.ProductID} onChange={handleChangeData} placeholder="ProductID"></input>
                                    </div>
                                    <>
                                        <div className="txtb">
                                            <label for="">Quantity:</label>
                                            <input type="text" name="Quantity" value={postData.Quantity} onChange={handleChangeData} placeholder="Quantity"></input>
                                        </div>

                                        <>
                                            <button className="btn btn-primary" name="btnSubmit" value="Submit" onClick={handleSubmit}><i class="fas fa-tools"></i>Submit</button>

                                        </>
                                        <>
                                            <button className="btn btn-primary" name="btnHuy" value="Submit" onClick={handleHuy}><i class="fas fa-tools"></i>Cancel</button>

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
export default OrderDetail;
