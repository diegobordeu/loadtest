
const newMessage = (code, message, fullMessage) => {
  return {
    code,
    message,
    fullMessage,
  };
};


const isError = (message) => {
  const { code } = message;
  return (code >= 400);
};

const isServerError = (message) => {
  const { code } = message;
  return (code === 500);
};

const isClientError = (message) => {
  return !isServerError(message);
};

module.exports = {
  new: newMessage,
  isError,
  isServerError,
  isClientError,
};
