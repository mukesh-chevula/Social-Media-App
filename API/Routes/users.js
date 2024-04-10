const router = require('express').Router()

router.get('/',(req,res)=>{
    res.send("On users page")
})

module.exports = router