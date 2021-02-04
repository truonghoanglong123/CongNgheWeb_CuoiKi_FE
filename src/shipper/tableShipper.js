import React from "react";
import CRUD from "../sevices/crud";
import { useHistory, useParams, Link } from "react-router-dom";
import "./style.css";
import FormInput from "./FormInput";

function TableShipper({ items, checkUpdateSuccess, onDeleteSuccess, setCurrentItem , onSubmitSuccess, RetrieveAllShipper}) {

    let history = useHistory();
    const [checkupdate, setCheckUpdate] = React.useState(false);
    function handleOnDelete(id) {
        CRUD.deleteOneShipper(id).then((res) => {
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
        history.push(`/shipper/update/${id}`);
    }
    return (
        <>
            <div className="container-app">
                <nav>
                <div className="logo"><Link to="/">TLH</Link></div>
                    <label for="btn" class="icon">
                        <span className="fa fa-bars"></span>
                    </label>
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
                <table style={{ width: "100%", border:"2px solid black" }}>
                    <tr>
                        <td>ShipperID</td>
                        <td>ShipperName</td>
                        <td>Phone</td>
                    
                        <td style={{ columnSpan: "2" }}></td>
                    </tr>
                    {items && items.map((item, index) => {
                        console.log(item) 
                        return ((
                            <tr key={index}> 
                                <td>{item.ShipperID}</td>
                                <td>{item.ShipperName}</td>
                                <td>{item.Phone}</td>
                                <td><button className="btn btn-danger" onClick={() => handleOnDelete(item.ShipperID)}><i className="fas fa-trash">Delete</i></button></td>
                                <td><button className="btn btn-primary" onClick={() => handleOnUpdate(item.ShipperID)}><i className="fas fa-tools">Update</i></button></td>
                            </tr>
    
                        ))
                    })}
                    
          
                </table>
                <FormInput className="formInput" onSubmitSuccess={onUpdateSucess} RetrieveAllShipper={RetrieveAllShipper}/>
            </div>
        </>

    );

}
export default TableShipper;
