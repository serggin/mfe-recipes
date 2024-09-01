// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import styles from './app.module.css';
import useStore from 'store/Module';

const Header = React.lazy(() => import('ui/Header'));
const Text = React.lazy(() => import('ui/Text'));
const ImageCard = React.lazy(() => import('ui/ImageCard'));

const images = [
  { id: 'img1', src: 'assets/remote1/img1.jpg', title: 'img1' },
  { id: 'img2', src: 'assets/remote1/img2.jpg', title: 'img2' },
  { id: 'img3', src: 'assets/remote1/img3.jpg', title: 'img3' },
  { id: 'img4', src: 'assets/remote1/img4.jpg', title: 'img4' },
];

export function App() {
  const store = useStore();
  const {favorites} = store;

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
