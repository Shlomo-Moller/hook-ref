# [Functional](# 'Function-components - based') React Refs

Markdown, and some code examples, about React refs, from a function component perspective.

<br />
<br />
<br />

## Table of Contents

* [`useRef`](#useref)
* [Refs and the DOM](#refs-and-the-dom)
* [Store Values](#store-values)
* [Measure DOM Node](#measure-dom-node)
* [Callback Refs](#callback-refs)
* [Setting a ref to a Function Component](#setting-a-ref-to-a-function-component)
* [`useImperativeHandle`](#useimperativehandle)
* [`forwardRef`](#reactforwardref)
* [Forwarding Refs](#forwarding-refs)

<br />
<br />
<br />

## `useRef`

Docs: https://reactjs.org/docs/hooks-reference.html#useref

[Go top](#functional-react-refs) |
[Previous](#table-of-contents) |
[Next](#refs-and-the-dom)

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
<br />
<br />

## Refs and the DOM

Docs: https://reactjs.org/docs/refs-and-the-dom.html

[Go top](#functional-react-refs) |
[Previous](#useref) |
[Next](#store-values)

To allow taking a `ref` to your **function component**, you can use
[`forwardRef`](#forwarding-refs)
(possibly in conjunction with
[`useImperativeHandle`](useimperativehandle)), or you can convert the component to a class.

You can, however, **use the `ref` attribute inside a function component** as long as you refer to a DOM element or a class component.

In rare cases, you might want to have access to a child’s DOM node.

If you use React 16.3 or higher, we recommend to use
[ref forwarding](#forwarding-refs)
for these cases.
**Ref forwarding lets components opt into exposing any child component’s ref as their own**.

If you use React 16.2 or lower, or if you need more flexibility than provided by ref forwarding, you can explicitly pass a ref as a **differently named** prop.

<br />
<br />
<br />

## Store Values

Docs: https://reactjs.org/docs/hooks-faq.html#is-there-something-like-instance-variables

[Go top](#functional-react-refs) |
[Previous](#refs-and-the-dom) |
[Next](#measure-dom-node)

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

<br />
<br />
<br />

## Measure DOM Node

Docs: https://reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node

[Go top](#functional-react-refs) |
[Previous](#store-values) |
[Next](#callback-refs)

We can use
[callback ref](#callback-refs).
React will call that callback whenever the ref gets attached to a different node:

```jsx
const MeasureExample = () => {
	
  const [height, setHeight] = useState(0)

  const measuredRef = useCallback(node => {
    if (node !== null)
      setHeight(node.getBoundingClientRect().height)
  }, [])

  return (
    <>
      <p ref={measuredRef}>Hi!</p>
      The above paragraph is {height}px tall
    </>
  )
}
```

<br />
<br />
<br />

## Callback Refs

Docs: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs

[Go top](#functional-react-refs) |
[Previous](#measure-dom-node) |
[Next](#setting-a-ref-to-a-function-component)

React also supports another way to set refs called “callback refs”, which gives more fine-grain control over when refs are set and unset.

The callback receives the React component instance or HTML DOM element, which can be stored and accessed elsewhere.

<br />
<br />
<br />

## Setting a ref to a Function Component

Docs: https://reactjs.org/docs/hooks-faq.html#can-i-make-a-ref-to-a-function-component

[Go top](#functional-react-refs) |
[Previous](#callback-refs) |
[Next](#useimperativehandle)

While you shouldn’t need this often, you may expose some imperative methods to a parent component with the
[`useImperativeHandle`](#useimperativehandle)
Hook.

<br />
<br />
<br />

## `useImperativeHandle`

Docs: https://reactjs.org/docs/hooks-reference.html#useimperativehandle

[Go top](#functional-react-refs) |
[Previous](#setting-a-ref-to-a-function-component) |
[Next](#reactforwardref)

```jsx
useImperativeHandle(ref, createHandle, [deps])
```

`useImperativeHandle` customizes the instance value that is exposed to parent components when using `ref`.
As always, imperative code using refs should be avoided in most cases.
`useImperativeHandle` should be used with [`forwardRef`](#reactforwardref):

`FancyInput.jsx`:
```jsx
const FancyInput = (props, ref) => {

  const inputRef = useRef()

  useImperativeHandle(
		ref,
		() => ({
			focus: () => inputRef.current.focus()
		})
	)

  return <input ref={inputRef} />
}

export default forwardRef(FancyInput)
```

`FancyInputParent.jsx`:
```jsx
const FancyInputParent = () => {

	const fancyInputRef = useRef()

	return (
		<>
			<FancyInput ref={fancyInputRef} />
			<button onClick={() => fancyInputRef.current.focus()}>
				Focus on FancyInput
			</button>
		</>
	)
}
```

<br />
<br />
<br />

## React.forwardRef

Docs: https://reactjs.org/docs/react-api.html#reactforwardref

[Go top](#functional-react-refs) |
[Previous](#useimperativehandle) |
[Next](#forwarding-refs)

<br />
<br />
<br />

## Forwarding Refs

Docs: https://reactjs.org/docs/forwarding-refs.html

[Go top](#functional-react-refs) |
[Previous](#reactforwardref)
