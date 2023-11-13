# Events in JavaScript


##Key points about events in JavaScript:

- Events are things that happen in the browser, like a click, keypress, mouseover, submit, focus, blur form submit. 
- When an event occurs, it fires or is dispatched.
- JavaScript can listen for events using event listeners and handle them using event handlers.
- Events allow JavaScript to react to user interactions and actions in the browser.
- Events are defined and implemented by the browser, not part of the core language.
- Different browsers may implement events differently, though they tend to follow standards.
- You can attach event handlers using:
  - Event handler properties 
  - addEventListener() - the preferred method
- An event listener waits for an event to fire, and an event handler is the function that responds to that event.
- The Event object provides information about the event, like what element fired it.
Event driven architecture refers to a software architecture paradigm where applications react to events or messages emitted from other applications instead of following a sequential flow of execution. This allows for loosely coupled and asynchronous communication between different components of the system.

##In JavaScript, event driven architecture is commonly implemented through:

- DOM events emitted by HTML elements
- The EventEmitter class in Node.js  
- Libraries like RxJS that provide Observables
- Frameworks like Redux that follow a publish-subscribe model

Some key concepts of event driven architecture in JavaScript are:

## Subjects and Observers

- Subjects (or event emitters) are objects that emit events. This includes HTML elements, EventEmitter instances, Observables, etc. 
- Observers (or event listeners) are functions that react to events emitted by subjects. This includes event listeners registered using `addEventListener()`, `.on()` handlers, Observable subscriptions, etc.
- Observers "observe" or listen for events from subjects and perform actions when those events occur.

## Events

- Events are notifications emitted by subjects when something of interest occurs.
- Events typically have a name (like "click" or "change") and optionally some data associated with them.
- Observers register themselves with subjects to listen for specific events using names.

## Event Loop

- In JavaScript, the event loop drives the execution of event handlers in response to events.
- When an event is emitted, it's added to the event queue.
- The event loop polls the event queue and executes the associated event handlers.
- This asynchronous, reactive nature allows for decoupled and parallel execution of event handlers.

