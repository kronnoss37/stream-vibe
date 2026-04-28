import { type CategoryCardType } from '@/components/CategoryCard'

import actionImgSrc_1 from '@/assets/images/categories/action/1.jpg'
import actionImgSrc_2 from '@/assets/images/categories/action/2.jpg'
import actionImgSrc_3 from '@/assets/images/categories/action/3.jpg'
import actionImgSrc_4 from '@/assets/images/categories/action/4.jpg'

import adventureImgSrc_1 from '@/assets/images/categories/adventure/1.jpg'
import adventureImgSrc_2 from '@/assets/images/categories/adventure/2.jpg'
import adventureImgSrc_3 from '@/assets/images/categories/adventure/3.jpg'
import adventureImgSrc_4 from '@/assets/images/categories/adventure/4.jpg'

import comedyImgSrc_1 from '@/assets/images/categories/comedy/1.jpg'
import comedyImgSrc_2 from '@/assets/images/categories/comedy/2.jpg'
import comedyImgSrc_3 from '@/assets/images/categories/comedy/3.jpg'
import comedyImgSrc_4 from '@/assets/images/categories/comedy/4.jpg'

import dramaImgSrc_1 from '@/assets/images/categories/drama/1.jpg'
import dramaImgSrc_2 from '@/assets/images/categories/drama/2.jpg'
import dramaImgSrc_3 from '@/assets/images/categories/drama/3.jpg'
import dramaImgSrc_4 from '@/assets/images/categories/drama/4.jpg'

import horrorImgSrc_1 from '@/assets/images/categories/horror/1.jpg'
import horrorImgSrc_2 from '@/assets/images/categories/horror/2.jpg'
import horrorImgSrc_3 from '@/assets/images/categories/horror/3.jpg'
import horrorImgSrc_4 from '@/assets/images/categories/horror/4.jpg'

type categoryItem = CategoryCardType & {
  id: number
}

export const categoryItems: categoryItem[] = [
  {
    id: 1,
    title: 'Action',
    images: [actionImgSrc_1, actionImgSrc_2, actionImgSrc_3, actionImgSrc_4],
  },
  {
    id: 2,
    title: 'Adventure',
    images: [
      adventureImgSrc_1,
      adventureImgSrc_2,
      adventureImgSrc_3,
      adventureImgSrc_4,
    ],
  },
  {
    id: 3,
    title: 'Comedy',
    images: [comedyImgSrc_1, comedyImgSrc_2, comedyImgSrc_3, comedyImgSrc_4],
  },
  {
    id: 4,
    title: 'Drama',
    images: [dramaImgSrc_1, dramaImgSrc_2, dramaImgSrc_3, dramaImgSrc_4],
  },
  {
    id: 5,
    title: 'Horror',
    images: [horrorImgSrc_1, horrorImgSrc_2, horrorImgSrc_3, horrorImgSrc_4],
  },

  {
    id: 6,
    title: 'Action 2',
    images: [actionImgSrc_1, actionImgSrc_2, actionImgSrc_3, actionImgSrc_4],
  },
  {
    id: 7,
    title: 'Adventure 2',
    images: [
      adventureImgSrc_1,
      adventureImgSrc_2,
      adventureImgSrc_3,
      adventureImgSrc_4,
    ],
  },
  {
    id: 8,
    title: 'Comedy 2',
    images: [comedyImgSrc_1, comedyImgSrc_2, comedyImgSrc_3, comedyImgSrc_4],
  },
  {
    id: 9,
    title: 'Drama 2',
    images: [dramaImgSrc_1, dramaImgSrc_2, dramaImgSrc_3, dramaImgSrc_4],
  },
  {
    id: 10,
    title: 'Horror 2',
    images: [horrorImgSrc_1, horrorImgSrc_2, horrorImgSrc_3, horrorImgSrc_4],
  },

  {
    id: 11,
    title: 'Action 3',
    images: [actionImgSrc_1, actionImgSrc_2, actionImgSrc_3, actionImgSrc_4],
  },
  {
    id: 12,
    title: 'Adventure 3',
    images: [
      adventureImgSrc_1,
      adventureImgSrc_2,
      adventureImgSrc_3,
      adventureImgSrc_4,
    ],
  },
  {
    id: 13,
    title: 'Comedy 3',
    images: [comedyImgSrc_1, comedyImgSrc_2, comedyImgSrc_3, comedyImgSrc_4],
  },
  {
    id: 14,
    title: 'Drama 3',
    images: [dramaImgSrc_1, dramaImgSrc_2, dramaImgSrc_3, dramaImgSrc_4],
  },
  {
    id: 15,
    title: 'Horror 3',
    images: [horrorImgSrc_1, horrorImgSrc_2, horrorImgSrc_3, horrorImgSrc_4],
  },

  {
    id: 16,
    title: 'Action 4',
    images: [actionImgSrc_1, actionImgSrc_2, actionImgSrc_3, actionImgSrc_4],
  },
  {
    id: 17,
    title: 'Adventure 4',
    images: [
      adventureImgSrc_1,
      adventureImgSrc_2,
      adventureImgSrc_3,
      adventureImgSrc_4,
    ],
  },
  {
    id: 18,
    title: 'Comedy 4',
    images: [comedyImgSrc_1, comedyImgSrc_2, comedyImgSrc_3, comedyImgSrc_4],
  },
  {
    id: 19,
    title: 'Drama 4',
    images: [dramaImgSrc_1, dramaImgSrc_2, dramaImgSrc_3, dramaImgSrc_4],
  },
  {
    id: 20,
    title: 'Horror 4',
    images: [horrorImgSrc_1, horrorImgSrc_2, horrorImgSrc_3, horrorImgSrc_4],
  },
]
