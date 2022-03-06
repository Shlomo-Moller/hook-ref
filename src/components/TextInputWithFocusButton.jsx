import { useRef } from 'react'

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

export default TextInputWithFocusButton
