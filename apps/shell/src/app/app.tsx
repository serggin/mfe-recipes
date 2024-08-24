import * as React from 'react';

//import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

const Remote0 = React.lazy(() => import('remote0/Module'));

const Remote1 = React.lazy(() => import('remote1/Module'));

const Remote2 = React.lazy(() => import('remote2/Module'));

//const Ui = React.lazy(() => import('ui/Module'));
const TopAppBar = React.lazy(() => import('ui/TopAppBar'));

const NAV_ITEMS = [
  {label: 'Home', href: '/'},
  {label: 'Page1', href: '/remote1'},
  {label: 'Page2', href: '/remote2'},
];

export function App() {
  return (
    <React.Suspense fallback={null}>
      <TopAppBar navItems={NAV_ITEMS}/>
      {/*<ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/ui">Ui</Link>
        </li>

        <li>
          <Link to="/remote1">Remote1</Link>
        </li>

        <li>
          <Link to="/remote2">Remote2</Link>
        </li>
      </ul>*/}
      <Routes>
        <Route path="/" element={<Remote0 />} />
        {/*<Route path="/remote0" element={<Remote0 />} />*/}
        {/*<Route path="/ui" element={<Ui />} />*/}

        <Route path="/remote1" element={<Remote1 />} />

        <Route path="/remote2" element={<Remote2 />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
