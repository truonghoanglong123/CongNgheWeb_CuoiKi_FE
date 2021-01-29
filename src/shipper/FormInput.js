import React, { useEffect } from "react";
import CRUD from "../sevices/crud";
import {
  useHistory
} from "react-router-dom";


function FormInput({ onSubmitSuccess, item, RetrieveAllShipper }) {
    // onSubmitSuccess <=> onUpdateSuccess
    let history = useHistory();
    const [postData, setpostData] = React.useState({
        ShipperID:"",
        ShipperName:"",
        Phone:"",
       
    })

    useEffect(() => {
        if (item)
            setpostData(item);
    }, [item])

    function handleChangeData(e) {

        setpostData({ ...postData, [e.target.name]: e.target.value });
    }

    function handleOnclickSubmit(e) {
            CRUD.createShipper(postData).then((res) => {
                RetrieveAllShipper();
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
            <input style={{height:"50px", borderRadius:"5px", textAlign: "center", width: "33%"}} type="text" name="ShipperName" value={postData.ShipperName} onChange={handleChangeData} placeholder="ShipperName"></input>
            <input style={{height:"50px", borderRadius:"5px", textAlign: "center", width: "33%"}} type="text" name="Phone" value={postData.Phone} onChange={handleChangeData} placeholder="Phone"></input>
            <button style={{height:"50px", borderRadius:"5px", textAlign: "center", width: "34%", backgroundColor: "rgb(230, 120, 116)"}} name="btnSubmit" onClick={handleOnclickSubmit}>Thêm</button>
        </form>
    )
}

export default FormInput;