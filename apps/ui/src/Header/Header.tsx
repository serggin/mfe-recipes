import styles from './Header.module.css';

type Level = '1' |'2' | '3';

interface IProps {
  level?: Level;
  text: string;
}

export function Header({level='1', text}: IProps) {
  return (
    <>
      {level === '1' && (<h1 className={styles.h1}>{text}</h1>)}
      {level === '2' && (<h2 className={styles.h2}>{text}</h2>)}
      {level === '3' && (<h3 className={styles.h3}>{text}</h3>)}
    </>
  );
}

export default Header;
