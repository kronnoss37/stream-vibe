import useTitle from '@/hooks/useTitle'
import Support from '@/sections/Support'
import Questions from '@/sections/Questions'

const title = 'Support'

const SupportPage = () => {
  useTitle(title)

  return (
    <>
      <Support />
      <Questions />
    </>
  )
}

export default SupportPage
