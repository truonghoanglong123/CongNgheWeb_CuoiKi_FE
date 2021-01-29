import CRUD from "../sevices/crud";
import React from "react";
import TableOrder from "./tableOrder";
import FormInput from "./FormInput";

function Home() {

    const [listOrder, setlistOrder] = React.useState([]);
    const [checkupdate, setCheckUpdate] = React.useState(false);
    const [currentItem, setCurrentItem] = React.useState(-1);
   
    const RetrieveAllOrder = () => {
        CRUD.getAllOrder().then(res => {
            setlistOrder(res.data.data);
            setCheckUpdate(false);
        })
    }

    const onUpdateSucess = (status) => {
        setCheckUpdate(status);
    }

    React.useEffect(() => {
        RetrieveAllOrder();
        // setRes(resVal);
    }, [checkupdate]);



    return (
        <>
        <TableOrder items={listOrder} onDeleteSuccess={onUpdateSucess} setCurrentItem={setCurrentItem} RetrieveAllOrder={RetrieveAllOrder}/>
        
        </>
    )
}

export default Home;