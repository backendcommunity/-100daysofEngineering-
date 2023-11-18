# -100daysofEngineering-
Repo for Mastering Backend BootCamp  and  #100daysOfEngineering 

# Event In NodeJs

Virtually everything in NodeJs is event driven, And even when a server is
created using NodeJs there is an event listener passed into the server that
keeps listener for request on the port associated with the server. There is
even something also called Event Loop in NodeJs which is very instrumental
to how NodeJs works.

Node.js has a built-in module, called "Events", where you can create-, fire-,
and listen for- your own events.To include the built-in Events module the
require() method can be used. In addition, all event properties and methods
are an instance of an EventEmitter object. To be able to access these properties
and methods, create an EventEmitter object.

The main methods associated with the Event object are the on(), emit().
The on() method is used to create an event listener usually consisting
of a callback function and the emit() method is used to trigger an event.

