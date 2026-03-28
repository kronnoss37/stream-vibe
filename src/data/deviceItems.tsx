import type { DeviceCardType } from '@/components/DeviceCard'

type DeviceItem = {
  id: number
} & DeviceCardType

export const deviceItems: DeviceItem[] = [
  {
    id: 1,
    title: 'Smartphones',
    imgSrc: '/devices/1.svg',
    description:
      'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
  },
  {
    id: 2,
    title: 'Tablet',
    imgSrc: '/devices/2.svg',
    description:
      'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
  },
  {
    id: 3,
    title: 'Smart TV',
    imgSrc: '/devices/3.svg',
    description:
      'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
  },
  {
    id: 4,
    title: 'Laptops',
    imgSrc: '/devices/4.svg',
    description:
      'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
  },
  {
    id: 5,
    title: 'Gaming Consoles',
    imgSrc: '/devices/5.svg',
    description:
      'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
  },
  {
    id: 6,
    title: 'VR Headsets ',
    imgSrc: '/devices/6.svg',
    description:
      'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
  },
]
