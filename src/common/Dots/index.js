"use client"

import { useEffect, useState } from "react"

const LoadingTextDots = () => {
    const [dotCount, setDotCount] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setDotCount(prev => (prev + 1) % 4) // cycles 0 → 3
        }, 500) // 500ms per step

        return () => clearInterval(interval)
    }, [])

    return (
        <div>
            Always exploring{".".repeat(dotCount)}
        </div>
    )
}

export default LoadingTextDots
