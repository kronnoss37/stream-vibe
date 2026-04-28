import type { DeviceCardType } from '@/components/DeviceCard'

import deviceImgSrc_1 from '@/assets/images/devices/1.svg'
import deviceImgSrc_2 from '@/assets/images/devices/2.svg'
import deviceImgSrc_3 from '@/assets/images/devices/3.svg'
import deviceImgSrc_4 from '@/assets/images/devices/4.svg'
import deviceImgSrc_5 from '@/assets/images/devices/5.svg'
import deviceImgSrc_6 from '@/assets/images/devices/6.svg'

type DeviceItem = {
  id: number
} & DeviceCardType

export const deviceItems: DeviceItem[] = [
  {
    id: 1,
    title: 'Smartphones',
    imgSrc: deviceImgSrc_1,
    description:
      'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
  },
  {
    id: 2,
    title: 'Tablet',
    imgSrc: deviceImgSrc_2,
    description:
      'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
  },
  {
    id: 3,
    title: 'Smart TV',
    imgSrc: deviceImgSrc_3,
    description:
      'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
  },
  {
    id: 4,
    title: 'Laptops',
    imgSrc: deviceImgSrc_4,
    description:
      'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
  },
  {
    id: 5,
    title: 'Gaming Consoles',
    imgSrc: deviceImgSrc_5,
    description:
      'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
  },
  {
    id: 6,
    title: 'VR Headsets ',
    imgSrc: deviceImgSrc_6,
    description:
      'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
  },
]
