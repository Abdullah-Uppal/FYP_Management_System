const Person=require('../models/Person');   
const Group = require('../models/Group');


//person adding function
const addPerson = async (req, res) => {
    
    try {
        const { fname, lname, regno,email, contact, gender, password } = req.body;
        
        const persons = new Person({
            fname,
            lname,
            regno,
            email,
            contact,
            gender,
            password
        });
        
        await persons.save();
        return res.status(200).json({message:"Person Added Successfully"});
       
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }

}


//person getting function
const getPerson = async (req, res) => {
    let person;
    try {
        person = await Person.find();
    } catch (error) {
        console.log(error);
    }

    if (!person) {
        return res.status(404).json({ message: 'No Persons found' });
    } else {
        return res.status(200).json({person});
    }
}
//
// one person getting function
const getOnePerson = async (req, res) => {
    let person;
    try {
        person = await Person.findOne({ _id: req.params.id });
    } catch (error) {
        console.log(error);
    }

    if (!person) {
        return res.status(404).json({ message: 'Not Found' });
    } else {
        return res.status(200).json(person);
    }
}

//person deleting function by id
const deletePerson = async (req, res,next) => {
    
    try {
        const _id  = req.params.id;
       
        const persons = await Person.findById(_id);
        if (!persons) {
            return res.status(404).json({ message: 'No Persons found' });
           
        }else
    {        await persons.remove();
    }
        return res.status(200).json({ message: 'Person Deleted Successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//person updating function by id
const updatePerson = async (req, res) => {
    try {
        const { id } = req.params;
        const { fname, lname, regno,email, contact, gender, password } = req.body;
        const persons = await Person.findByIdAndUpdate(id, {
                fname,
                lname,
                regno,
                email,
                contact,
                gender,
                password
            }, { new: true });
        return res.status(200).json({message:"Person Updated Successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const ungroupedStudents = async (req, res) => {
    var groups = await Group.find({});
    var persons = await Person.find();
    // console.log(persons);
    // console.log(groups);
    var grouped = groups.map(group => group.students).flat();
    grouped = grouped.map(group => group._id.toString());

    res.status(200).json(persons.filter(person => {

        const b = !grouped.includes(person._id.toString())
        return b;
    }))
}





exports.addPerson = addPerson;
exports.getPerson = getPerson;
exports.deletePerson = deletePerson;
exports.updatePerson = updatePerson;
exports.getOnePerson = getOnePerson
exports.ungroupedStudents = ungroupedStudents;
