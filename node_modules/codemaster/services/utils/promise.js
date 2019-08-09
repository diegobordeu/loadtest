const doAll = async (promises) => {
  promises = promises || [];
  const n = promises.length;
  const result = buildDoAllResult(n);
  const registerPromises = [];
  for (let i = 0; i < promises.length; i++) {
    const element = promises[i];
    registerPromises.push(registerInResult(element, i, result));
  }
  await Promise.all(registerPromises);
  return result;
};

const registerInResult = (element, i, result) => {
  return new Promise((resolve, reject) => {
    i = parseInt(i, 10);
    const badParams = !result || !result.resolve || !result.reject || Number.isNaN(i);
    if (badParams) return reject(new Error('Input not defined correctly'));
    return element.then((r) => {
      result.resolve[i] = r;
      resolve();
    }).catch((err) => {
      result.reject[i] = err;
      resolve();
    });
  });
};

const buildDoAllResult = (n) => {
  const result = {
    resolve: [],
    reject: [],
  };
  for (let i = 0; i < n; i++) {
    result.resolve.push(null);
    result.reject.push(null);
  }
  return result;
};


let publicMethods = {};

if (process.env.NODE_ENV === 'test') {
  publicMethods = {
    registerInResult,
    buildDoAllResult,
  };
}

publicMethods.doAll = doAll;

module.exports = publicMethods;
