const {globalvalsetter}=require("./firstcry");

module.exports.nestedfn=(num)=>{
    if(num==0){
        globalvalsetter();
    }else{
        console.log("keep it running")
    }
}