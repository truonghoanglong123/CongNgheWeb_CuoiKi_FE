import CRUD from "../sevices/crud";
import React from "react";
import TableOrderDetail from "./tableOrderDetail";
import FormInput from "./FormInput";

function Home() {

    const [listOrderDetail, setlistOrderDetail] = React.useState([]);
    const [checkupdate, setCheckUpdate] = React.useState(false);
    const [currentItem, setCurrentItem] = React.useState(-1);
    const RetrieveAllOrderDetail = () => {
        CRUD.getAllOrderDetail().then(res => {
            setlistOrderDetail(res.data.data);
            setCheckUpdate(false);
        })
    }

    const onUpdateSucess = (status) => {
        setCheckUpdate(status);
    }

    React.useEffect(() => {
       
        RetrieveAllOrderDetail();
        // setRes(resVal);
    }, [checkupdate]);



    return (
        <>
       <TableOrderDetail items={listOrderDetail} onDeleteSuccess={onUpdateSucess} setCurrentItem={setCurrentItem} RetrieveAllOrderDetail={RetrieveAllOrderDetail}/>
        
            
            {/* <FormInput onSubmitSuccess={onUpdateSucess} /> */}
            {/* <FormInput onSubmitSuccess={onUpdateSucess}  item={currentItem > -1 ? listCustomer[currentItem] : null}/> */}
        </>
    )
}

export default Home;