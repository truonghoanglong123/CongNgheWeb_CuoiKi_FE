import { useEffect, useState } from "react";
import { useHistory, useLocation, useParams, Link } from "react-router-dom";
import React from "react";
import CRUD from "../sevices/crud";
import "./styleProductUpdate.css";


function Product() {
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
    CRUD.updateOne(postData.ProductID, postData).then((res) => {
      history.goBack();
    }).catch((err) => {
      console.log(err);
    })

  }

  useEffect(() => {
    setLoading(true)
    CRUD.getOne(id)
      .then(res => {
        setpostData(res.data.data); setLoading(false)
      })
      .catch(err => {
        console.log(err); setLoading(false)
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
          <h1>Products</h1>
          {!loading ?
            postData ?
              <>
                <div className="txtb">
                  <label for="">ProductName:</label>
                  <input type="text" name="ProductName" value={postData.ProductName} onChange={handleChangeData} placeholder="ProductName"></input>
                </div>
                <>
                  <div className="txtb">
                    <label for="">SupplierID:</label>
                    <input type="text" name="SupplierID" value={postData.SupplierID} onChange={handleChangeData} placeholder="SupplierID"></input>
                  </div>
                  <>
                    <div className="txtb">
                      <label for="">CategoryID:</label>
                      <input type="text" name="CategoryID" value={postData.CategoryID} onChange={handleChangeData} placeholder="CategoryID"></input>
                    </div>
                    <>
                      <div className="txtb">
                        <label for="">Unit:</label>
                        <input type="text" name="Unit" value={postData.Unit} onChange={handleChangeData} placeholder="Unit"></input>
                      </div>
                      <>
                        <div className="txtb">
                          <label for="">Price:</label>
                          <input type="text" name="Price" value={postData.Price} onChange={handleChangeData} placeholder="Price"></input>
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
export default Product;
