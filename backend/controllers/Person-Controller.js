const Person=require('../models/Person');   

//person adding function
const addPerson = async (req, res) => {

    
    try {
        const { fname, lname, email, contact, gender, password } = req.body;
        console.log(req.body.lname);
        const persons = new Person({
            fname,
            lname,
            email,
            contact,
            gender,
            password
        });
        console.log('Persons',persons.lname);
        await persons.save();
        return res.status(200).json(persons);
       
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

//person deleitng function by id
const deletePerson = async (req, res,next) => {
    //console.log("ye chieh upon ko -->"+req.params.personid);
    try {
        const _id  = req.params.id;
        console.log("ye chieh upon ko -->"+_id);
        const persons = await Person.findById(_id);
        if (!persons) {
            return res.status(404).json({ message: 'No Persons found' });
            console.log("ise uper nhi chala");
        }else
    {        await persons.remove();
    }
        return res.status(200).json({ persons });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//person updating function by id
const updatePerson = async (req, res) => {
    try {
        const { id } = req.params;
        const { fname, lname, email, contact, gender, password } = req.body;
        const persons = await findByIdAndUpdate(id, {
                fname,
                lname,
                email,
                contact,
                gender,
                password
            }, { new: true });
        return res.status(200).json({ persons });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}





exports.addPerson = addPerson;
exports.getPerson = getPerson;
exports.deletePerson = deletePerson;
exports.updatePerson = updatePerson;
