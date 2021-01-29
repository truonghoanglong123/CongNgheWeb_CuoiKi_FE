import { Route, Router, Switch } from 'react-router-dom';
import './App.css';
import ProductUpdate from "./productUpdate";
import CategoriesUpdate from "./categoriesUpdate";
import CustomerUpdate from "./customerUpdate";
import EmployeesUpdate from "./employeesUpdate";
import OrderDetailUpdate from "./orderDetailUpdate";
import ShipperUpdate from "./shipperUpdate";
import OrderUpdate from "./orderUpdate";
import SupplierUpdate from "./supplierUpdate";
import Home from "./trangchu";
import Product from "./product";
import Customer from "./customer";
import Categories from "./categories";
import Employees from "./employees";
import OrderDetail from "./orderDetail";
import Order from "./order";
import Shipper from "./shipper";
import Supplier from "./supplier";

  function App(){
    return (
     
      <>
        {/* <Example /> */}
        <Switch>
        <Route path="/supplier/update/:id" >
            <SupplierUpdate />
          </Route>
          <Route path="/supplier">
            <Supplier />
          </Route>
        <Route path="/shipper/update/:id" >
            <ShipperUpdate />
          </Route>
          <Route path="/shipper">
            <Shipper />
          </Route>
        <Route path="/order/update/:id" >
            <OrderUpdate />
          </Route>
          <Route path="/order">
            <Order />
          </Route>
        <Route path="/orderDetail/update/:id" >
            <OrderDetailUpdate />
          </Route>
          <Route path="/orderDetail">
            <OrderDetail />
          </Route>
        <Route path="/employees/update/:id" >
            <EmployeesUpdate />
          </Route>
          <Route path="/employees">
            <Employees />
          </Route>
        <Route path="/categories/update/:id" >
            <CategoriesUpdate />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
        <Route path="/customer/update/:id" >
            <CustomerUpdate />
          </Route>
          <Route path="/customer">
            <Customer />
          </Route>
          <Route path="/product/update/:id" >
            <ProductUpdate />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </>
    );
  }
  
  // <ul>
  //   {listCustomer.map((item, index) => (
  //     <li key={item.ProductID}>{item.ProductName}</li>
  //   ))}
  // </ul>
export default App;
