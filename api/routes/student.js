const express = require('express');

const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        msg:"This is Student get Request"
    })

})

router.post('/',(req,res,next)=>{
    res.status(200).json({
        msg:"This is Student post Request"
    })

})

module.exports = router;