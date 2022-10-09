const controller = {}
// import model
var Log = require('../../logs/models/Log');


controller.create = async (req,res) => {

  try {

    const { module_id, module_name, user_id, username, action, date, url, ip_address } = req.body;

    const data = await Log.create({
      module_id: module_id,
      module_name: module_name,
      user_id: user_id,
      username: username,
      action: action,
      date: date,
      url: url,
      ip_address: ip_address,
    })
    .then(function(data){
      const res = { success: true, data: data, message:"Saved success" }
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

    const response = await Log.findAll()
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
    const response = await Log.findOne({
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

controller.delete = async (req, res) => {

  try {

    // parameter get id
    const { id } = req.params;
    // delete sequelize
    const response = await Log.destroy({
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
