import React from "react";
import CRUD from "../sevices/crud";
import { useHistory, useParams, Link } from "react-router-dom";
import "./style.css";
import FormInput from "./FormInput";

function TableProduct({ items, checkUpdateSuccess, onDeleteSuccess, setCurrentItem, onSubmitSuccess }) {

    let history = useHistory();
    const [checkupdate, setCheckUpdate] = React.useState(false);
    const [postData, setpostData] = React.useState(null);

    function handleOnDelete(id) {
        CRUD.deleteOne(id).then((res) => {
            const checkDele = res.data.message === "Deleted successfully";
            onDeleteSuccess(checkDele);
        });
    }

    const onUpdateSucess = (status) => {
        setCheckUpdate(status);
    }

    function handleOnUpdate(id) {
        //  items[index]
        //   setCurrentItem(index);
        history.push(`/product/update/${id}`);
    }

    function handleOnXemHangTon() {
        CRUD.getOne().then((res) => {
            setpostData(res.data.data);
        })
            .catch(err => {
                console.log(err);
            })
    }

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
                <table style={{ width: "100%", border: "2px solid black" }}>
                    <tr>
                        <td>ProductID</td>
                        <td>ProductName</td>
                        <td>SupplierID</td>
                        <td>CategoryID</td>
                        <td>Unit</td>
                        <td>Price</td>
                        <td style={{ columnSpan: "2" }}></td>
                    </tr>
                    {items.map((item, index) => (
                        <tr key={index}>
                            <td>{item.ProductID}</td>
                            <td>{item.ProductName}</td>
                            <td>{item.SupplierID}</td>
                            <td>{item.CategoryID}</td>
                            <td>{item.Unit}</td>
                            <td>{item.Price}</td>
                            <td><button className="btn btn-danger" onClick={() => handleOnDelete(item.ProductID)}><i className="fas fa-trash">Delete</i></button></td>
                            <td><button className="btn btn-primary" onClick={() => handleOnUpdate(item.ProductID)}><i className="fas fa-tools">Update</i></button></td>

                        </tr>

                    ))}

                </table>
                <FormInput className="formInput" onSubmitSuccess={onUpdateSucess} />
                
            </div>
            <div>

            </div>
        </>

    );

}
export default TableProduct;
