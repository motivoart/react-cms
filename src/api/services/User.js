const baseUrl = "http://localhost:8080/api/users"
import axios from "axios";
const User = {};

User.create = async (data) => {
  const urlSave = baseUrl+"/create"
  const res = await axios.post(urlSave,data)
  .then(response=>{ return response.data })
  .catch(error=>{ return error; })
  return res;
}

User.list = async () => {

  const urlList = baseUrl+"/list"
  const res = await axios.get(urlList)
  .then(response=>{ return response.data })
  .catch(error=>{ return error; })
  return res;

}

User.get = async (id) => {
  
  const data = {
    'id': id
  }

  const urlGet = baseUrl+"/get"
  const res = await axios.post(urlGet,data)
  .then(response=>{ return response.data })
  .catch(error=>{ return error; })
  return res;

}

User.findOne = async (username) => {
  
  const data = {
    'username': username
  }
  const urlGet = baseUrl+"/findOne";
  const res = await axios.post(urlGet,data)
  .then(response=>{ return response.data })
  .catch(error=>{ return error; })
  
  return res;

}

User.update = async (data) => {

  const urlUpdate = baseUrl+"/update/"+data.id
  const res = await axios.put(urlUpdate,data)
  .then(response=>{ return response.data; })
  .catch(error => { return error; })
  return res;

}

User.delete = async (id) => { 
console.log(id)
  const urlDelete = baseUrl+"/delete/"+id
  const res = await axios.delete(urlDelete)
  .then(response=>{ return response.data; })
  .catch(error=>{ return error; })
  return res;
  
}

export default User;