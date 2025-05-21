import { HomePage } from '@/pages/home'
import LetterPage from '@/pages/letter/ui/LetterPage'
import NotFound from '@/pages/NotFoundPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainLayout } from './layouts'
import { StoreProvider } from './providers'
import { ROUTES } from './routes'

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: ROUTES.newLetter,
                element: <LetterPage />,
            },
            {
                path: ROUTES.editLetter(':letterId'),
                element: <LetterPage />,
            },
        ],
    },
    {
        path: '*',
        element: <NotFound />,
    },
])

const App = () => {
    return (
        <StoreProvider>
            <RouterProvider router={router} />
        </StoreProvider>
    )
}

export default App
