exports.main = async () => {
  const message = `Welcome to CDK-Playground. The time is ${new Date().toString()}`;
  console.log(message);
  console.log("This is a plain text message");
  console.log({ message: "This is a JSON message with markers", status: 200 });
  console.log(JSON.stringify({ message: "This is a JSON.stringify message with markers", status: 200 }));
  console.log("This is a plain text message with markers", { status: 200 });
  return {
    statusCode: 200,
    body: message
  };
};
