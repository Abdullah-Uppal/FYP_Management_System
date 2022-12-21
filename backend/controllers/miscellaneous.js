const Person = require('../models/Person');
const Supervisor = require('../models/Supervisor');

const modelType = async (req, res) => {
  const _email = req.body.email;
  try {
    var person = await Person.find({ email: _email });
    if (person.length > 0) {
      return res.status(200).json({
        model: "Student"
      })
    }

    person = await Supervisor.find({ email: _email });
    if (person.length > 0) {
      return res.status(200).json({
        model: "Advisor"
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

exports.modelType = modelType;