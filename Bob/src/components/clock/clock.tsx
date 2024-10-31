'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const Time = dynamic(() => import('../clock/time'), { ssr: false })

type Props = {
  time: number
}

export const Clock = ({ time: initial }: Props) => {
  const [time, setTime] = useState(new Date(initial))

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="text-5xl tabular-nums">
      <Time time={time} />
    </div>
  )
}