import axios from "axios";

// const getRequest = async () => {
//    let ReponsiveValue = {};
//    console.log("Data res: " + ReponsiveValue);
//    ReponsiveValue = await axios.get("http://localhost:5000/Products/all");
//    console.log("Data res: " + ReponsiveValue);
//    return ReponsiveValue;
// }

// export default getRequest;

export default axios.create({
   headers:{
      Accept: "application/json, text/plain, */*",
        "content-type":"application/json",
   } ,

}) ;  