import { useEffect, useState } from "react";
import { useHistory, useLocation, useParams, Link } from "react-router-dom";
import React from "react";
import CRUD from "../sevices/crud";
import "./style.css";


function Employees() {
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
        CRUD.updateOneEmployees(postData.EmployeeID, postData).then((res) => {
            history.goBack();
        }).catch((err) => {
            console.log(err);
        })

    }

    useEffect(() => {
        setLoading(true)
        CRUD.getOneEmployees(id)
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
                                    <label for="">LastName:</label>
                                    <input type="text" name="LastName" value={postData.LastName} onChange={handleChangeData} placeholder="LastName"></input>
                                </div>
                                <>
                                    <div className="txtb">
                                        <label for="">FirstName:</label>
                                        <input type="text" name="FirstName" value={postData.FirstName} onChange={handleChangeData} placeholder="FirstName"></input>
                                    </div>
                                    <>
                                    <div className="txtb">
                                        <label for="">BirthDate:</label>
                                        <input type="text" name="BirthDate" value={postData.BirthDate} onChange={handleChangeData} placeholder="BirthDate"></input>
                                    </div>
                                    <>
                                    <div className="txtb">
                                        <label for="">Photo:</label>
                                        <input type="text" name="Photo" value={postData.Photo} onChange={handleChangeData} placeholder="Photo"></input>
                                    </div>
                                    <>
                                    <div className="txtb">
                                        <label for="">Notes:</label>
                                        <input type="text" name="Notes" value={postData.Notes} onChange={handleChangeData} placeholder="Notes"></input>
                                    </div>
                                        <>
                                            <button className="btn btn-primary" name="btnSubmit" value="Submit" onClick={handleSubmit}><i class="fas fa-tools"></i>Submit</button>
                                                
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
export default Employees;
