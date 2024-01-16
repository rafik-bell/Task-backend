const express =require("express")
const router = express.Router()
const controller =require("../controllers/Homeusercontroler")

router.post('/Task',controller.psot_Task)
router.post('/addTask',controller.psot_addTask)




module.exports = router