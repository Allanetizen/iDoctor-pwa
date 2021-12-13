import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './Landing'
import Home from './Home'


export default function RouterPage() {
    return (
        <div>
            <Router>
            <Routes>
                <Route path="/" exact element ={Home} />
                <Route path ="/landing" element ={Landing} />
            </Routes>
            </Router>
        </div>
    )
}
