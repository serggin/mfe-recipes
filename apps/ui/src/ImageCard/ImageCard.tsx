import styles from './ImageCard.module.css';

interface IProps {
  src: string;
  title: string;
  selected?: boolean;
  id?: string;
  //onclick?: (id: string) => void;
  onclick?: () => void;
}

export function ImageCard({ src, title, selected = false, id, onclick }: IProps) {
  //const imgStyles = `${styles.img}` + selected && ` ${styles.selected}`;
  const imgStyles = `${styles.img} ${selected && styles.selected}`;
  //const imgStyles = `${styles.img}`;
  //console.log('imgStyles=' + imgStyles);
  return (
    <div className={styles.card}>
      <img className={imgStyles} src={src} alt='' onClick={() => {onclick && onclick()}}/>
      <div className={styles.title}>{title}</div>
    </div>
  );
}

export default ImageCard;
