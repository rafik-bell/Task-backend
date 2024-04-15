const express =require("express")
const router = express.Router()
const controller =require("../controllers/dashbordusercontroler")

router.post('/task_last_15_day',controller.task_last_15_day,)
router.post('/filter_task',controller.filter_task)
router.post('/complition_rate_inmonth',controller.complition_rate_inmonth)




module.exports = router