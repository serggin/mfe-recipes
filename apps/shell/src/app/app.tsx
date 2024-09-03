import * as React from 'react';

import { Route, Routes } from 'react-router-dom';

const Remote0 = React.lazy(() => import('remote0/Module'));

const Remote1 = React.lazy(() => import('remote1/Module'));

const Remote2 = React.lazy(() => import('remote2/Module'));


const TopAppBar = React.lazy(() => import('ui/TopAppBar'));

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Page1', href: '/remote1' },
  { label: 'Page2', href: '/remote2' },
];
const title = 'SPA: micro-frontend pattern with Module Federation';

export function App() {
  return (
    <React.Suspense fallback={null}>
      <TopAppBar title={title} navItems={NAV_ITEMS} />
      <Routes>
        <Route path="/" element={<Remote0 />} />
        <Route path="/remote1" element={<Remote1 />} />
        <Route path="/remote2" element={<Remote2 />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
