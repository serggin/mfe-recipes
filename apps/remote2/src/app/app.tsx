// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
//import styles from './app.module.css';
import images from 'remote1/images';
import useStore from 'store/Module';

const Header = React.lazy(() => import('ui/Header'));
const Text = React.lazy(() => import('ui/Text'));
const ImageCard = React.lazy(() => import('ui/ImageCard'));

export function App() {
  const favorites = useStore();

  const image = favorites.favoriteId && images.find((image) => favorites.favoriteId === image.id);

  return (
    <div>
      <Header text='Page 2 (remote2)' />
      {image ? (
        <div>
          <ImageCard key={image.id}
            src={image.src}
            title={image.title}
            selected={true} />
          <Text>{`Here favorite Image card is displayed.
SPA state persists between routes and remote apps.
This page also uses image card data from remote1 app.
`}</Text>
        </div>
      ) : (
        <div>No favorites set</div>
      )}
    </div>
  );
}

export default App;
