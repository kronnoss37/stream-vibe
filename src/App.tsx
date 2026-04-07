import { Routes, Route } from 'react-router'
import MainLayout from '@/layouts/MainLayout'
import LayoutWithFixedHeader from '@/layouts/LayoutWithFixedHeader'
import HomePage from '@/pages/HomePage'
import MoviesPage from '@/pages/MoviesPage'
import MoviePage from '@/pages/MoviePage'
import SupportPage from '@/pages/SupportPage'
import SubscriptionsPage from '@/pages/SubscriptionsPage'

function App() {
  return (
    <Routes>
      <Route element={<LayoutWithFixedHeader />}>
        <Route path="/" element={<HomePage />} />
      </Route>

      <Route element={<MainLayout />}>
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movie" element={<MoviePage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/subscriptions" element={<SubscriptionsPage />} />
      </Route>
    </Routes>
  )
}

export default App
