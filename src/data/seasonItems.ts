import { type EpisodeCardProps } from '@/components/EpisodeCard'
import videoExampleSrc from '@/assets/videos/example.mp4'
import videoPosterSrc from '@/assets/images/video-posters/1.jpg'
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
          src: videoExampleSrc,
          poster: videoPosterSrc,
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
          src: videoExampleSrc,
          poster: videoPosterSrc,
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
          src: videoExampleSrc,
          poster: videoPosterSrc,
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
          src: videoExampleSrc,
          poster: videoPosterSrc,
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
          src: videoExampleSrc,
          poster: videoPosterSrc,
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
          src: videoExampleSrc,
          poster: videoPosterSrc,
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
          src: videoExampleSrc,
          poster: videoPosterSrc,
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
          src: videoExampleSrc,
          poster: videoPosterSrc,
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
          src: videoExampleSrc,
          poster: videoPosterSrc,
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
          src: videoExampleSrc,
          poster: videoPosterSrc,
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
          src: videoExampleSrc,
          poster: videoPosterSrc,
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
          src: videoExampleSrc,
          poster: videoPosterSrc,
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
          src: videoExampleSrc,
          poster: videoPosterSrc,
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
          src: videoExampleSrc,
          poster: videoPosterSrc,
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
          src: videoExampleSrc,
          poster: videoPosterSrc,
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
          src: videoExampleSrc,
          poster: videoPosterSrc,
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
          src: videoExampleSrc,
          poster: videoPosterSrc,
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
          src: videoExampleSrc,
          poster: videoPosterSrc,
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
          src: videoExampleSrc,
          poster: videoPosterSrc,
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
          src: videoExampleSrc,
          poster: videoPosterSrc,
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
          src: videoExampleSrc,
          poster: videoPosterSrc,
        },
      },
    ],
  },
]
