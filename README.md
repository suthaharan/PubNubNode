#### PubNub Integration

The app does a few things with PubNub:

* configures a PubNub connection
* adds the status, message, and presence event listeners
* subscribes to a channel
* publishes a message

* Integration steps
  ```
    $ touch README.md
    $ touch .gitignore
    $ touch .env
    $ npm init
    $ npm install dotenv --save
    $ npm install pubnub --save
  ```
* Open up two terminals and in each terminal run 'node index'. Initially, you will get a message called "connected". Now, you can communicate message between these two terminals. 

* Documentation: https://www.pubnub.com/docs/sdks/javascript
* A message can be any type of JSON-serializable data (such as objects, arrays, integers, and strings) that is smaller than 32 KiB. PubNub will, in most cases, deliver your message to its intended recipients in fewer than 100 ms regardless of their location.
* You can subscribe to more than one channel with a single subscribe call.
* You can store messages with this service. The Storage service allows you to persist all messages as they're published. The primary use case is to allow a device to retrieve messages that were published while that device was offline, but there are many other use cases as well. You can configure **message retention** for several different limited periods or for unlimited time. Refer: https://www.pubnub.com/docs/general/storage