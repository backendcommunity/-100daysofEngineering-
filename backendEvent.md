# Events in Backend

In programming, an event is an action or occurrence that is detected by the program and triggers a response or behavior. There are several types of events in programming, including:

1. User interface events: These events are triggered by user actions such as clicking a button, typing into a text box, or selecting an item from a list.

2. System events: These events are triggered by system actions such as a change in the system clock or a change in the system configuration.

3. Network events: These events are triggered by network actions such as a connection being established or data being received.

4. Device events: These events are triggered by device actions such as a keyboard or mouse input, or a sensor reading.

4. Application events: These events are triggered by application-specific actions such as the completion of a task or the loading of a file.

5. Time-based events: These events are triggered based on a specified time or interval, such as a scheduled task or a timer event.

6. Error events: These events are triggered when an error or exception occurs in the program.

* Events are used in programming to enable programs to respond to user actions or changes in the system. For example, when a user clicks a button on a graphical user interface (GUI), an event is generated. The program can then respond to the event by executing a specific set of instructions, such as opening a new window or updating the data displayed on the screen.

Event-driven programming is a popular paradigm used in many programming languages, such as Java, JavaScript, and Python. In event-driven programming, the program responds to events by executing specific functions or blocks of code. This allows programs to be more interactive and responsive, and it enables developers to create complex and dynamic applications.

Events are also used in event-based systems, such as message queues and event-driven architectures. In these systems, events are used to communicate between different components or services, enabling them to work together and respond to changes in the system in real-time.

Overall, events are an important concept in programming, enabling programs to be interactive, responsive, and adaptable to changes in the system or user input.


# EVENT-DRIVEN ARCHITECTURE (EDA)
* Event-driven architecture (EDA) is a software design pattern that enables an organization to detect “events” or important business moments (such as a transaction, site visit, shopping cart abandonment, etc) and act on them in real time or near real time.

* Event-driven architecture is often referred to as “asynchronous” communication. This means that the sender and recipient don’t have to wait for each other to move onto their next task. Systems are not dependent on that one message. For instance, a telephone call is considered synchronous or more along the lines of the traditional “request/response” architecture. Someone calls you and asks you to do something, the requestor waits while the responder completes the task, and then both parties hang up. An asynchronous example would be text messaging. You send a message and in some cases, you don't even know who you are sending it to or if anyone’s listening, but you are not waiting for a response.

# What is an Event?
An event is defined as a change of state of some key business system. For instance, somebody buys a product, someone else checks in for a flight or a bus is late arriving somewhere. And if one thinks about it, events exist everywhere and are constantly happening, no matter what industry. They are pervasive across any business. This includes anything that creates a message by being produced, published, detected, or consumed is considered an event. The event is separate from the message, because while the event is the occurrence, the message is the traveling notification that relays the occurrence. In event-driven architecture, an event will likely trigger one or more actions or processes in response to its occurrence. An example of an event might include:

Request to reset a password
A package arrived was delivered to its destination
A grocery warehouse updates its inventory
An unauthorized access attempt was denied

Each of these events is likely to trigger one or more actions or processes in response. One response might be simply to log the event for monitoring purposes. Others might be:

An email to reset the password is sent to the customer
The sales ticket is closed
An order for more lettuce (or whatever materials are running low) is placed
An account is locked and security personnel are notified
With event-driven architecture, when an event notification is sent, the system captures that something happened like a change in state has occurred and waits to send the reply to whoever requests it, whenever they request it. The application that received that message can either respond or wait to respond until the change in state has occurred that it is waiting for.

Applications built around an event-driven architecture enable more agile, scalable, contextual, and responsive digital business applications.

## How does Event-driven architecture work?
The components of an event-driven architecture can include three parts: producer, consumer, broker. The broker can be optional, particularly when you have a single producer and a single consumer that are in direct communication with each other and the producer just sends the events to the consumer. An example would be a producer that is sending only to a database or data warehouse so the events are collected and stored for analysis. Most commonly in enterprises, you have multiple sources sending out all types of events with one or more consumers interested in some or all of those events.

Let’s look at an example. If you are a retailer, you might be collecting all of the purchases that are happening at all of your stores all over the world. You are feeding them into your event-driven architecture that is watching for fraud, sending them to a credit card processor or whatever actions need to happen next. For a manufacturer, you have all kinds of data coming off your equipment that is telling you facts like temperature and pressure so you can monitor these events in real time and take actions like predict failures or schedule maintenance, depending on what the data is telling you.
