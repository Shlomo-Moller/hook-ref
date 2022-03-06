import { useRef } from 'react'

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

export default Timer
