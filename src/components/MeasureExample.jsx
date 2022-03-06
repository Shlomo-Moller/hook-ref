import { useState, useCallback } from 'react'

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

export default MeasureExample