// import {useContext} from "react";
// import { UserContext } from "../../api/userContext";
// import LogService from "../../../api/services/Log";

const controller = {}
// import model
var User = require('../models/User');


controller.create = async (req,res) => {
  // const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  try {

    const { username, password, role } = req.body;

    const data = await User.create({
      username: username,
      password: password,
      role: role
    })
    .then(function(data){
      const res = { success: true, data: data, message:"Saved success" }
      // const { username, userId } = useContext(UserContext);

      // // add log
      // LogService.create(
      //   {
      //     module_id: 1,
      //     module_name: 'User',
      //     user_id: userId,
      //     username: username,
      //     action: 'create',
      //     url: window.location.href,
      //     ip_address: ip,
      //   }
      // );

      return res;
    })
    .catch(error =>{
      const res = { success: false, message: error }
      return res;
    })

    res.json(data);

  } catch (e) {
    const data = { success: false, message: error }
    res.json(data);
  }

};

controller.list = async ( req, res ) => {

  try {

    const response = await User.findAll()
    .then(function(data){
      const res = { success: true, data: data }
      return res;
    })
    .catch(error => {
      const res = { success: false, message: error }
      return res;
    })

    res.json(response);

  } catch (e) {

    const response = { success: false, message: e }
    res.json(response)

  }
}

controller.get = async (req,res) => {

  try {

    const { id } = req.body;
    const response = await User.findOne({
        where: { id: id }
    })
    .then(function(data){ 
      const res = { success: true, data: data }
      return res;
    })
    .catch(error => {
      const res = { success: false, message: error }
      return res;
    })
    res.json(response);

  } catch (e) {

    const response = { success: false, message: e.message }
    res.json(response)

  }

}

controller.findOne = async (req,res) => {

  try {

    const { username } = req.body;
    const response = await User.findOne({
        where: { username: username }
    })
    .then(function(data){ 
      const res = { success: true, data: data }
      return res;
    })
    .catch(error => {
      const res = { success: false, message: error }
      return res;
    })
    res.json(response);

  } catch (e) {

    const response = { success: false, message: e.message }
    res.json(response)

  }

}

controller.update = async ( req, res ) =>{

  try {

    // parameter get id
    const { id } = req.params;
    // parameter POST
    const { username, password, role } = req.body;
    // Update data
    const response = await User.update({
      username:username,
      password:password,
      role:role
    },
    {
      where: { id: id }
    })
    .then( function(data){
      const res = { success: true, message:"User successfully updated" }
      return res;
    })
    .catch(error => {
      const res = { success: false, message: error.message }
      return res;
    })

    res.json(response);

  } catch (e) {

    const response = { success: false, message: e.message }
    res.json(response)

  }  
}

controller.delete = async (req, res) => {

  try {

    // parameter get id
    const { id } = req.params;
    // delete sequelize
    const response = await User.destroy({
      where: { id: id }
    })
    .then(function(data){
      const res = { success: true, deleted: data, message: "Customer succesfully deleted" }
      return res;
    })
    .catch(error=>{
      const res = { success: false, message: error.message }
      return res;
    })

    res.json(response);

  } catch (e) {

    const response = { success: false, message: e.message }
    res.json(response)

  }

}

module.exports = controller;
