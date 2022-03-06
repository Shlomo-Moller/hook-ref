# [Functional](# 'Function-components - based') React Refs

Markdown, and some code examples, about React refs, from a function component prespective.

## Table of Contents
* [`useRef`](#useref)
* [Refs and the DOM](#refs-and-the-dom)
* [Store Values](#store-values)
* [Measure DOM Node](#measure-dom-node)

<br />
<br />
<br />

## `useRef`

Docs: https://reactjs.org/docs/hooks-reference.html#useref

```jsx
const ref = useRef(initialValue)
```

* `ref.current` is initialized to `initialValue`.
* `ref`'ll persist for the full lifetime of the component.
* Passing a ref object as a
[DOM element's `ref` attribute](#refs-and-the-dom)
(e.g., `<div ref={ref} />`) sets its `.current` to the corresponding DOM node whenever that node changes:

	```jsx
	const TextInputWithFocusButton = () => {

		const inputRef = useRef(null)

		return (
			<>
				<input type='text' ref={inputRef} />
				<button onClick={() => inputRef.current.focus()}>
					Focus on input
				</button>
			</>
		)
	}
	```

* However, it can
[hold any mutable value](#store-values).
* Unlike creating a `{ current: ... }` object yourself, `useRef()` gives the same ref object on every render.
* `useRef` doesn’t notify on content change.
Mutating `.current` won’t cause a re-render.
To run some code on a ref attach/detach (to/from a DOM node), you may want to use a
[callback ref](#measure-dom-node)
instead.



<br />

## Refs and the DOM

Docs: https://reactjs.org/docs/refs-and-the-dom.html

<br />

## Store Values

Docs: https://reactjs.org/docs/hooks-faq.html#is-there-something-like-instance-variables

The `useRef()` Hook isn’t just for DOM refs.
The “ref” object is a generic container whose current property is mutable and can hold any value, similar to an instance property on a class.

### Example:

```jsx
const logTick = () => console.log('Tick')

const Timer = () => {

	const intervalRef = useRef()

	const start = () => intervalRef.current = setInterval(logTick, 1000)
	const stop = () => clearInterval(intervalRef.current)

	return (
		<>
			<button onClick={start}>Start</button>
			<button onClick={stop}>Stop</button>
		</>
	)
}
```

## Measure DOM Node

Docs: https://reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node
