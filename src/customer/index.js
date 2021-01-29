import CRUD from "../sevices/crud";
import React from "react";
import TableCustomer from "./tableCustomer";
import FormInput from "./FormInput";

function Home() {

    const [listCustomer, setlistCustomer] = React.useState([]);
    const [checkupdate, setCheckUpdate] = React.useState(false);
    const [currentItem, setCurrentItem] = React.useState(-1);

    const RetrieveAllCustomers = () => {
        CRUD.getAllCustomer().then(res => {
            setlistCustomer(res.data.data);
            setCheckUpdate(false);
        })
    }

    const onUpdateSucess = (status) => {
        setCheckUpdate(status);
    }

    React.useEffect(() => {
      RetrieveAllCustomers();
        // setRes(resVal);
    }, [checkupdate]);



    return (
        <>
        <TableCustomer items={listCustomer} onDeleteSuccess={onUpdateSucess} setCurrentItem={setCurrentItem} RetrieveAllCustomers={RetrieveAllCustomers}/>
            
            
        </>
    )
}

export default Home;