Events in backend

Event listening in backend typically involves listening to events or requests from clients, such as HTTP requests in web servers. Below is an example using Node.js and Express, a popular web framework for Node.js, to set up an HTTP server that listens for incoming requests:
First, ensure you have Node.js installed and create a new directory for your project. Then, initialize a new Node.js project by running npm init in the terminal to create a package.json file.
Next, install the Express framework by running npm install express.
Here's a basic code snippet to create an HTTP server that listens for GET requests using Express:

const express = require('express');
const app = express();
const port = 3000; // Choose a port number

// Route handler for GET request to the root URL
app.get('/', (req, res) => {
res.send('Hello, this is the backend server!');
});

// Start the server to listen on the specified port
app.listen(port, () => {
console.log(`Server is running on http://localhost:${port}`);
});

- app.get('/', ...) sets up a route handler for GET requests to the root URL ('/'). When a GET request is made to the root URL, it sends the response 'Hello, this is the backend server!'.
- app.listen(port, ...) starts the server and makes it listen on the specified port (in this case, port 3000).

Ways to create a listener in the frontend to listen to the backend

So, what you're looking for is the ability to send or "push" data from server to client.

The typical way of doing this is with a webSocket or socket.io connection. The client connects to the server and creates a lasting connection to the server. From then on, the server can just send data to the client over that connection whenever it wants to. The client then creates a listener on that connection so it will know when there is incoming data and it can then act accordingly based on the data.
webSocket is the standard built-into browsers that enables this type of function. socket.io is an additional client and server layer built on top of a webSocket connection that adds a lot of useful features such as auto-reconnection if the connection dies, a JSON message definition layer so you don't have to define your own data format, etc...
Here's how this would normally work:

1. When the server initializes, it creates a socket.io listener for incoming socket.io connections. webSocket/socket.io are built to "share" the same web server that you are using for loading web pages so you don't need an additional server or port.
2. When a page loads in the browser, some Javascript in that page creates a socket.io connection to the server.
3. The client then sets up listeners for whatever messages it wants to be able to act on.
4. Meanwhile, when the server gets something that it wants to send to the clients, it can either send that data to all currently connected clients or it can send it to only one specific client.
5. Then, the client's event listener will trigger and it will receive the data.
6. The client can then decide what it wants to do with the data, typically insert something in the current displayed page.
7. When the browser is changed to another web page, the socket.io connection will automatically be disconnected.

Key Differences:

- WebSocket is a communication protocol that provides full-duplex communication channels over a single connection, while Socket.IO is a library that facilitates real-time, event-based communication and is built on top of WebSocket.
- Socket.IO offers more than just WebSocket. It provides fallback mechanisms and additional features to ensure real-time communication, while WebSocket is a lower-level protocol focused on providing a full-duplex communication channel.
- WebSocket is a standardized protocol, while Socket.IO is a library providing additional functionalities and addressing browser compatibility issues related to WebSocket.
