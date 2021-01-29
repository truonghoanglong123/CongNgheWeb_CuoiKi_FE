import CRUD from "../sevices/crud";
import React from "react";
import TableEmployees from "./tableEmployees";
import FormInput from "./FormInput";

function Home() {

    const [listEmployees, setlistEmployees] = React.useState([]);
    const [checkupdate, setCheckUpdate] = React.useState(false);
    const [currentItem, setCurrentItem] = React.useState(-1);
    
    const RetrieveAllEmployees = () => {
        CRUD.getAllEmployees().then(res => {
            setlistEmployees(res.data.data);
            setCheckUpdate(false);
        })
    }

    const onUpdateSucess = (status) => {
        setCheckUpdate(status);
    }

    React.useEffect(() => {
        RetrieveAllEmployees();
        // setRes(resVal);
    }, [checkupdate]);



    return (
        <>
         <TableEmployees items={listEmployees} onDeleteSuccess={onUpdateSucess} setCurrentItem={setCurrentItem} RetrieveAllEmployees={RetrieveAllEmployees}/>
        
            
            
        </>
    )
}

export default Home;