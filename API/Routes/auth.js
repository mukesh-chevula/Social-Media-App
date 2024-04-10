const router = require('express').Router()

router.get('/',(req,res)=>{
    res.send("On Auth page")
})

module.exports = router