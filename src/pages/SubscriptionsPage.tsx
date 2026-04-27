import useTitle from '@/hooks/useTitle'
import Plans from '@/sections/Plans'
import PlansComparison from '@/sections/PlansComparison'

const title = 'Subscriptions'

const SubscriptionsPage = () => {
  useTitle(title)

  return (
    <>
      <Plans />
      <PlansComparison />
    </>
  )
}

export default SubscriptionsPage
