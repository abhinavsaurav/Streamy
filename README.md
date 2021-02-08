# Streamy

## Description

---

Streamy is a React web application which allows you to Stream from your device or able to view the different Stream from another person. It allows you to do CRUD operation on the streams that are linked with that account.

It is built using React.js and redux. It makes use of json-server for holding the streaming data and a rtmpserver (node-media-server) which is used for running up the various streams from a persons computer to the application.

---

## How to set-up?

---

To set-up streamy we need to set up the client, server and rtmpserver folder

1. Open the terminal/command prompt and navigate to each of the three folder (client, server and rtmpserver)

2. Run the following commands in each folder

   ```
   - npm install

   - npm start
   ```

3. After you did this you need to set-up your streaming software(eg: OBS, etc ) with the following details

   - URL - rtmp://localhost/live

   - Key - stream-id (when you click a link the number after the /streams/stream-id)

   - Start the stream

4. Now go to your stream page if its now displaying your stream, refresh the stream if not working and it should work

---

Enjoy Streaming your content.

Thanks for reading :smiley: !!
