import * as React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

const Header = React.lazy(() => import('ui/Header'));
const Text = React.lazy(() => import('ui/Text'));

const pageText = `The project consists of a host app and several remote apps.
The library of UI components and SPA state are remote apps too.
This demo project utilizes nx workspace with react monorepo.`;

export function App() {
  return (
    <React.Suspense fallback={null}>
      <div>
        <Header text='Home Page (remote0)'/>
        <Text>
          {pageText}
        </Text>
      </div>
    </React.Suspense>
  );
}

export default App;
