import { forwardRef } from 'react'

const FancyButton = forwardRef((props, ref) => (
	<button ref={ref} onClick={props.onClick}>
		{props.children}
	</button>
))

export default FancyButton