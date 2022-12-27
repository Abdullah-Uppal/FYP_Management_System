const Meeeting = require('../models/Meeeting');   

//meeting adding function
const addMeeeting = async (req, res) => {
    
    try {
        const { group, committee, location, time, happened } = req.body;
        
        const meeetings = new Meeeting({
            group,
            committee,
            location,
            time,
            happened
        });
        
        await meeetings.save();
        return res.status(200).json({message:"Meeeting Added Successfully"});
       
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }

}


//Meeeting getting function
const getMeeeting = async (req, res) => {
    let meeeting;
    try {
        meeeting = await Meeeting.find();
    } catch (error) {
        console.log(error);
    }

    if (!meeeting) {
        return res.status(404).json({ message: 'No Meeetings found' });
    } else {
        return res.status(200).json({meeeting});
    }
}
//
// one Meeeting getting function
const getOneMeeeting = async (req, res) => {
    let meeeting;
    try {
        meeeting = await Meeeting.findOne({ _id: req.params.id });
    } catch (error) {
        console.log(error);
    }

    if (!meeeting) {
        return res.status(404).json({ message: 'Not Found' });
    } else {
        return res.status(200).json(meeeting);
    }
}

//meeeting deleting function by id
const deleteMeeeting = async (req, res) => {
    
    try {
        const _id  = req.params.id;
       
        const meeetings = await Meeeting.findById(_id);
        if (!meeetings) {
            return res.status(404).json({ message: 'No Meeetings found' });
           
        }else
    {        await meeetings.remove();
    }
        return res.status(200).json({ message: 'Meeeting Deleted Successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//meeeting updating function
const updateMeeeting = async (req, res) => {
    const { group, committee, location, time, happened } = req.body;
    let meeeting;
    try {
        meeeting = await Meeeting.findByIdAndUpdate(
        req.params.id,
        {
            group,
            committee,
            location,
            time,
            happened
        },
        { new: true }
      );
      return res.status(200).json({ message: "Ok" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };





exports.addMeeeting = addMeeeting;
exports.getMeeeting = getMeeeting;
exports.deleteMeeeting = deleteMeeeting;
exports.updateMeeeting = updateMeeeting;
exports.getOneMeeeting = getOneMeeeting
