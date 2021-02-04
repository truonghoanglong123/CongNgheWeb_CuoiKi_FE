import { useEffect, useState } from "react";
import { useHistory, useLocation, useParams, Link } from "react-router-dom";
import React from "react";
import CRUD from "../sevices/crud";
import "./style.css";


function Customer() {
    const { id } = useParams();
    // const location = useLocation();
    // const item = (location.state.item)
    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [postData, setpostData] = React.useState({
        customer_name: "",
        contact_name: "",
        address: "",
        city: "",
        postal_code: "",
        country: "",
    });

    function handleChangeData(e) {
        setpostData({ ...postData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        CRUD.updateOneCustomer(postData.customer_id, postData).then((res) => {
            history.goBack();
        }).catch((err) => {
            console.log(err);
        })

    }

    useEffect(() => {
        setLoading(true)
        CRUD.getOneCustomer(id)
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
                    <h1>Customers</h1>
                    {!loading ?
                        postData ?
                            <>
                                <div className="txtb">
                                    <label for="">CustomerName:</label>
                                    <input type="text" name="customer_name" value={postData.customer_name} onChange={handleChangeData} placeholder="CustomerName"></input>
                                </div>
                                <>
                                    <div className="txtb">
                                        <label for="">ContactName:</label>
                                        <input type="text" name="contact_name" value={postData.contact_name} onChange={handleChangeData} placeholder="ContactName"></input>
                                    </div>
                                    <>
                                        <div className="txtb">
                                            <label for="">Address:</label>
                                            <input type="text" name="address" value={postData.address} onChange={handleChangeData} placeholder="Address"></input>
                                        </div>
                                        <>
                                            <div className="txtb">
                                                <label for="">City:</label>
                                                <input type="text" name="city" value={postData.city} onChange={handleChangeData} placeholder="City"></input>
                                            </div>
                                            <>
                                                <div className="txtb">
                                                    <label for="">PostalCode:</label>
                                                    <input type="text" name="postal_code" value={postData.postal_code} onChange={handleChangeData} placeholder="PostalCode"></input>
                                                </div>
                                                <>
                                                    <div className="txtb">
                                                        <label for="">Country:</label>
                                                        <input type="text" name="country" value={postData.country} onChange={handleChangeData} placeholder="Country"></input>
                                                    </div>
                                                    <>
                                                        <button className="btn btn-primary" name="btnSubmit" value="Submit" onClick={handleSubmit}><i class="fas fa-tools"></i>Submit</button>
                                                    </>
                                                </>
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
export default Customer;
