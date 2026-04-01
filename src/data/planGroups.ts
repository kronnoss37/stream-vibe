import { type PlanCardType } from '@/components/PlanCard'

type PlanItem = {
  id: number
} & PlanCardType

type PlanGroup = {
  id: string
  title: 'Monthly' | 'Yearly'
  items: PlanItem[]
}

export const planGroups: PlanGroup[] = [
  {
    id: 'plan-monthly',
    title: 'Monthly',
    items: [
      {
        id: 1,
        title: 'Basic Plan',
        description:
          'Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.',
        price: '$9.99',
        period: 'month',
      },
      {
        id: 2,
        title: 'Standard Plan',
        description:
          'Access to a wider selection of movies and shows, including most new releases and exclusive content',
        price: '$12.99',
        period: 'month',
      },
      {
        id: 3,
        title: 'Premium Plan',
        description:
          'Access to a widest selection of movies and shows, including all new releases and Offline Viewing',
        price: '$14.99',
        period: 'month',
      },
    ],
  },
  {
    id: 'plan-yearly',
    title: 'Yearly',
    items: [
      {
        id: 1,
        title: 'Basic Plan',
        description:
          'Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.',
        price: '$99.99',
        period: 'year',
      },
      {
        id: 2,
        title: 'Standard Plan',
        description:
          'Access to a wider selection of movies and shows, including most new releases and exclusive content',
        price: '$129.99',
        period: 'year',
      },
      {
        id: 3,
        title: 'Premium Plan',
        description:
          'Access to a widest selection of movies and shows, including all new releases and Offline Viewing',
        price: '$149.99',
        period: 'year',
      },
    ],
  },
]
