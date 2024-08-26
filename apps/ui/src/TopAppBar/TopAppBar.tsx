import styles from './TopAppBar.module.css';
import { Link } from 'react-router-dom';

interface NavItem {
  label: string;
  href: string;
}

interface IProps {
  title?: string;
  navItems: NavItem[];
}

export function TopAppBar({title = '', navItems = []}: IProps) {
  return (
    <div className={styles['container']}>
      <div className={styles.title}>{title}</div>
      <div className={styles.nav}>
      {navItems.map((navItem: NavItem) => (
        <Link className={styles['link']} to={navItem.href} key={navItem.label}>{navItem.label}</Link>
      ))}
      </div>
    </div>
  );
}

export default TopAppBar;
