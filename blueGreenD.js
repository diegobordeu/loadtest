const requestify = require('requestify');
const codemaster = require('codemaster');

const url = 'http://rick3.us-east-1.elasticbeanstalk.com';



const requestTimeout = (i) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(i + ", code: Timeout");
    }, 500);
  });
}

const checkError = (i) => {
  return new Promise((resolve, reject) => {
    requestify.get(url).then((body) => {
      // return resolve(`OK ${body.getcode()}]`);
      return resolve(`${i}, code: ` + 'ok');
    }).catch(err => {
      if(err.getCode() === 404) return resolve(`not found ${i}`);
      if(err.getCode() === 403) return resolve(`FORBIDDEN, ${i}`);
      return resolve(`${i}, code: ${err.getCode()}`);
    });
  })  
}


const ping = (i) => {
  const promises = [];
  promises.push(checkError(i));
  promises.push(requestTimeout(i));
  return Promise.race(promises);
}




// const request = async (num) => {
//   const promises = [];
//   for (let i = 0; i < num; i++) {
//     promises.push(checkError(i));
//   }
//   return codemaster.utils.Promise.doAll(promises);
// }

const request = async (num) => {
  const responses = [];
  for (let i = 0; i < num; i++) {
    await delay(100);
    const res = await ping(i);
    console.log(res);
    responses.push(res);
  }
  return responses;
}

const delay = (num) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, num);
  })
}

request(2000).then((succes) => {
  console.log("==================================================");
 console.log(succes);
}).catch((err) => {
  console.log({err});
})


