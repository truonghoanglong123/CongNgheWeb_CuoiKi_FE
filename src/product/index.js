import CRUD from "../sevices/crud";
import React from "react";
import TableProduct from "./tableProduct";
import FormInput from "./FormInput";

function Home() {

    const [listProduct, setlistProduct] = React.useState([]);
    const [checkupdate, setCheckUpdate] = React.useState(false);
    const [currentItem, setCurrentItem] = React.useState(-1);
   
    const RetrieveAllProducts = () => {
        CRUD.getAll().then(res => {
            setlistProduct(res.data.data);
            setCheckUpdate(false);
        })
    }

    const onUpdateSucess = (status) => {
        setCheckUpdate(status);
    }

    React.useEffect(() => {
        RetrieveAllProducts();
        // setRes(resVal);
    }, [checkupdate]);



    return (
        <>
       <TableProduct items={listProduct} onDeleteSuccess={onUpdateSucess} setCurrentItem={setCurrentItem}/>
        
            
            {/* <FormInput onSubmitSuccess={onUpdateSucess} /> */}
            {/* <FormInput onSubmitSuccess={onUpdateSucess}  item={currentItem > -1 ? listCustomer[currentItem] : null}/> */}
        </>
    )
}

export default Home;