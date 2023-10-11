import Image from 'next/image'
import styles from './header.module.scss'
import Logo from '@/assets/svg/Logo.svg'
import Link from 'next/link'
function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div>
          <Link href="/">
            <Image src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className={styles.links}>
          <ul>
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
            <li>
              <Link href="#">About</Link>
            </li>
          </ul>
        </div>
        <div className={styles.auth_container}>
          <ul>
            <li>
              <Link href="#">Login</Link>
            </li>
            <p>|</p>
            <li>
              <Link href="#">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Header
