import React, { useEffect } from "react";
import CRUD from "../sevices/crud";
import {
  useHistory
} from "react-router-dom";


function FormInput({ onSubmitSuccess, item, RetrieveAllEmployees }) {
    // onSubmitSuccess <=> onUpdateSuccess
    let history = useHistory();
    const [postData, setpostData] = React.useState({
        EmployeeID:"",
        LastName:"",
        FirstName:"",
        BirthDate:"",
        Photo:"",
        Notes:"",
    })

    useEffect(() => {
        if (item)
            setpostData(item);
    }, [item])

    function handleChangeData(e) {

        setpostData({ ...postData, [e.target.name]: e.target.value });
    }

    function handleOnclickSubmit(e) {
            CRUD.createEmployees(postData).then((res) => {
                RetrieveAllEmployees();
                const check = res.data.message === "Insert successfully";
                onSubmitSuccess(check);
            }).catch((err) => {
                console.log(err)
                alert(err.response.data.message || "Unknown Message");
            });
        // }

        console.log("Data : " + JSON.stringify(postData));
    }

    function handleOnSubmit(e) {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <input style={{height:"50px", borderRadius:"5px", textAlign: "center", width: "15%"}} type="text" name="LastName" value={postData.LastName} onChange={handleChangeData} placeholder="LastName"></input>
            <input style={{height:"50px", borderRadius:"5px", textAlign: "center", width: "15%"}} type="text" name="FirstName" value={postData.FirstName} onChange={handleChangeData} placeholder="FirstName"></input>
            <input style={{height:"50px", borderRadius:"5px", textAlign: "center", width: "15%"}} type="text" name="BirthDate" value={postData.BirthDate} onChange={handleChangeData} placeholder="BirthDate"></input>
            <input style={{height:"50px", borderRadius:"5px", textAlign: "center", width: "15%"}} type="text" name="Photo" value={postData.Photo} onChange={handleChangeData} placeholder="Photo"></input>
            <input style={{height:"50px", borderRadius:"5px", textAlign: "center", width: "15%"}} type="text" name="Notes" value={postData.Notes} onChange={handleChangeData} placeholder="Notes"></input>
            {/* <input style={{height:"50px", borderRadius:"5px", textAlign: "center", width: "13%"}} type="text" name="Description" value={postData.Description} onChange={handleChangeData} placeholder="Description"></input> */}
            <button style={{height:"50px", borderRadius:"5px", textAlign: "center", width: "25%", backgroundColor: "rgb(230, 120, 116)"}} name="btnSubmit" onClick={handleOnclickSubmit}>Thêm</button>
        </form>
    )
}

export default FormInput;