const baseUrl = "http://localhost:8080/api/logs"
import axios from "axios";
const Log = {};

Log.create = async (data) => {
  const urlSave = baseUrl+"/create"
  const res = await axios.post(urlSave,data)
  .then(response=>{ return response.data })
  .catch(error=>{ return error; })
  return res;
}

Log.list = async () => {

  const urlList = baseUrl+"/list"
  const res = await axios.get(urlList)
  .then(response=>{ return response.data })
  .catch(error=>{ return error; })
  return res;

}

Log.get = async (id) => {
  
  const data = {
    'id': id
  }

  const urlGet = baseUrl+"/get"
  const res = await axios.post(urlGet,data)
  .then(response=>{ return response.data })
  .catch(error=>{ return error; })
  return res;

}

Log.delete = async (id) => { 
console.log(id)
  const urlDelete = baseUrl+"/delete/"+id
  const res = await axios.delete(urlDelete)
  .then(response=>{ return response.data; })
  .catch(error=>{ return error; })
  return res;
  
}

export default Log;