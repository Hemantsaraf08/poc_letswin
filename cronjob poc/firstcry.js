const { CronJob } = require("cron");
const { nestedfn } = require("./otherfn");
let globalval=true;


var myjob = new CronJob('* * * * * *', function() {
  console.log('You will see this message every second');
  for(let i=10;i>=0;i--){
      nestedfn(i);
  }
});
if(globalval){
    myjob.start();
}else{
    myjob.stop();
}

module.exports.myjob=myjob;
module.exports.globalvalsetter=()=>globalval=!globalval;
console.log(this.globalvalsetter)