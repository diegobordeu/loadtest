

exports.notImplementedError = (callback) => {
  if (callback) return callback('TEST NOT IMPLEMENTED');
  throw new Error('TEST NOT IMPLEMENTED');
};

exports.unreachableError = (callback) => {
  if (callback) return callback('SHOULD NOT GET HERE');
  throw new Error('SHOULD NOT GET HERE');
};
