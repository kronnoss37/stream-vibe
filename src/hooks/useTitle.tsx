import { useEffect } from 'react'

const baseTitle = 'Stream Vibe'

const useTitle = (title: string) => {
  useEffect(() => {
    document.title = title ? `${baseTitle} | ${title}` : baseTitle
  }, [title])
}

export default useTitle
