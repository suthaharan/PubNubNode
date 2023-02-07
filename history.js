require('dotenv').config({path: __dirname + '/.env'});
const PubNub = require('pubnub');

const pubnub = new PubNub({
  publishKey: process.env.pubnub_pub,
  subscribeKey: process.env.pubnub_sub,
  userId: "myUniqueUserId",
});


pubnub.fetchMessages(
    {
      channels: ["hello_world"],
      //end: '15343325004275466',
      count: 25 // default/max is 25 messages for multiple channels (up to 500)
    },
    function(status, response) {
        console.log("status: "+ status);    
        if(status.statusCode === 200){
            console.log(response.channels.hello_world);
        }
    }
  );