import { useCallback } from 'react'

const CustomTextInput = () => {

	let inputRef

	const setInputRef = useCallback(element => inputRef = element, [])

	return (
		<>
			<input type='text' ref={setInputRef} />
			<button onClick={() => inputRef.focus()}>
				Focus text input
			</button>
		</>
	)
}

export default CustomTextInput