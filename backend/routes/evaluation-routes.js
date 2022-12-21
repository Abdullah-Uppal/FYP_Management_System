const express=require('express');
const router=express.Router();
const EvaluationController=require('../controllers/Evaluation-Controller');





//Evaluation
router.post('/addEvaluation',EvaluationController.addEvaluation);
router.get('/getEvaluation',EvaluationController.getEvaluation);
router.get('/getOneEvaluation/:id', EvaluationController.getOneEvaluation);
router.delete('/deleteEvaluation/:id',EvaluationController.deleteEvaluation);
router.put('/updateEvaluation/:id',EvaluationController.updateEvaluation);


module.exports=router;