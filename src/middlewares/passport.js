const passport=require('passport');
const LocalStatergy=require('passport-local').Strategy;
const User=require('../db/model/user')
const bcrypt=require('bcryptjs');

passport.use(
    new LocalStatergy(async (username,password,done)=>{
        try {
            let user=await User.findOne({username});
            if(user){
                user=user.toJSON();
                const checkpassword=await bcrypt.compare(password,user.password);
                if(checkpassword){
                    console.log("user Authenticated");
                    done(null,user);
                }else{
                    done(null,false);
                }
            }else{
                done(null,false);
            }
        } catch (error) {
            done(error)
        }
    })
);
module.exports=passport;
