import { useRef } from 'react'
import FancyButton from './FancyButton'

const FancyButtonParent = () => {
	const ref = useRef()

	return (
		<FancyButton ref={ref} onClick={() => console.log(ref.current)}>
			Click Me!
		</FancyButton>
	)
}

export default FancyButtonParent