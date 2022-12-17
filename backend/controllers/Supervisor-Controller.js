const Supervisor=require('../models/Supervisor');

//supervisor adding function
const addSupervisor = async (req, res) => {
    
        try {
            const { name, email, contact, password,role,gender,description } = req.body;
            console.log(req.body.name);
            const supervisors = new Supervisor({
                    name,
                    email,
                    contact,
                    password,
                    role,
                    gender,
                    description
            });
            console.log('Supervisors',supervisors.name);
            await supervisors.save();
            return res.status(200).json(supervisors);

        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Internal server error' });
        }

}

//supervisor getting function
const getSupervisor = async (req, res) => {
    let supervisor;
    try {
        supervisor = await Supervisor.find();
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
        supervisor = await Supervisor.findOne({ _id: req.params.id });
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
        supervisor = await Supervisor.findById(req.params.id,
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
        return res.status(200).json({ persons });
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

exports.addSupervisor=addSupervisor;
exports.getSupervisor=getSupervisor;
exports.getOneSupervisor=getOneSupervisor;
exports.updateSupervisor=updateSupervisor;
exports.deleteSupervisor=deleteSupervisor;

