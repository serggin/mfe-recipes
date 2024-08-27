// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import styles from './app.module.css';

const Header = React.lazy(() => import('ui/Header'));
const Text = React.lazy(() => import('ui/Text'));
const ImageCard = React.lazy(() => import('ui/ImageCard'));

const images = [
  { id: 'img1', src: 'assets/img1.jpg', title: 'img1' },
  { id: 'img2', src: 'assets/img2.jpg', title: 'img2' },
  { id: 'img3', src: 'assets/img3.jpg', title: 'img3' },
  { id: 'img4', src: 'assets/img4.jpg', title: 'img4' },
];

export function App() {
  return (
    <React.Suspense fallback={null}>
      <div>
        <Header text='Page 1 (remote1)' />
        <Text>
          Some image cards.
        </Text>
        <div className={styles.cards}>
        {images.map((image) => (
          <ImageCard key={image.id} src={image.src} title={image.title} />
        ))}
      </div>
    </div>
    </React.Suspense >
  );
}


export default App;
