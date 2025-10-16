import twilio from "twilio";
import config from "../config/config.js";

// Your AccountSID and Auth Token from console.twilio.com
const accountSid = config.twilio.accountSid;
const authToken = config.twilio.authToken;
async function sendSMS() {
  const client = twilio(accountSid, authToken);

  return await client.messages
    .create({
      body: "Hello from twilio-node",
      to: "+12345678901", // Text your number
      from: config.twilio.phoneNumber, // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));
}

export default sendSMS;
