import CRUD from "../sevices/crud";
import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
function Home() {
    return (
        <>
            <div className="container">
                <nav>
                    <div className="logo">
                        TLH
                    </div>
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
                <div className="content">

                </div>


                <div className="footer">
                    <p>© 2021 Bản quyền thuộc Team LTH. No copy</p>
                </div>
            </div>
        </>
    )
}

export default Home;