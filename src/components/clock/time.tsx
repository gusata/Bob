"use client";

type Props = {
    time: Date
  }
  const Time = ({ time }: Props) => {
    return (
      <span>
        {time.toLocaleTimeString(undefined, {
          hour: '2-digit',
          minute: 'numeric',
          second: '2-digit'
        })}
      </span>
    )
  }
  
  export default Time