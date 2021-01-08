import React, { useState, useEffect, useRef } from "react"

export function useInterval(callback, delay, pause) {
  const savedCallback = useRef()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    const timer = setInterval(() => {
      savedCallback.current()
    }, delay)
    if (pause) clearInterval(timer)
    return () => clearInterval(timer)
  }, [delay, pause])
}
