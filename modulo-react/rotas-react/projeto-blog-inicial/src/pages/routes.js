import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Posts } from './posts'
import { Post } from './post'

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Posts />} />
        </Routes>
    </BrowserRouter>
)

export { AppRoutes }