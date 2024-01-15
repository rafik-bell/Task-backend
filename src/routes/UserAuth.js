
const express =require("express")
const router = express.Router()
const controller =require("../controllers/UserAuthcontroler")

router.post('/',controller.psot_login)
router.post('/reg',controller.psot_register)


module.exports = router

