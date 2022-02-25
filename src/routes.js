import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './pages/error'

import Home from './pages/home'
import Links from './pages/links'

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/links" element={<Links/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;