// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import styles from './app.module.css';
import images from 'remote1/images';
import useStore from 'store/Module';

const ImageCard = React.lazy(() => import('ui/ImageCard'));

export function App() {
  const favorites = useStore();

  const image = favorites.favoriteId && images.find((image) => favorites.favoriteId === image.id);
  //console.log('favorites.favoriteId, image', favorites.favoriteId, image);

  return (
    <div>
      <h1>Page 2 (remote2)</h1>
      {image ? (
        <ImageCard key={image.id}
          src={image.src}
          title={image.title}
          selected={true} />
      ) : (
        <div>No favorites set</div>
      )}
    </div>
  );
}

export default App;
