// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import styles from './app.module.css';
import useStore from 'store/Module';
import images from '../images';

const Header = React.lazy(() => import('ui/Header'));
const Text = React.lazy(() => import('ui/Text'));
const ImageCard = React.lazy(() => import('ui/ImageCard'));

export function App() {
  //const store = useStore();
  //const {favorites} = store;
  const favorites = useStore();

  return (
    <React.Suspense fallback={null}>
      <div>
        <Header text='Page 1 (remote1)' />
        <Text>
{`By default assets of the remote app have paths relative to remote app root.
This is OK when the remote app runs alone. And this paths are not valid in the context of the host app.
Some fixes should be made to this paths as well as proxy configuration is needed.`}          
        </Text>
        <div className={styles.cards}>
        {images.map((image) => (
          <ImageCard key={image.id} 
            src={image.src} 
            title={image.title} 
            selected={favorites.favoriteId === image.id}
            onclick={() => {favorites.setFavoriteId(image.id)}}/>
        ))}
      </div>
    </div>
    </React.Suspense >
  );
}


export default App;
