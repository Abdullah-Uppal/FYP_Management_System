const { getMaxListeners } = require('../models/Person');
const Person = require('../models/Person');
const Supervisor = require('../models/Supervisor');
const { ObjectId } = require('mongodb');
const modelType = async (req, res) => {

  var _email = req.body.email;
  if (_email === "fypmanagement20@gmail.com"){
    return res.status(200).json({
      model: "Admin",
      id:ObjectId("adf203921d31"),
      username:"Admin"
    })
  }
  else{
    try {
      console.log('req.body.email',req.body.email)
      var person = await Person.findOne({ email: _email });
      console.log(person)

      if (person) {
        console.log('person',person)
        console.log('name', person.fname);
        return res.status(200).json({
          model: "Student",
          id:person._id,
          username: person.fname
        })
      }

      var advisor = await Supervisor.findOne({ email: _email });
      if (advisor) {
        return res.status(200).json({
          model: "Advisor",
          id:advisor._id,
          username:advisor.name

        })
      }

      return res.status(404).json({
        message: "No such email exists"
      })

    }
    catch(err) {
      res.status(500).json({
        'message': 'Internal server error!'
      })
    }
  }
}

exports.modelType = modelType;
