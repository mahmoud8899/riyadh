import { createRoot } from 'react-dom/client';
import React from 'react'
import ScrollToTop from './ScrollTo'
import Routes from './Router'
import { BrowserRouter } from 'react-router-dom';
import 'react-lazy-load-image-component/src/effects/blur.css';

const root = createRoot(document.getElementById('Mahmoud-Almadhoun+467098520'));
root.render(
    <BrowserRouter>
        <ScrollToTop />
        <Routes />
    </BrowserRouter>
);