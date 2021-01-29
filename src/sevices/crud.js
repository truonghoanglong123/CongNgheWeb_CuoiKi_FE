import HttpRequest from "./http-common";

const getAll = async () => {
    return await HttpRequest.get("http://localhost:5000/Products/all");
};

const create = (data) => {
    return HttpRequest.post("http://localhost:5000/Products", data);
};

const deleteOne = (id) => {
    return HttpRequest.delete(`http://localhost:5000/Products/${id}`);
};

const updateOne = (id, data) => {
    return HttpRequest.put(`http://localhost:5000/Products/${id}`, data);
};

const getOne = async (id) => {
    return await HttpRequest.get(`http://localhost:5000/products/get/${id}`);
};

//Customer=================================================================

const getAllCustomer = async () => {
    return await HttpRequest.get("http://localhost:5000/customer/all");
};

const createCustomer = (data) => {
    return HttpRequest.post("http://localhost:5000/customer", data);
};

const deleteOneCustomer = (id) => {
    return HttpRequest.delete(`http://localhost:5000/customer/${id}`);
};

const updateOneCustomer = (id, data) => {
    return HttpRequest.put(`http://localhost:5000/customer/${id}`, data);
};

const getOneCustomer = async (id) => {
    return await HttpRequest.get(`http://localhost:5000/customer/get/${id}`);
};

//Categori===========================================================

const getAllCategories = async () => {
    return await HttpRequest.get("http://localhost:5000/Categories/all");
};

const createCategories = (data) => {
    return HttpRequest.post("http://localhost:5000/Categories", data);
};

const deleteOneCategories= (id) => {
    return HttpRequest.delete(`http://localhost:5000/Categories/${id}`);
};

const updateOneCategories = (id, data) => {
    return HttpRequest.put(`http://localhost:5000/Categories/${id}`, data);
};

const getOneCategories = async (id) => {
    return await HttpRequest.get(`http://localhost:5000/Categories/get/${id}`);
};

//Employess===========================================================

const getAllEmployees = async () => {
    return await HttpRequest.get("http://localhost:5000/Employees/all");
};

const createEmployees = (data) => {
    return HttpRequest.post("http://localhost:5000/Employees", data);
};

const deleteOneEmployees= (id) => {
    return HttpRequest.delete(`http://localhost:5000/Employees/${id}`);
};

const updateOneEmployees = (id, data) => {
    return HttpRequest.put(`http://localhost:5000/Employees/${id}`, data);
};

const getOneEmployees = async (id) => {
    return await HttpRequest.get(`http://localhost:5000/Employees/get/${id}`);
};

//OrderDetail===========================================================

const getAllOrderDetail = async () => {
    return await HttpRequest.get("http://localhost:5000/OrderDetails/all");
};

const createOrderDetail = (data) => {
    return HttpRequest.post("http://localhost:5000/OrderDetails", data);
};

const deleteOneOrderDetail= (id) => {
    return HttpRequest.delete(`http://localhost:5000/OrderDetails/${id}`);
};

const updateOneOrderDetail = (id, data) => {
    return HttpRequest.put(`http://localhost:5000/OrderDetails/${id}`, data);
};

const getOneOrderDetail = async (id) => {
    return await HttpRequest.get(`http://localhost:5000/OrderDetails/get/${id}`);
};

//Order===========================================================

const getAllOrder = async () => {
    return await HttpRequest.get("http://localhost:5000/Orders/all");
};

const createOrder = (data) => {
    return HttpRequest.post("http://localhost:5000/Orders", data);
};

const deleteOneOrder= (id) => {
    return HttpRequest.delete(`http://localhost:5000/Orders/${id}`);
};

const updateOneOrder = (id, data) => {
    return HttpRequest.put(`http://localhost:5000/Orders/${id}`, data);
};

const getOneOrder = async (id) => {
    return await HttpRequest.get(`http://localhost:5000/Orders/get/${id}`);
};

//Shipper===========================================================

const getAllShipper = async () => {
    return await HttpRequest.get("http://localhost:5000/Shippers/all");
};

const createShipper = (data) => {
    return HttpRequest.post("http://localhost:5000/Shippers", data);
};

const deleteOneShipper = (id) => {
    return HttpRequest.delete(`http://localhost:5000/Shippers/${id}`);
};

const updateOneShipper = (id, data) => {
    return HttpRequest.put(`http://localhost:5000/Shippers/${id}`, data);
};

const getOneShipper = async (id) => {
    return await HttpRequest.get(`http://localhost:5000/Shippers/get/${id}`);
};

//Supplier===========================================================

const getAllSupplier = async () => {
    return await HttpRequest.get("http://localhost:5000/Suppliers/all");
};

const createSupplier = (data) => {
    return HttpRequest.post("http://localhost:5000/Suppliers", data);
};

const deleteOneSupplier = (id) => {
    return HttpRequest.delete(`http://localhost:5000/Suppliers/${id}`);
};

const updateOneSupplier = (id, data) => {
    return HttpRequest.put(`http://localhost:5000/Suppliers/${id}`, data);
};

const getOneSupplier = async (id) => {
    return await HttpRequest.get(`http://localhost:5000/Suppliers/get/${id}`);
};
export default {getAll, create, deleteOne, updateOne, getOne,
     createCustomer, deleteOneCustomer, updateOneCustomer,getOneCustomer, getAllCustomer,
     getAllCategories,  createCategories, deleteOneCategories, updateOneCategories, getOneCategories,
     getAllEmployees, createEmployees, deleteOneEmployees, updateOneEmployees, getOneEmployees,
     getAllOrderDetail, createOrderDetail, deleteOneOrderDetail, updateOneOrderDetail, getOneOrderDetail,
     getAllOrder, createOrder, deleteOneOrder, updateOneOrder, getOneOrder,
     getAllShipper, createShipper, deleteOneShipper, updateOneShipper, getOneShipper,
     getAllSupplier, createSupplier, deleteOneSupplier, updateOneSupplier, getOneSupplier,
    };

