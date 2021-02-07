//const password = require('/home/pi/mylab/ip/password.conf')
const password = require('./password.conf')
const rc4 = require("crypto-js/rc4");
const fs = require('fs');
const request = require('request');

function genInfo(txt, password){
  const text = rc4.encrypt(txt, password, { iv: '' })
  const content = "window.content='" + text+"'";
  console.log(content)
  fs.writeFile(__dirname+'/content.js', content, function(err){
    if(err) {
      console.error(err);
      return
    }
  });
}

// genInfo('127.0.0.1', password.password)
const startTime = new Date().getMinutes();
function genData(){
  request.get({
    url:'http://ip.tool.lu'
  }, function(err, response, body){
    genInfo(body, password.password + new Date().getHours());
    // console.log(body)
  })
}

setInterval(genData, 1000 * 60 * 10)
genData();

console.log(new Date())


// export default content
