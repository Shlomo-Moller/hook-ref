import { useRef } from 'react'
import FancyInput from './FancyInput'

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

export default FancyInputParent