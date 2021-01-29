import CRUD from "../sevices/crud";
import React from "react";
import TableShipper from "./tableShipper";
import FormInput from "./FormInput";

function Home() {

    const [listShipper, setlistShipper] = React.useState([]);
    const [checkupdate, setCheckUpdate] = React.useState(false);
    const [currentItem, setCurrentItem] = React.useState(-1);
   
    const RetrieveAllShipper = () => {
        CRUD.getAllShipper().then(res => {
            setlistShipper(res.data.data);
            setCheckUpdate(false);
        })
    }

    const onUpdateSucess = (status) => {
        setCheckUpdate(status);
    }

    React.useEffect(() => {
        RetrieveAllShipper();
        // setRes(resVal);
    }, [checkupdate]);



    return (
        <>
        <TableShipper items={listShipper} onDeleteSuccess={onUpdateSucess} setCurrentItem={setCurrentItem} RetrieveAllShipper={RetrieveAllShipper}/>
        
            
            {/* <FormInput onSubmitSuccess={onUpdateSucess} /> */}
            {/* <FormInput onSubmitSuccess={onUpdateSucess}  item={currentItem > -1 ? listCustomer[currentItem] : null}/> */}
        </>
    )
}

export default Home;