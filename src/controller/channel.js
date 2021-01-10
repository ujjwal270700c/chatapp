const Channel=require('../db/model/channel')

exports.createchannel=async(req,res)=>{
    const {channelname ,channelusers}=req.body;
    const channeladmin=req.user.username
    console.log(channeladmin);
    try {
        const newchannel= new Channel({
            channelname,
            channelusers,
            channeladmin:channeladmin
        })
        console.log(newchannel);
        const data = await newchannel.save();
        console.log(data);
        res.send(data)
    } catch (error) {
        res.status(500).json({msg:"Something went wrong"});
    }
   
}
