import { type EpisodeCardProps } from '@/components/EpisodeCard'

interface EpisodeItem extends EpisodeCardProps {
  id: number
}

interface seasonItem {
  id: number
  title: string
  subtitle: string
  episodes: EpisodeItem[]
}

export const seasonItems: seasonItem[] = [
  {
    id: 1,
    title: 'Season 01',
    subtitle: '9 Episodes',
    episodes: [
      {
        id: 1,
        number: '01',
        title: 'Chapter One : The Vanishing of Will Byers',
        description:
          'On his way from a friend’s house, young Will sees something terrifying . Nearby, a sinister secret lurks in the depths of a government lab.',
        duration: '49 min',
        video: {
          src: '/videos/example.mp4',
          poster: '/video-posters/1.jpg',
        },
      },
      {
        id: 2,
        number: '02',
        title: 'Chapter One : The Vanishing of Will Byers',
        description:
          'On his way from a friend’s house, young Will sees something terrifying . Nearby, a sinister secret lurks in the depths of a government lab.',
        duration: '49 min',
        video: {
          src: '/videos/example.mp4',
          poster: '/video-posters/1.jpg',
        },
      },
      {
        id: 3,
        number: '03',
        title: 'Chapter One : The Vanishing of Will Byers',
        description:
          'On his way from a friend’s house, young Will sees something terrifying . Nearby, a sinister secret lurks in the depths of a government lab.',
        duration: '49 min',
        video: {
          src: '/videos/example.mp4',
          poster: '/video-posters/1.jpg',
        },
      },
      {
        id: 4,
        number: '04',
        title: 'Chapter One : The Vanishing of Will Byers',
        description:
          'On his way from a friend’s house, young Will sees something terrifying . Nearby, a sinister secret lurks in the depths of a government lab.',
        duration: '49 min',
        video: {
          src: '/videos/example.mp4',
          poster: '/video-posters/1.jpg',
        },
      },
      {
        id: 5,
        number: '05',
        title: 'Chapter One : The Vanishing of Will Byers',
        description:
          'On his way from a friend’s house, young Will sees something terrifying . Nearby, a sinister secret lurks in the depths of a government lab.',
        duration: '49 min',
        video: {
          src: '/videos/example.mp4',
          poster: '/video-posters/1.jpg',
        },
      },
      {
        id: 6,
        number: '06',
        title: 'Chapter One : The Vanishing of Will Byers',
        description:
          'On his way from a friend’s house, young Will sees something terrifying . Nearby, a sinister secret lurks in the depths of a government lab.',
        duration: '49 min',
        video: {
          src: '/videos/example.mp4',
          poster: '/video-posters/1.jpg',
        },
      },
      {
        id: 7,
        number: '07',
        title: 'Chapter One : The Vanishing of Will Byers',
        description:
          'On his way from a friend’s house, young Will sees something terrifying . Nearby, a sinister secret lurks in the depths of a government lab.',
        duration: '49 min',
        video: {
          src: '/videos/example.mp4',
          poster: '/video-posters/1.jpg',
        },
      },
      {
        id: 8,
        number: '08',
        title: 'Chapter One : The Vanishing of Will Byers',
        description:
          'On his way from a friend’s house, young Will sees something terrifying . Nearby, a sinister secret lurks in the depths of a government lab.',
        duration: '49 min',
        video: {
          src: '/videos/example.mp4',
          poster: '/video-posters/1.jpg',
        },
      },
      {
        id: 9,
        number: '09',
        title: 'Chapter One : The Vanishing of Will Byers',
        description:
          'On his way from a friend’s house, young Will sees something terrifying . Nearby, a sinister secret lurks in the depths of a government lab.',
        duration: '49 min',
        video: {
          src: '/videos/example.mp4',
          poster: '/video-posters/1.jpg',
        },
      },
    ],
  },
  {
    id: 2,
    title: 'Season 02',
    subtitle: '5 Episodes',
    episodes: [
      {
        id: 1,
        number: '01',
        title: 'Chapter One : The Vanishing of Will Byers',
        description:
          'On his way from a friend’s house, young Will sees something terrifying . Nearby, a sinister secret lurks in the depths of a government lab.',
        duration: '49 min',
        video: {
          src: '/videos/example.mp4',
          poster: '/video-posters/1.jpg',
        },
      },
      {
        id: 2,
        number: '02',
        title: 'Chapter One : The Vanishing of Will Byers',
        description:
          'On his way from a friend’s house, young Will sees something terrifying . Nearby, a sinister secret lurks in the depths of a government lab.',
        duration: '49 min',
        video: {
          src: '/videos/example.mp4',
          poster: '/video-posters/1.jpg',
        },
      },
      {
        id: 3,
        number: '03',
        title: 'Chapter One : The Vanishing of Will Byers',
        description:
          'On his way from a friend’s house, young Will sees something terrifying . Nearby, a sinister secret lurks in the depths of a government lab.',
        duration: '49 min',
        video: {
          src: '/videos/example.mp4',
          poster: '/video-posters/1.jpg',
        },
      },
      {
        id: 4,
        number: '04',
        title: 'Chapter One : The Vanishing of Will Byers',
        description:
          'On his way from a friend’s house, young Will sees something terrifying . Nearby, a sinister secret lurks in the depths of a government lab.',
        duration: '49 min',
        video: {
          src: '/videos/example.mp4',
          poster: '/video-posters/1.jpg',
        },
      },
      {
        id: 5,
        number: '05',
        title: 'Chapter One : The Vanishing of Will Byers',
        description:
          'On his way from a friend’s house, young Will sees something terrifying . Nearby, a sinister secret lurks in the depths of a government lab.',
        duration: '49 min',
        video: {
          src: '/videos/example.mp4',
          poster: '/video-posters/1.jpg',
        },
      },
    ],
  },
  {
    id: 3,
    title: 'Season 03',
    subtitle: '7 Episodes',
    episodes: [
      {
        id: 1,
        number: '01',
        title: 'Chapter One : The Vanishing of Will Byers',
        description:
          'On his way from a friend’s house, young Will sees something terrifying . Nearby, a sinister secret lurks in the depths of a government lab.',
        duration: '49 min',
        video: {
          src: '/videos/example.mp4',
          poster: '/video-posters/1.jpg',
        },
      },
      {
        id: 2,
        number: '02',
        title: 'Chapter One : The Vanishing of Will Byers',
        description:
          'On his way from a friend’s house, young Will sees something terrifying . Nearby, a sinister secret lurks in the depths of a government lab.',
        duration: '49 min',
        video: {
          src: '/videos/example.mp4',
          poster: '/video-posters/1.jpg',
        },
      },
      {
        id: 3,
        number: '03',
        title: 'Chapter One : The Vanishing of Will Byers',
        description:
          'On his way from a friend’s house, young Will sees something terrifying . Nearby, a sinister secret lurks in the depths of a government lab.',
        duration: '49 min',
        video: {
          src: '/videos/example.mp4',
          poster: '/video-posters/1.jpg',
        },
      },
      {
        id: 4,
        number: '04',
        title: 'Chapter One : The Vanishing of Will Byers',
        description:
          'On his way from a friend’s house, young Will sees something terrifying . Nearby, a sinister secret lurks in the depths of a government lab.',
        duration: '49 min',
        video: {
          src: '/videos/example.mp4',
          poster: '/video-posters/1.jpg',
        },
      },
      {
        id: 5,
        number: '05',
        title: 'Chapter One : The Vanishing of Will Byers',
        description:
          'On his way from a friend’s house, young Will sees something terrifying . Nearby, a sinister secret lurks in the depths of a government lab.',
        duration: '49 min',
        video: {
          src: '/videos/example.mp4',
          poster: '/video-posters/1.jpg',
        },
      },
      {
        id: 6,
        number: '06',
        title: 'Chapter One : The Vanishing of Will Byers',
        description:
          'On his way from a friend’s house, young Will sees something terrifying . Nearby, a sinister secret lurks in the depths of a government lab.',
        duration: '49 min',
        video: {
          src: '/videos/example.mp4',
          poster: '/video-posters/1.jpg',
        },
      },
      {
        id: 7,
        number: '07',
        title: 'Chapter One : The Vanishing of Will Byers',
        description:
          'On his way from a friend’s house, young Will sees something terrifying . Nearby, a sinister secret lurks in the depths of a government lab.',
        duration: '49 min',
        video: {
          src: '/videos/example.mp4',
          poster: '/video-posters/1.jpg',
        },
      },
    ],
  },
]
