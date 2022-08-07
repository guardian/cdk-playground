exports.main = async () => {
  const message = `Welcome to CDK-Playground. The time is ${new Date().toString()}`;
  console.log(message);
  return {
    statusCode: 200,
    body: message
  };
};
