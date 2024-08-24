import styles from './TopAppBar.module.css';
import { Link } from 'react-router-dom';

interface NavItem {
  label: string;
  href: string;
}

interface IProps {
  navItems: NavItem[];
}

export function TopAppBar({navItems = []}: IProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to TopAppBar!</h1>
      {navItems.map((navItem: NavItem) => (
        <Link className={styles['link']} to={navItem.href} key={navItem.label}>{navItem.label}</Link>
      ))}
    </div>
  );
}

export default TopAppBar;
