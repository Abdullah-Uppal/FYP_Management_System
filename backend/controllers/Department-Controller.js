const Department=require('../models/Department');

//department adding function
const addDepartment = async (req, res) => {
    
        try {
           
            const { title } = req.body;
            const departments = new Department({
                    title
            });
            await departments.save();
            return res.status(200).json({message:'Ok'});

        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Internal server error' });
        }

}

//department getting function
const getDepartments = async (req, res) => {
    let department;
    try {
        department = await Department.find();
    } catch (error) {
        console.log(error);
    }

    if (!department) {
        return res.status(404).json({ message: 'No departments found' });
    } else {
        return res.status(200).json({department});
    }
}

// one department getting function
const getOneDepartment = async (req, res) => {
    let department;
    try {
        department = await Department.findOne({ _id: req.params.id });
    } catch (error) {
        console.log(error);
    }

    if (!department) {
        return res.status(404).json({ message: 'Not Found' });
    } else {
        return res.status(200).json(department);
    }
}

//department updating function
const updateDepartment = async (req, res) => {
    const { title} = req.body;
    let department;
    try {
        department = await Department.findByIdAndUpdate(req.params.id,
        {
            title
        }
        ,{ new: true });
        return res.status(200).json({ message:'Ok' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//department deleting function
const deleteDepartment = async (req, res) => {
    let department;
    try {
        department = await Department.findById(req.params.id);
        await department.remove();
        return res.status(200).json({ message: 'Department deleted' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

exports.addDepartment=addDepartment;
exports.getDepartments=getDepartments;
exports.getOneDepartment=getOneDepartment;
exports.updateDepartment=updateDepartment;
exports.deleteDepartment=deleteDepartment;

