import { categoryItems } from '@/data/categoryItems'
import { type CollectionItemType } from '@/sections/Collections/components/CollectionItem'

interface CollectionItem extends CollectionItemType {
  id: number
}

interface CollectionGroup {
  id: string
  title: 'Movies' | 'Shows'
  items: CollectionItem[]
}

export const collectionGroups: CollectionGroup[] = [
  {
    id: 'collection-movies',
    title: 'Movies',
    items: [
      {
        id: 1,
        title: 'Our Genres',
        categoryItems,
      },
      {
        id: 2,
        title: 'Popular Top 10 In Genres',
        categoryItems: [
          {
            id: 1,
            title: 'Action',
            badge: 'Top 10 In',
            images: [
              'src/assets/images/categories/action/1.jpg',
              'src/assets/images/categories/action/2.jpg',
              'src/assets/images/categories/action/3.jpg',
              'src/assets/images/categories/action/4.jpg',
            ],
          },
          {
            id: 2,
            title: 'Adventure',
            badge: 'Top 10 In',
            images: [
              'src/assets/images/categories/adventure/1.jpg',
              'src/assets/images/categories/adventure/2.jpg',
              'src/assets/images/categories/adventure/3.jpg',
              'src/assets/images/categories/adventure/4.jpg',
            ],
          },
          {
            id: 3,
            title: 'Comedy',
            badge: 'Top 10 In',
            images: [
              'src/assets/images/categories/comedy/1.jpg',
              'src/assets/images/categories/comedy/2.jpg',
              'src/assets/images/categories/comedy/3.jpg',
              'src/assets/images/categories/comedy/4.jpg',
            ],
          },
          {
            id: 4,
            title: 'Drama',
            badge: 'Top 10 In',
            images: [
              'src/assets/images/categories/drama/1.jpg',
              'src/assets/images/categories/drama/2.jpg',
              'src/assets/images/categories/drama/3.jpg',
              'src/assets/images/categories/drama/4.jpg',
            ],
          },

          {
            id: 5,
            title: 'Action 2',
            badge: 'Top 10 In',
            images: [
              'src/assets/images/categories/action/1.jpg',
              'src/assets/images/categories/action/2.jpg',
              'src/assets/images/categories/action/3.jpg',
              'src/assets/images/categories/action/4.jpg',
            ],
          },
          {
            id: 6,
            title: 'Adventure 2',
            badge: 'Top 10 In',
            images: [
              'src/assets/images/categories/adventure/1.jpg',
              'src/assets/images/categories/adventure/2.jpg',
              'src/assets/images/categories/adventure/3.jpg',
              'src/assets/images/categories/adventure/4.jpg',
            ],
          },
          {
            id: 7,
            title: 'Comedy 2',
            badge: 'Top 10 In',
            images: [
              'src/assets/images/categories/comedy/1.jpg',
              'src/assets/images/categories/comedy/2.jpg',
              'src/assets/images/categories/comedy/3.jpg',
              'src/assets/images/categories/comedy/4.jpg',
            ],
          },
          {
            id: 8,
            title: 'Drama 2',
            badge: 'Top 10 In',
            images: [
              'src/assets/images/categories/drama/1.jpg',
              'src/assets/images/categories/drama/2.jpg',
              'src/assets/images/categories/drama/3.jpg',
              'src/assets/images/categories/drama/4.jpg',
            ],
          },

          {
            id: 9,
            title: 'Action 3',
            badge: 'Top 10 In',
            images: [
              'src/assets/images/categories/action/1.jpg',
              'src/assets/images/categories/action/2.jpg',
              'src/assets/images/categories/action/3.jpg',
              'src/assets/images/categories/action/4.jpg',
            ],
          },
          {
            id: 10,
            title: 'Adventure 3',
            badge: 'Top 10 In',
            images: [
              'src/assets/images/categories/adventure/1.jpg',
              'src/assets/images/categories/adventure/2.jpg',
              'src/assets/images/categories/adventure/3.jpg',
              'src/assets/images/categories/adventure/4.jpg',
            ],
          },
          {
            id: 11,
            title: 'Comedy 3',
            badge: 'Top 10 In',
            images: [
              'src/assets/images/categories/comedy/1.jpg',
              'src/assets/images/categories/comedy/2.jpg',
              'src/assets/images/categories/comedy/3.jpg',
              'src/assets/images/categories/comedy/4.jpg',
            ],
          },
          {
            id: 12,
            title: 'Drama 3',
            badge: 'Top 10 In',
            images: [
              'src/assets/images/categories/drama/1.jpg',
              'src/assets/images/categories/drama/2.jpg',
              'src/assets/images/categories/drama/3.jpg',
              'src/assets/images/categories/drama/4.jpg',
            ],
          },

          {
            id: 13,
            title: 'Action 4',
            badge: 'Top 10 In',
            images: [
              'src/assets/images/categories/action/1.jpg',
              'src/assets/images/categories/action/2.jpg',
              'src/assets/images/categories/action/3.jpg',
              'src/assets/images/categories/action/4.jpg',
            ],
          },
          {
            id: 14,
            title: 'Adventure 4',
            badge: 'Top 10 In',
            images: [
              'src/assets/images/categories/adventure/1.jpg',
              'src/assets/images/categories/adventure/2.jpg',
              'src/assets/images/categories/adventure/3.jpg',
              'src/assets/images/categories/adventure/4.jpg',
            ],
          },
          {
            id: 15,
            title: 'Comedy 4',
            badge: 'Top 10 In',
            images: [
              'src/assets/images/categories/comedy/1.jpg',
              'src/assets/images/categories/comedy/2.jpg',
              'src/assets/images/categories/comedy/3.jpg',
              'src/assets/images/categories/comedy/4.jpg',
            ],
          },
          {
            id: 16,
            title: 'Drama 4',
            badge: 'Top 10 In',
            images: [
              'src/assets/images/categories/drama/1.jpg',
              'src/assets/images/categories/drama/2.jpg',
              'src/assets/images/categories/drama/3.jpg',
              'src/assets/images/categories/drama/4.jpg',
            ],
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.6,
              slidesPerGroup: 1,
              spaceBetween: 16,
              allowTouchMove: true,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 16,
              allowTouchMove: true,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
              allowTouchMove: true,
            },
            1024: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          },
        },
      },
      {
        id: 3,
        title: 'Trending Now',
        movieItems: [
          {
            id: 1,
            title: 'Morbius',
            imgSrc: 'src/assets/images/movies/trending/1.jpg',
            duration: '1h 30min',
            views: '2K',
          },
          {
            id: 2,
            title: 'Bhai Jaan',
            imgSrc: 'src/assets/images/movies/trending/2.jpg',
            duration: '1h 57min',
            views: '1.5K',
          },
          {
            id: 3,
            title: 'Mangal',
            imgSrc: 'src/assets/images/movies/trending/3.jpg',
            duration: '2h 10min',
            views: '1.8K',
          },
          {
            id: 4,
            title: 'Pathan',
            imgSrc: 'src/assets/images/movies/trending/4.jpg',
            duration: '2h 20min',
            views: '3K',
          },
          {
            id: 5,
            title: 'Ant-Man',
            imgSrc: 'src/assets/images/movies/trending/5.jpg',
            duration: '1h 42min',
            views: '5K',
          },

          {
            id: 6,
            title: 'Morbius 2',
            imgSrc: 'src/assets/images/movies/trending/1.jpg',
            duration: '1h 30min',
            views: '2K',
          },
          {
            id: 7,
            title: 'Bhai Jaan 2',
            imgSrc: 'src/assets/images/movies/trending/2.jpg',
            duration: '1h 57min',
            views: '1.5K',
          },
          {
            id: 8,
            title: 'Mangal 2',
            imgSrc: 'src/assets/images/movies/trending/3.jpg',
            duration: '2h 10min',
            views: '1.8K',
          },
          {
            id: 9,
            title: 'Pathan 2',
            imgSrc: 'src/assets/images/movies/trending/4.jpg',
            duration: '2h 20min',
            views: '3K',
          },
          {
            id: 10,
            title: 'Ant-Man 2',
            imgSrc: 'src/assets/images/movies/trending/5.jpg',
            duration: '1h 42min',
            views: '5K',
          },

          {
            id: 11,
            title: 'Morbius 3',
            imgSrc: 'src/assets/images/movies/trending/1.jpg',
            duration: '1h 30min',
            views: '2K',
          },
          {
            id: 12,
            title: 'Bhai Jaan 3',
            imgSrc: 'src/assets/images/movies/trending/2.jpg',
            duration: '1h 57min',
            views: '1.5K',
          },
          {
            id: 13,
            title: 'Mangal 3',
            imgSrc: 'src/assets/images/movies/trending/3.jpg',
            duration: '2h 10min',
            views: '1.8K',
          },
          {
            id: 14,
            title: 'Pathan 3',
            imgSrc: 'src/assets/images/movies/trending/4.jpg',
            duration: '2h 20min',
            views: '3K',
          },
          {
            id: 15,
            title: 'Ant-Man 3',
            imgSrc: 'src/assets/images/movies/trending/5.jpg',
            duration: '1h 42min',
            views: '5K',
          },

          {
            id: 16,
            title: 'Morbius 4',
            imgSrc: 'src/assets/images/movies/trending/1.jpg',
            duration: '1h 30min',
            views: '2K',
          },
          {
            id: 17,
            title: 'Bhai Jaan 4',
            imgSrc: 'src/assets/images/movies/trending/2.jpg',
            duration: '1h 57min',
            views: '1.5K',
          },
          {
            id: 18,
            title: 'Mangal 4',
            imgSrc: 'src/assets/images/movies/trending/3.jpg',
            duration: '2h 10min',
            views: '1.8K',
          },
          {
            id: 19,
            title: 'Pathan 4',
            imgSrc: 'src/assets/images/movies/trending/4.jpg',
            duration: '2h 20min',
            views: '3K',
          },
          {
            id: 20,
            title: 'Ant-Man 4',
            imgSrc: 'src/assets/images/movies/trending/5.jpg',
            duration: '1h 42min',
            views: '5K',
          },
        ],
        sliderParams: {
          slidesPerView: 5,
          slidesPerGroup: 5,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 2,
              slidesPerGroup: 1,
              spaceBetween: 20,
              allowTouchMove: true,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
              allowTouchMove: true,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
              allowTouchMove: true,
            },
            1024: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1167: {
              slidesPerView: 5,
              slidesPerGroup: 5,
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          },
        },
      },
      {
        id: 4,
        title: 'New Releases',
        movieItems: [
          {
            id: 1,
            title: 'Adipurush',
            imgSrc: 'src/assets/images/movies/releases/1.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            },
          },
          {
            id: 2,
            title: 'Аction with Jackie Chan',
            imgSrc: 'src/assets/images/movies/releases/2.jpg',
            released: {
              label: '22 April 2023',
              dateTime: '2023-04-22',
            },
          },
          {
            id: 3,
            title: 'Sin city',
            imgSrc: 'src/assets/images/movies/releases/3.jpg',
            released: {
              label: '13 April 2023',
              dateTime: '2023-04-13',
            },
          },
          {
            id: 4,
            title: 'The tomorrow war',
            imgSrc: 'src/assets/images/movies/releases/4.jpg',
            released: {
              label: '19 April 2023',
              dateTime: '2023-04-19',
            },
          },
          {
            id: 5,
            title: 'Misfire',
            imgSrc: 'src/assets/images/movies/releases/5.jpg',
            released: {
              label: '11 April 2023',
              dateTime: '2023-04-11',
            },
          },

          {
            id: 6,
            title: 'Adipurush 2',
            imgSrc: 'src/assets/images/movies/releases/1.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            },
          },
          {
            id: 7,
            title: 'Аction with Jackie Chan 2',
            imgSrc: 'src/assets/images/movies/releases/2.jpg',
            released: {
              label: '22 April 2023',
              dateTime: '2023-04-22',
            },
          },
          {
            id: 8,
            title: 'Sin city 2',
            imgSrc: 'src/assets/images/movies/releases/3.jpg',
            released: {
              label: '13 April 2023',
              dateTime: '2023-04-13',
            },
          },
          {
            id: 9,
            title: 'The tomorrow war 2',
            imgSrc: 'src/assets/images/movies/releases/4.jpg',
            released: {
              label: '19 April 2023',
              dateTime: '2023-04-19',
            },
          },
          {
            id: 10,
            title: 'Misfire 2',
            imgSrc: 'src/assets/images/movies/releases/5.jpg',
            released: {
              label: '11 April 2023',
              dateTime: '2023-04-11',
            },
          },

          {
            id: 11,
            title: 'Adipurush 3',
            imgSrc: 'src/assets/images/movies/releases/1.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            },
          },
          {
            id: 12,
            title: 'Аction with Jackie Chan 3',
            imgSrc: 'src/assets/images/movies/releases/2.jpg',
            released: {
              label: '22 April 2023',
              dateTime: '2023-04-22',
            },
          },
          {
            id: 13,
            title: 'Sin city 3',
            imgSrc: 'src/assets/images/movies/releases/3.jpg',
            released: {
              label: '13 April 2023',
              dateTime: '2023-04-13',
            },
          },
          {
            id: 14,
            title: 'The tomorrow war 3',
            imgSrc: 'src/assets/images/movies/releases/4.jpg',
            released: {
              label: '19 April 2023',
              dateTime: '2023-04-19',
            },
          },
          {
            id: 15,
            title: 'Misfire 3',
            imgSrc: 'src/assets/images/movies/releases/5.jpg',
            released: {
              label: '11 April 2023',
              dateTime: '2023-04-11',
            },
          },

          {
            id: 16,
            title: 'Adipurush 4',
            imgSrc: 'src/assets/images/movies/releases/1.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            },
          },
          {
            id: 17,
            title: 'Аction with Jackie Chan 4',
            imgSrc: 'src/assets/images/movies/releases/2.jpg',
            released: {
              label: '22 April 2023',
              dateTime: '2023-04-22',
            },
          },
          {
            id: 18,
            title: 'Sin city 4',
            imgSrc: 'src/assets/images/movies/releases/3.jpg',
            released: {
              label: '13 April 2023',
              dateTime: '2023-04-13',
            },
          },
          {
            id: 19,
            title: 'The tomorrow war 4',
            imgSrc: 'src/assets/images/movies/releases/4.jpg',
            released: {
              label: '19 April 2023',
              dateTime: '2023-04-19',
            },
          },
          {
            id: 20,
            title: 'Misfire 4',
            imgSrc: 'src/assets/images/movies/releases/5.jpg',
            released: {
              label: '11 April 2023',
              dateTime: '2023-04-11',
            },
          },
        ],
        sliderParams: {
          slidesPerView: 5,
          slidesPerGroup: 5,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 2,
              slidesPerGroup: 1,
              spaceBetween: 20,
              allowTouchMove: true,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
              allowTouchMove: true,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
              allowTouchMove: true,
            },
            1024: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1167: {
              slidesPerView: 5,
              slidesPerGroup: 5,
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          },
        },
      },
      {
        id: 5,
        title: 'Must - Watch Movies',
        movieItems: [
          {
            id: 1,
            title: 'Kantara',
            imgSrc: 'src/assets/images/movies/must-watch/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K',
            },
          },
          {
            id: 2,
            title: 'Pushpa',
            imgSrc: 'src/assets/images/movies/must-watch/2.jpg',
            duration: '1h 30min',
            rating: {
              value: 4,
              label: '20K',
            },
          },
          {
            id: 3,
            title: 'Blade runner 2049',
            imgSrc: 'src/assets/images/movies/must-watch/3.jpg',
            duration: '1h 42min',
            rating: {
              value: 4.5,
              label: '20K',
            },
          },
          {
            id: 4,
            title: 'Adipurush',
            imgSrc: 'src/assets/images/movies/must-watch/4.jpg',
            duration: '2h 10min',
            rating: {
              value: 3,
              label: '20K',
            },
          },

          {
            id: 5,
            title: 'Kantara 2',
            imgSrc: 'src/assets/images/movies/must-watch/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K',
            },
          },
          {
            id: 6,
            title: 'Pushpa 2',
            imgSrc: 'src/assets/images/movies/must-watch/2.jpg',
            duration: '1h 30min',
            rating: {
              value: 4,
              label: '20K',
            },
          },
          {
            id: 7,
            title: 'Blade runner 2049 2',
            imgSrc: 'src/assets/images/movies/must-watch/3.jpg',
            duration: '1h 42min',
            rating: {
              value: 4.5,
              label: '20K',
            },
          },
          {
            id: 8,
            title: 'Adipurush 2',
            imgSrc: 'src/assets/images/movies/must-watch/4.jpg',
            duration: '2h 10min',
            rating: {
              value: 3,
              label: '20K',
            },
          },

          {
            id: 9,
            title: 'Kantara 3',
            imgSrc: 'src/assets/images/movies/must-watch/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K',
            },
          },
          {
            id: 10,
            title: 'Pushpa 3',
            imgSrc: 'src/assets/images/movies/must-watch/2.jpg',
            duration: '1h 30min',
            rating: {
              value: 4,
              label: '20K',
            },
          },
          {
            id: 11,
            title: 'Blade runner 2049 3',
            imgSrc: 'src/assets/images/movies/must-watch/3.jpg',
            duration: '1h 42min',
            rating: {
              value: 4.5,
              label: '20K',
            },
          },
          {
            id: 12,
            title: 'Adipurush 3',
            imgSrc: 'src/assets/images/movies/must-watch/4.jpg',
            duration: '2h 10min',
            rating: {
              value: 3,
              label: '20K',
            },
          },

          {
            id: 13,
            title: 'Kantara 4',
            imgSrc: 'src/assets/images/movies/must-watch/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K',
            },
          },
          {
            id: 14,
            title: 'Pushpa 4',
            imgSrc: 'src/assets/images/movies/must-watch/2.jpg',
            duration: '1h 30min',
            rating: {
              value: 4,
              label: '20K',
            },
          },
          {
            id: 15,
            title: 'Blade runner 2049 4',
            imgSrc: 'src/assets/images/movies/must-watch/3.jpg',
            duration: '1h 42min',
            rating: {
              value: 4.5,
              label: '20K',
            },
          },
          {
            id: 16,
            title: 'Adipurush 4',
            imgSrc: 'src/assets/images/movies/must-watch/4.jpg',
            duration: '2h 10min',
            rating: {
              value: 3,
              label: '20K',
            },
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.6,
              slidesPerGroup: 1,
              spaceBetween: 16,
              allowTouchMove: true,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 16,
              allowTouchMove: true,
            },
            768: {
              slidesPerView: 2.5,
              slidesPerGroup: 2,
              spaceBetween: 20,
              allowTouchMove: true,
            },
            1024: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1280: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          },
        },
      },
    ],
  },
  {
    id: 'collection-shows',
    title: 'Shows',
    items: [
      {
        id: 1,
        title: 'Our Genres 2',
        categoryItems,
      },
      {
        id: 2,
        title: 'Popular Top 10 In Genres 2',
        categoryItems: [
          {
            id: 1,
            title: 'Action',
            badge: 'Top 10 In',
            images: [
              'src/assets/images/categories/action/1.jpg',
              'src/assets/images/categories/action/2.jpg',
              'src/assets/images/categories/action/3.jpg',
              'src/assets/images/categories/action/4.jpg',
            ],
          },
          {
            id: 2,
            title: 'Adventure',
            badge: 'Top 10 In',
            images: [
              'src/assets/images/categories/adventure/1.jpg',
              'src/assets/images/categories/adventure/2.jpg',
              'src/assets/images/categories/adventure/3.jpg',
              'src/assets/images/categories/adventure/4.jpg',
            ],
          },
          {
            id: 3,
            title: 'Comedy',
            badge: 'Top 10 In',
            images: [
              'src/assets/images/categories/comedy/1.jpg',
              'src/assets/images/categories/comedy/2.jpg',
              'src/assets/images/categories/comedy/3.jpg',
              'src/assets/images/categories/comedy/4.jpg',
            ],
          },
          {
            id: 4,
            title: 'Drama',
            badge: 'Top 10 In',
            images: [
              'src/assets/images/categories/drama/1.jpg',
              'src/assets/images/categories/drama/2.jpg',
              'src/assets/images/categories/drama/3.jpg',
              'src/assets/images/categories/drama/4.jpg',
            ],
          },

          {
            id: 5,
            title: 'Action 2',
            badge: 'Top 10 In',
            images: [
              'src/assets/images/categories/action/1.jpg',
              'src/assets/images/categories/action/2.jpg',
              'src/assets/images/categories/action/3.jpg',
              'src/assets/images/categories/action/4.jpg',
            ],
          },
          {
            id: 6,
            title: 'Adventure 2',
            badge: 'Top 10 In',
            images: [
              'src/assets/images/categories/adventure/1.jpg',
              'src/assets/images/categories/adventure/2.jpg',
              'src/assets/images/categories/adventure/3.jpg',
              'src/assets/images/categories/adventure/4.jpg',
            ],
          },
          {
            id: 7,
            title: 'Comedy 2',
            badge: 'Top 10 In',
            images: [
              'src/assets/images/categories/comedy/1.jpg',
              'src/assets/images/categories/comedy/2.jpg',
              'src/assets/images/categories/comedy/3.jpg',
              'src/assets/images/categories/comedy/4.jpg',
            ],
          },
          {
            id: 8,
            title: 'Drama 2',
            badge: 'Top 10 In',
            images: [
              'src/assets/images/categories/drama/1.jpg',
              'src/assets/images/categories/drama/2.jpg',
              'src/assets/images/categories/drama/3.jpg',
              'src/assets/images/categories/drama/4.jpg',
            ],
          },

          {
            id: 9,
            title: 'Action 3',
            badge: 'Top 10 In',
            images: [
              'src/assets/images/categories/action/1.jpg',
              'src/assets/images/categories/action/2.jpg',
              'src/assets/images/categories/action/3.jpg',
              'src/assets/images/categories/action/4.jpg',
            ],
          },
          {
            id: 10,
            title: 'Adventure 3',
            badge: 'Top 10 In',
            images: [
              'src/assets/images/categories/adventure/1.jpg',
              'src/assets/images/categories/adventure/2.jpg',
              'src/assets/images/categories/adventure/3.jpg',
              'src/assets/images/categories/adventure/4.jpg',
            ],
          },
          {
            id: 11,
            title: 'Comedy 3',
            badge: 'Top 10 In',
            images: [
              'src/assets/images/categories/comedy/1.jpg',
              'src/assets/images/categories/comedy/2.jpg',
              'src/assets/images/categories/comedy/3.jpg',
              'src/assets/images/categories/comedy/4.jpg',
            ],
          },
          {
            id: 12,
            title: 'Drama 3',
            badge: 'Top 10 In',
            images: [
              'src/assets/images/categories/drama/1.jpg',
              'src/assets/images/categories/drama/2.jpg',
              'src/assets/images/categories/drama/3.jpg',
              'src/assets/images/categories/drama/4.jpg',
            ],
          },

          {
            id: 13,
            title: 'Action 4',
            badge: 'Top 10 In',
            images: [
              'src/assets/images/categories/action/1.jpg',
              'src/assets/images/categories/action/2.jpg',
              'src/assets/images/categories/action/3.jpg',
              'src/assets/images/categories/action/4.jpg',
            ],
          },
          {
            id: 14,
            title: 'Adventure 4',
            badge: 'Top 10 In',
            images: [
              'src/assets/images/categories/adventure/1.jpg',
              'src/assets/images/categories/adventure/2.jpg',
              'src/assets/images/categories/adventure/3.jpg',
              'src/assets/images/categories/adventure/4.jpg',
            ],
          },
          {
            id: 15,
            title: 'Comedy 4',
            badge: 'Top 10 In',
            images: [
              'src/assets/images/categories/comedy/1.jpg',
              'src/assets/images/categories/comedy/2.jpg',
              'src/assets/images/categories/comedy/3.jpg',
              'src/assets/images/categories/comedy/4.jpg',
            ],
          },
          {
            id: 16,
            title: 'Drama 4',
            badge: 'Top 10 In',
            images: [
              'src/assets/images/categories/drama/1.jpg',
              'src/assets/images/categories/drama/2.jpg',
              'src/assets/images/categories/drama/3.jpg',
              'src/assets/images/categories/drama/4.jpg',
            ],
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.6,
              slidesPerGroup: 1,
              spaceBetween: 16,
              allowTouchMove: true,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 16,
              allowTouchMove: true,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
              allowTouchMove: true,
            },
            1024: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          },
        },
      },
      {
        id: 3,
        title: 'Trending Shows Now',
        movieItems: [
          {
            id: 1,
            link: '/shows',
            title: 'Stranger things',
            imgSrc: 'src/assets/images/shows/trending/1.jpg',
            duration: '8h 20min',
            season: '4 Season',
          },
          {
            id: 2,
            link: '/shows',
            title: 'Money heist',
            imgSrc: 'src/assets/images/shows/trending/2.jpg',
            duration: '12h 23min',
            season: '5 Season',
          },
          {
            id: 3,
            link: '/shows',
            title: 'Lucifer',
            imgSrc: 'src/assets/images/shows/trending/3.jpg',
            duration: '14h 30min',
            season: '3 Season',
          },
          {
            id: 4,
            link: '/shows',
            title: 'The gray man',
            imgSrc: 'src/assets/images/shows/trending/4.jpg',
            duration: '7h 40min',
            season: '2 Season',
          },

          {
            id: 5,
            link: '/shows',
            title: 'Stranger things 2',
            imgSrc: 'src/assets/images/shows/trending/1.jpg',
            duration: '8h 20min',
            season: '4 Season',
          },
          {
            id: 6,
            link: '/shows',
            title: 'Money heist 2',
            imgSrc: 'src/assets/images/shows/trending/2.jpg',
            duration: '12h 23min',
            season: '5 Season',
          },
          {
            id: 7,
            link: '/shows',
            title: 'Lucifer 2',
            imgSrc: 'src/assets/images/shows/trending/3.jpg',
            duration: '14h 30min',
            season: '3 Season',
          },
          {
            id: 8,
            link: '/shows',
            title: 'The gray man 2',
            imgSrc: 'src/assets/images/shows/trending/4.jpg',
            duration: '7h 40min',
            season: '2 Season',
          },

          {
            id: 9,
            link: '/shows',
            title: 'Stranger things 3',
            imgSrc: 'src/assets/images/shows/trending/1.jpg',
            duration: '8h 20min',
            season: '4 Season',
          },
          {
            id: 10,
            link: '/shows',
            title: 'Money heist 3',
            imgSrc: 'src/assets/images/shows/trending/2.jpg',
            duration: '12h 23min',
            season: '5 Season',
          },
          {
            id: 11,
            link: '/shows',
            title: 'Lucifer 3',
            imgSrc: 'src/assets/images/shows/trending/3.jpg',
            duration: '14h 30min',
            season: '3 Season',
          },
          {
            id: 12,
            link: '/shows',
            title: 'The gray man 3',
            imgSrc: 'src/assets/images/shows/trending/4.jpg',
            duration: '7h 40min',
            season: '2 Season',
          },

          {
            id: 13,
            link: '/shows',
            title: 'Stranger things 4',
            imgSrc: 'src/assets/images/shows/trending/1.jpg',
            duration: '8h 20min',
            season: '4 Season',
          },
          {
            id: 14,
            link: '/shows',
            title: 'Money heist 4',
            imgSrc: 'src/assets/images/shows/trending/2.jpg',
            duration: '12h 23min',
            season: '5 Season',
          },
          {
            id: 15,
            link: '/shows',
            title: 'Lucifer 4',
            imgSrc: 'src/assets/images/shows/trending/3.jpg',
            duration: '14h 30min',
            season: '3 Season',
          },
          {
            id: 16,
            link: '/shows',
            title: 'The gray man 4',
            imgSrc: 'src/assets/images/shows/trending/4.jpg',
            duration: '7h 40min',
            season: '2 Season',
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.6,
              slidesPerGroup: 1,
              spaceBetween: 16,
              allowTouchMove: true,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 16,
              allowTouchMove: true,
            },
            768: {
              slidesPerView: 2.5,
              slidesPerGroup: 2,
              spaceBetween: 20,
              allowTouchMove: true,
            },
            1024: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1280: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          },
        },
      },
      {
        id: 4,
        title: 'New Released Shows',
        movieItems: [
          {
            id: 1,
            link: '/shows',
            title: 'High town',
            imgSrc: 'src/assets/images/shows/released/1.jpg',
            duration: '12h 23min',
            season: '5 Season',
          },
          {
            id: 2,
            link: '/shows',
            title: 'Mirzapur',
            imgSrc: 'src/assets/images/shows/released/2.jpg',
            duration: '7h 40min',
            season: '2 Season',
          },
          {
            id: 3,
            link: '/shows',
            title: 'Breathe into the shadows',
            imgSrc: 'src/assets/images/shows/released/3.jpg',
            duration: '8h 20min',
            season: '4 Season',
          },
          {
            id: 4,
            link: '/shows',
            title: 'Peaky blinders',
            imgSrc: 'src/assets/images/shows/released/4.jpg',
            duration: '10h 30min',
            season: '3 Season',
          },

          {
            id: 5,
            link: '/shows',
            title: 'High town 2',
            imgSrc: 'src/assets/images/shows/released/1.jpg',
            duration: '12h 23min',
            season: '5 Season',
          },
          {
            id: 6,
            link: '/shows',
            title: 'Mirzapur 2',
            imgSrc: 'src/assets/images/shows/released/2.jpg',
            duration: '7h 40min',
            season: '2 Season',
          },
          {
            id: 7,
            link: '/shows',
            title: 'Breathe into the shadows 2',
            imgSrc: 'src/assets/images/shows/released/3.jpg',
            duration: '8h 20min',
            season: '4 Season',
          },
          {
            id: 8,
            link: '/shows',
            title: 'Peaky blinders 2',
            imgSrc: 'src/assets/images/shows/released/4.jpg',
            duration: '10h 30min',
            season: '3 Season',
          },

          {
            id: 9,
            link: '/shows',
            title: 'High town 3',
            imgSrc: 'src/assets/images/shows/released/1.jpg',
            duration: '12h 23min',
            season: '5 Season',
          },
          {
            id: 10,
            link: '/shows',
            title: 'Mirzapur 3',
            imgSrc: 'src/assets/images/shows/released/2.jpg',
            duration: '7h 40min',
            season: '2 Season',
          },
          {
            id: 11,
            link: '/shows',
            title: 'Breathe into the shadows 3',
            imgSrc: 'src/assets/images/shows/released/3.jpg',
            duration: '8h 20min',
            season: '4 Season',
          },
          {
            id: 12,
            link: '/shows',
            title: 'Peaky blinders 3',
            imgSrc: 'src/assets/images/shows/released/4.jpg',
            duration: '10h 30min',
            season: '3 Season',
          },

          {
            id: 13,
            link: '/shows',
            title: 'High town 4',
            imgSrc: 'src/assets/images/shows/released/1.jpg',
            duration: '12h 23min',
            season: '5 Season',
          },
          {
            id: 14,
            link: '/shows',
            title: 'Mirzapur 4',
            imgSrc: 'src/assets/images/shows/released/2.jpg',
            duration: '7h 40min',
            season: '2 Season',
          },
          {
            id: 15,
            link: '/shows',
            title: 'Breathe into the shadows 4',
            imgSrc: 'src/assets/images/shows/released/3.jpg',
            duration: '8h 20min',
            season: '4 Season',
          },
          {
            id: 16,
            link: '/shows',
            title: 'Peaky blinders 4',
            imgSrc: 'src/assets/images/shows/released/4.jpg',
            duration: '10h 30min',
            season: '3 Season',
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.6,
              slidesPerGroup: 1,
              spaceBetween: 16,
              allowTouchMove: true,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 16,
              allowTouchMove: true,
            },
            768: {
              slidesPerView: 2.5,
              slidesPerGroup: 2,
              spaceBetween: 20,
              allowTouchMove: true,
            },
            1024: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1280: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          },
        },
      },
      {
        id: 5,
        title: 'Must - Watch Movies',
        movieItems: [
          {
            id: 1,
            link: '/shows',
            title: 'Duranga',
            imgSrc: 'src/assets/images/shows/must-watch/1.jpg',
            duration: '7h 40min',
            rating: {
              value: 4.5,
              label: '12K',
            },
          },
          {
            id: 2,
            link: '/shows',
            title: 'Money Heist',
            imgSrc: 'src/assets/images/shows/must-watch/2.jpg',
            duration: '12h 23min',
            rating: {
              value: 4.5,
              label: '28K',
            },
          },
          {
            id: 3,
            link: '/shows',
            title: 'MAI',
            imgSrc: 'src/assets/images/shows/must-watch/3.jpg',
            duration: '10h 30min',
            rating: {
              value: 4,
              label: '2K',
            },
          },
          {
            id: 4,
            link: '/shows',
            title: 'Stranger Things 3',
            imgSrc: 'src/assets/images/shows/must-watch/4.jpg',
            duration: '8h 20min',
            rating: {
              value: 5,
              label: '32K',
            },
          },

          {
            id: 5,
            link: '/shows',
            title: 'Duranga 2',
            imgSrc: 'src/assets/images/shows/must-watch/1.jpg',
            duration: '7h 40min',
            rating: {
              value: 4.5,
              label: '12K',
            },
          },
          {
            id: 6,
            link: '/shows',
            title: 'Money Heist 2',
            imgSrc: 'src/assets/images/shows/must-watch/2.jpg',
            duration: '12h 23min',
            rating: {
              value: 4.5,
              label: '28K',
            },
          },
          {
            id: 7,
            link: '/shows',
            title: 'MAI 2',
            imgSrc: 'src/assets/images/shows/must-watch/3.jpg',
            duration: '10h 30min',
            rating: {
              value: 4,
              label: '2K',
            },
          },
          {
            id: 8,
            link: '/shows',
            title: 'Stranger Things 3 2',
            imgSrc: 'src/assets/images/shows/must-watch/4.jpg',
            duration: '8h 20min',
            rating: {
              value: 5,
              label: '32K',
            },
          },

          {
            id: 9,
            link: '/shows',
            title: 'Duranga 3',
            imgSrc: 'src/assets/images/shows/must-watch/1.jpg',
            duration: '7h 40min',
            rating: {
              value: 4.5,
              label: '12K',
            },
          },
          {
            id: 10,
            link: '/shows',
            title: 'Money Heist 3',
            imgSrc: 'src/assets/images/shows/must-watch/2.jpg',
            duration: '12h 23min',
            rating: {
              value: 4.5,
              label: '28K',
            },
          },
          {
            id: 11,
            link: '/shows',
            title: 'MAI 3',
            imgSrc: 'src/assets/images/shows/must-watch/3.jpg',
            duration: '10h 30min',
            rating: {
              value: 4,
              label: '2K',
            },
          },
          {
            id: 12,
            link: '/shows',
            title: 'Stranger Things 3 3',
            imgSrc: 'src/assets/images/shows/must-watch/4.jpg',
            duration: '8h 20min',
            rating: {
              value: 5,
              label: '32K',
            },
          },

          {
            id: 13,
            link: '/shows',
            title: 'Duranga 4',
            imgSrc: 'src/assets/images/shows/must-watch/1.jpg',
            duration: '7h 40min',
            rating: {
              value: 4.5,
              label: '12K',
            },
          },
          {
            id: 14,
            link: '/shows',
            title: 'Money Heist 4',
            imgSrc: 'src/assets/images/shows/must-watch/2.jpg',
            duration: '12h 23min',
            rating: {
              value: 4.5,
              label: '28K',
            },
          },
          {
            id: 15,
            link: '/shows',
            title: 'MAI 4',
            imgSrc: 'src/assets/images/shows/must-watch/3.jpg',
            duration: '10h 30min',
            rating: {
              value: 4,
              label: '2K',
            },
          },
          {
            id: 16,
            link: '/shows',
            title: 'Stranger Things 3 4',
            imgSrc: 'src/assets/images/shows/must-watch/4.jpg',
            duration: '8h 20min',
            rating: {
              value: 5,
              label: '32K',
            },
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.6,
              slidesPerGroup: 1,
              spaceBetween: 16,
              allowTouchMove: true,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 16,
              allowTouchMove: true,
            },
            768: {
              slidesPerView: 2.5,
              slidesPerGroup: 2,
              spaceBetween: 20,
              allowTouchMove: true,
            },
            1024: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1280: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          },
        },
      },
    ],
  },
]
