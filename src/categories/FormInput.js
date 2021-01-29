import React, { useEffect } from "react";
import CRUD from "../sevices/crud";
import {
  useHistory
} from "react-router-dom";


function FormInput({ onSubmitSuccess, item, RetrieveAllCategories }) {
    // onSubmitSuccess <=> onUpdateSuccess
    let history = useHistory();
    const [postData, setpostData] = React.useState({
        CategoryID: "",
        CategoryName: "",
        Description: "",
    })

    useEffect(() => {
        if (item)
            setpostData(item);
    }, [item])

    function handleChangeData(e) {

        setpostData({ ...postData, [e.target.name]: e.target.value });
    }

    function handleOnclickSubmit(e) {
            CRUD.createCategories(postData).then((res) => {
                RetrieveAllCategories();
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
            <input style={{height:"50px", borderRadius:"5px", textAlign: "center", width: "30%"}} type="text" name="CategoryName" value={postData.CategoryName} onChange={handleChangeData} placeholder="CategoryName"></input>
            <input style={{height:"50px", borderRadius:"5px", textAlign: "center", width: "30%"}} type="text" name="Description" value={postData.Description} onChange={handleChangeData} placeholder="Description"></input>
            <button style={{height:"50px", borderRadius:"5px", textAlign: "center", width: "40%", backgroundColor: "rgb(230, 120, 116)"}} name="btnSubmit" onClick={handleOnclickSubmit}>Thêm</button>
        </form>
    )
}

export default FormInput;