import CRUD from "../sevices/crud";
import React from "react";
import TableSupplier from "./tableSupplier";
import FormInput from "./FormInput";

function Home() {

    const [listSupplier, setlistSupplier] = React.useState([]);
    const [checkupdate, setCheckUpdate] = React.useState(false);
    const [currentItem, setCurrentItem] = React.useState(-1);

    const RetrieveAllSupplier = () => {
        CRUD.getAllSupplier().then(res => {
            setlistSupplier(res.data.data);
            setCheckUpdate(false);
        })
    }

    const onUpdateSucess = (status) => {
        setCheckUpdate(status);
    }

    React.useEffect(() => {
        RetrieveAllSupplier();
        // setRes(resVal);
    }, [checkupdate]);



    return (
        <>
       <TableSupplier items={listSupplier} onDeleteSuccess={onUpdateSucess} setCurrentItem={setCurrentItem} RetrieveAllSupplier={RetrieveAllSupplier}/>
        
            
            {/* <FormInput onSubmitSuccess={onUpdateSucess} /> */}
            {/* <FormInput onSubmitSuccess={onUpdateSucess}  item={currentItem > -1 ? listCustomer[currentItem] : null}/> */}
        </>
    )
}

export default Home;