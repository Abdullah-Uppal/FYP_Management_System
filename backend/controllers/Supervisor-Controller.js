const Committee = require('../models/Committee');
const Supervisor=require('../models/Supervisor');

//supervisor adding function
const addSupervisor = async (req, res) => {
    
        try {
           
            const { name, email, contact, password,role,gender,description } = req.body;
            const supervisors = new Supervisor({
                    name,
                    email,
                    contact,
                    password,
                    role,
                    gender,
                    description
            });
            await supervisors.save();
            return res.status(200).json({message:'Ok'});

        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Internal server error' });
        }

}

//supervisor getting function
const getSupervisor = async (req, res) => {
    let supervisor;
    try {
        supervisor = await Supervisor.find().select('_id name email role gender');
    } catch (error) {
        console.log(error);
    }

    if (!supervisor) {
        return res.status(404).json({ message: 'No Supervisors found' });
    } else {
        return res.status(200).json({supervisor});
    }
}

// one supervisor getting function
const getOneSupervisor = async (req, res) => {
    let supervisor;
    try {
        supervisor = await Supervisor.findOne({ _id: req.params.id }).select('_id name email role gender');
    } catch (error) {
        console.log(error);
    }

    if (!supervisor) {
        return res.status(404).json({ message: 'Not Found' });
    } else {
        return res.status(200).json(supervisor);
    }
}

//supervisor updating function
const updateSupervisor = async (req, res) => {
    const { name, email, contact, password,role,gender,description } = req.body;
    let supervisor;
    try {
        supervisor = await Supervisor.findByIdAndUpdate(req.params.id,
        {
            name,
            email,
            contact,
            password,
            role,
            gender,
            description

        }
        ,{ new: true });
        return res.status(200).json({ message:'Ok' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//supervisor deleting function
const deleteSupervisor = async (req, res) => {
    let supervisor;
    try {
        supervisor = await Supervisor.findById(req.params.id);
        await supervisor.remove();
        return res.status(200).json({ message: 'Supervisor deleted' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const notIncommittee = async (req, res) => {
    var committees = await Committee.find({});
    var advisors = await Supervisor.find();
    var l = committees.map(committee => committee.members).flat();
    l = l.map(group => group._id.toString());

    res.status(200).json(advisors.filter(advisor => {
        const b = !l.includes(advisor._id.toString())
        return b;
    }).map(advisor => {
        return {
        _id: advisor._id,
        name: advisor.name,
        role: advisor.role
    }}))
}

exports.addSupervisor=addSupervisor;
exports.getSupervisor=getSupervisor;
exports.getOneSupervisor=getOneSupervisor;
exports.updateSupervisor=updateSupervisor;
exports.deleteSupervisor=deleteSupervisor;
exports.notIncommittee = notIncommittee;

