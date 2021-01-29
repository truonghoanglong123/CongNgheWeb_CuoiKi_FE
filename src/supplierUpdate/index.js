import { useEffect, useState } from "react";
import { useHistory, useLocation, useParams, Link } from "react-router-dom";
import React from "react";
import CRUD from "../sevices/crud";
import "./style.css";


function Supplier() {
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
        CRUD.updateOneSupplier(postData.SupplierID, postData).then((res) => {
            history.goBack();
        }).catch((err) => {
            console.log(err);
        })

    }

    useEffect(() => {
        setLoading(true)
        CRUD.getOneSupplier(id)
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
                                    <label for="">SupplierName:</label>
                                    <input type="text" name="SupplierName" value={postData.SupplierName} onChange={handleChangeData} placeholder="SupplierName"></input>
                                </div>
                                <>
                                    <div className="txtb">
                                        <label for="">ContactName:</label>
                                        <input type="text" name="ContactName" value={postData.ContactName} onChange={handleChangeData} placeholder="ContactName"></input>
                                    </div>
                                    <>
                                        <div className="txtb">
                                            <label for="">Address:</label>
                                            <input type="text" name="Address" value={postData.Address} onChange={handleChangeData} placeholder="Address"></input>
                                        </div>
                                        <>
                                            <div className="txtb">
                                                <label for="">City:</label>
                                                <input type="text" name="City" value={postData.City} onChange={handleChangeData} placeholder="City"></input>
                                            </div>
                                            <>
                                                <div className="txtb">
                                                    <label for="">PostalCode:</label>
                                                    <input type="text" name="PostalCode" value={postData.PostalCode} onChange={handleChangeData} placeholder="PostalCode"></input>
                                                </div>
                                                <>
                                                    <div className="txtb">
                                                        <label for="">Country:</label>
                                                        <input type="text" name="Country" value={postData.Country} onChange={handleChangeData} placeholder="Country"></input>
                                                    </div>
                                                    <>
                                                        <div className="txtb">
                                                            <label for="">Phone:</label>
                                                            <input type="text" name="Phone" value={postData.Phone} onChange={handleChangeData} placeholder="Phone"></input>
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
export default Supplier;
