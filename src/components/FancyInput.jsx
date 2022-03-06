import { useRef, useImperativeHandle, forwardRef } from 'react'

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