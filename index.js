require('dotenv').config({path: __dirname + '/.env'});
const PubNub = require('pubnub');

const pubnub = new PubNub({
  publishKey: process.env.pubnub_pub,
  subscribeKey: process.env.pubnub_sub,
  userId: "myUniqueUserId",
});

// add listener
// paste below "add listener" comment
const listener = {
    status: (statusEvent) => {
        if (statusEvent.category === "PNConnectedCategory") {
            console.log("Connected");
        }
    },
    message: (messageEvent) => {
        showMessage(messageEvent.message.description);
    },
    presence: (presenceEvent) => {
        // handle presence
    }
};
pubnub.addListener(listener);



// publish message
// paste below "publish message" comment
const publishMessage = async (message) => {
    // With the right payload, you can publish a message, add a reaction to a message,
    // send a push notification, or send a small payload called a signal.
    const publishPayload = {
        channel : "hello_world",
        message: {
            title: "greeting",
            description: message,
            usertype: "casual"
        }
    };
    await pubnub.publish(publishPayload);
}




// subscribe to a channel
// paste below "subscribe to a channel" comment
pubnub.subscribe({
    channels: ["hello_world"]
});





// built-in package for reading from stdin
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.setPrompt("");
readline.prompt();
// publish after hitting return
readline.on('line', (message) => {
    publishMessage(message).then(() => {
        readline.prompt();
    });
});

const showMessage = (msg) => {
    console.log("message: " + msg);
}