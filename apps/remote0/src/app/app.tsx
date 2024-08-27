import * as React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

const Header = React.lazy(() => import('ui/Header'));
const Text = React.lazy(() => import('ui/Text'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <div>
        <Header text='Home Page (remote0)'/>
        <Text>
The project consists of a host app and several remote apps.
        </Text>
      </div>
    </React.Suspense>
  );
}

export default App;
