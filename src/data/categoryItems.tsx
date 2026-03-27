import { type CategoryCardType } from '@/sections/CategoryCard'

import action_1 from '@/assets/images/categories/action/1.jpg'
import action_2 from '@/assets/images/categories/action/2.jpg'
import action_3 from '@/assets/images/categories/action/3.jpg'
import action_4 from '@/assets/images/categories/action/4.jpg'

import adventure_2 from '@/assets/images/categories/adventure/1.jpg'
import adventure_3 from '@/assets/images/categories/adventure/2.jpg'
import adventure_1 from '@/assets/images/categories/adventure/3.jpg'
import adventure_4 from '@/assets/images/categories/adventure/4.jpg'

import comedy_1 from '@/assets/images/categories/comedy/1.jpg'
import comedy_2 from '@/assets/images/categories/comedy/2.jpg'
import comedy_3 from '@/assets/images/categories/comedy/3.jpg'
import comedy_4 from '@/assets/images/categories/comedy/4.jpg'

import drama_1 from '@/assets/images/categories/drama/1.jpg'
import drama_2 from '@/assets/images/categories/drama/2.jpg'
import drama_3 from '@/assets/images/categories/drama/3.jpg'
import drama_4 from '@/assets/images/categories/drama/4.jpg'

import horror_1 from '@/assets/images/categories/horror/1.jpg'
import horror_2 from '@/assets/images/categories/horror/2.jpg'
import horror_3 from '@/assets/images/categories/horror/3.jpg'
import horror_4 from '@/assets/images/categories/horror/4.jpg'

type categoryItem = CategoryCardType & {
  id: number
}

export const categoryItems: categoryItem[] = [
  {
    id: 1,
    title: 'Action',
    images: [action_1, action_2, action_3, action_4],
  },
  {
    id: 2,
    title: 'Adventure',
    images: [adventure_1, adventure_2, adventure_3, adventure_4],
  },
  {
    id: 3,
    title: 'Comedy',
    images: [comedy_1, comedy_2, comedy_3, comedy_4],
  },
  {
    id: 4,
    title: 'Drama',
    images: [drama_1, drama_2, drama_3, drama_4],
  },
  {
    id: 5,
    title: 'Horror',
    images: [horror_1, horror_2, horror_3, horror_4],
  },

  {
    id: 6,
    title: 'Action',
    images: [action_1, action_2, action_3, action_4],
  },
  {
    id: 7,
    title: 'Adventure',
    images: [adventure_1, adventure_2, adventure_3, adventure_4],
  },
  {
    id: 8,
    title: 'Comedy',
    images: [comedy_1, comedy_2, comedy_3, comedy_4],
  },
  {
    id: 9,
    title: 'Drama',
    images: [drama_1, drama_2, drama_3, drama_4],
  },
  {
    id: 10,
    title: 'Horror',
    images: [horror_1, horror_2, horror_3, horror_4],
  },

  {
    id: 11,
    title: 'Action',
    images: [action_1, action_2, action_3, action_4],
  },
  {
    id: 12,
    title: 'Adventure',
    images: [adventure_1, adventure_2, adventure_3, adventure_4],
  },
  {
    id: 13,
    title: 'Comedy',
    images: [comedy_1, comedy_2, comedy_3, comedy_4],
  },
  {
    id: 14,
    title: 'Drama',
    images: [drama_1, drama_2, drama_3, drama_4],
  },
  {
    id: 15,
    title: 'Horror',
    images: [horror_1, horror_2, horror_3, horror_4],
  },

  {
    id: 16,
    title: 'Action',
    images: [action_1, action_2, action_3, action_4],
  },
  {
    id: 17,
    title: 'Adventure',
    images: [adventure_1, adventure_2, adventure_3, adventure_4],
  },
  {
    id: 18,
    title: 'Comedy',
    images: [comedy_1, comedy_2, comedy_3, comedy_4],
  },
  {
    id: 19,
    title: 'Drama',
    images: [drama_1, drama_2, drama_3, drama_4],
  },
  {
    id: 20,
    title: 'Horror',
    images: [horror_1, horror_2, horror_3, horror_4],
  },
]
