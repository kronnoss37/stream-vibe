import { useState, useEffect } from 'react'
import MatchMedia from '@/constants/MatchMedia'

const useMatchMedia = () => {
  const [isMobileDevice, setIsMobileDevice] = useState(
    MatchMedia.mobile.matches,
  )

  useEffect(() => {
    const onMobileMatchMediaChange = (event: MediaQueryListEvent) => {
      setIsMobileDevice(event.matches)
    }

    MatchMedia.mobile.addEventListener('change', onMobileMatchMediaChange)

    return () => {
      MatchMedia.mobile.removeEventListener('change', onMobileMatchMediaChange)
    }
  }, [])

  return isMobileDevice
}

export default useMatchMedia
