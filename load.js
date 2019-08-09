const requestify = require('requestify');
const codemaster = require('codemaster');

const url = 'http://rick3.us-east-1.elasticbeanstalk.com/login';



const checkError = (i) => {
  return new Promise((resolve, reject) => {
    requestify.get('http://rick3.us-east-1.elasticbeanstalk.com/login').then(() => {
      // console.log('aca');
      // console.log({a});
      resolve('ok');
    }).catch(err => {
      if(err.getCode() === 404) return resolve(`not found ${i}`);
      if(err.getCode() === 403) return reject(`FORBIDDEN, ${i}`);
      reject(`${i}, code: ${err.getCode()}`);
    });
  })  
}




const request = async (num) => {
  const promises = [];
  for (let i = 0; i < num; i++) {
    promises.push(checkError(i));
  }
  return codemaster.utils.Promise.doAll(promises);
}


request(100).then((succes) => {
 console.log(succes);
}).catch((err) => {
  console.log({err});
})


