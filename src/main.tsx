import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Mercury from './pages/Mercury.tsx'
import Venus from './pages/Venus.tsx'
import Earth from './pages/Earth.tsx'
import Mars from './pages/Mars.tsx'
import Jupiter from './pages/Jupiter.tsx'
import Saturn from './pages/Saturn.tsx'
import Uranus from './pages/Uranus.tsx'
import Neptune from './pages/Neptune.tsx'

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/Earth" replace />
  },
  {
    path: "/Mercury",
    element: <Mercury/>
  },
  {
    path: "/Venus",
    element: <Venus/>
  },
  {
    path: "/Earth",
    element: <Earth/>
  },
  {
    path: "/Mars",
    element: <Mars/>
  },
  {
    path: "/Jupiter",
    element: <Jupiter/>
  },
  {
    path: "/Saturn",
    element: <Saturn/>
  },
  {
    path: "/Uranus",
    element: <Uranus/>
  },
  {
    path: "/Neptune",
    element: <Neptune/>
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
