import { Routes, Route } from 'react-router'
import MainLayout from '@/layouts/MainLayout'
import HomePage from '@/pages/HomePage'
import MoviesPage from '@/pages/MoviesPage'

function App() {
  return (
    <Routes>
      {/* url paths ??? */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Route>
    </Routes>
  )
}

export default App
