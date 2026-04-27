import { useEffect, type RefObject } from 'react'

interface ClickOutsideProps {
  triggerRef: RefObject<HTMLDivElement | null>
  action: () => void
}

const useClickOutside = ({ triggerRef, action }: ClickOutsideProps) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        triggerRef.current &&
        !triggerRef.current?.contains(event.target as Node)
      ) {
        action()
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [triggerRef, action])
}

export default useClickOutside
