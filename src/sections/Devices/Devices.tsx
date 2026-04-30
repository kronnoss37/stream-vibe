import Section from '@/layouts/Section'
import Grid from '@/components/Grid'
import DeviceCard from '@/components/DeviceCard'
import { deviceItems } from '@/data/deviceItems'

const Devices = () => {
  const data = {
    title: 'We Provide you streaming experience across various devices.',
    titleId: 'devices-title',
    description:
      'With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.',
  }

  return (
    <Section className="devices" {...data}>
      <div className="devices__body">
        <Grid columns={3}>
          {deviceItems.map(({ id, ...deviceItem }) => (
            <DeviceCard key={id} {...deviceItem} />
          ))}
        </Grid>
      </div>
    </Section>
  )
}

export default Devices
