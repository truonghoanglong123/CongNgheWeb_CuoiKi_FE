import CRUD from "../sevices/crud";
import React from "react";
import TableCustomer from "./tableCategories";
import FormInput from "./FormInput";

function Home() {

    const [listCategories, setlistCategories] = React.useState([]);
    const [checkupdate, setCheckUpdate] = React.useState(false);
    const [currentItem, setCurrentItem] = React.useState(-1);

    const RetrieveAllCategories = () => {
        CRUD.getAllCategories().then(res => {
            setlistCategories(res.data.data);
            setCheckUpdate(false);
        })
    }

    const onUpdateSucess = (status) => {
        setCheckUpdate(status);
    }

    React.useEffect(() => {
        RetrieveAllCategories();
        // setRes(resVal);
    }, [checkupdate]);



    return (
        <>
            <TableCustomer items={listCategories} onDeleteSuccess={onUpdateSucess} setCurrentItem={setCurrentItem} RetrieveAllCategories={RetrieveAllCategories}/>
            {/* <FormInput onSubmitSuccess={onUpdateSucess} /> */}
            {/* <FormInput onSubmitSuccess={onUpdateSucess}  item={currentItem > -1 ? listCustomer[currentItem] : null}/> */}
        </>
    )
}

export default Home;