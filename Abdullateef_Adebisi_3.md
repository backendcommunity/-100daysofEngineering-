Events

Passing arguments and this to listeners
Asynchronous vs. synchronous
Handling events only once
Error events
Capture rejections of promises

Class: EventEmitter
Event: 'newListener'
Event: 'removeListener'
emitter.addListener(eventName, listener)
emitter.emit(eventName[, ...args])
emitter.eventNames()
emitter.getMaxListeners()
emitter.listenerCount(eventName[, listener])
emitter.listeners(eventName)
emitter.off(eventName, listener)
emitter.on(eventName, listener)
emitter.once(eventName, listener)
emitter.prependListener(eventName, listener)
emitter.prependOnceListener(eventName, listener)
emitter.removeAllListeners([eventName])
emitter.removeListener(eventName, listener)
emitter.setMaxListeners(n)
emitter.rawListeners(eventName)
emitter[Symbol.for('nodejs.rejection')](err, eventName[, ...args])
events.defaultMaxListeners
events.errorMonitor
events.getEventListeners(emitterOrTarget, eventName)
events.getMaxListeners(emitterOrTarget)
events.once(emitter, name[, options])
Awaiting multiple events emitted on process.nextTick()
events.captureRejections
events.captureRejectionSymbol
events.listenerCount(emitter, eventName)
events.on(emitter, eventName[, options])
events.setMaxListeners(n[, ...eventTargets])
events.addAbortListener(signal, listener)
Class: events.EventEmitterAsyncResource extends EventEmitter
new events.EventEmitterAsyncResource([options])
eventemitterasyncresource.asyncId
eventemitterasyncresource.asyncResource
eventemitterasyncresource.emitDestroy()
eventemitterasyncresource.triggerAsyncId
EventTarget and Event API
Node.js EventTarget vs. DOM EventTarget
NodeEventTarget vs. EventEmitter
Event listener
EventTarget error handling
Class: Event
event.bubbles
event.cancelBubble
event.cancelable
event.composed
event.composedPath()
event.currentTarget
event.defaultPrevented
event.eventPhase
event.initEvent(type[, bubbles[, cancelable]])
event.isTrusted
event.preventDefault()
event.returnValue
event.srcElement
event.stopImmediatePropagation()
event.stopPropagation()
event.target
event.timeStamp
event.type
Class: EventTarget
eventTarget.addEventListener(type, listener[, options])
eventTarget.dispatchEvent(event)
eventTarget.removeEventListener(type, listener[, options])
Class: CustomEvent
event.detail
Class: NodeEventTarget
nodeEventTarget.addListener(type, listener)
nodeEventTarget.emit(type, arg)
nodeEventTarget.eventNames()
nodeEventTarget.listenerCount(type)
nodeEventTarget.setMaxListeners(n)
nodeEventTarget.getMaxListeners()
nodeEventTarget.off(type, listener[, options])
nodeEventTarget.on(type, listener)
nodeEventTarget.once(type, listener)
nodeEventTarget.removeAllListeners([type])
nodeEventTarget.removeListener(type, listener[, options])
