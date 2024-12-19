import { CircularProgress } from '@mui/material'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

function LoadMoreComp ({ LoadMore }) {
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) {
      LoadMore()
    }
  }, [inView])
  return (
    <>
      <div ref={ref}>
        <CircularProgress />
      </div>
    </>
  )
}

export default LoadMoreComp
