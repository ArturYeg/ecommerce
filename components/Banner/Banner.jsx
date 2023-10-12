import Image from 'next/image'
import styles from './banner.module.scss'
import Bannerimg from '@/assets/svg/banner.svg'
import Button from '../button'

function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>ex.iphones.</p>
        <p>From ₹25,000 to ₹10,000,0. Every Model Ever Built</p>
        <div className={styles.button_container}>
          <Button title="Buy" />
          <a>Learn more</a>
        </div>
      </div>
      <div>
        <Image src={Bannerimg} alt="Banner" />
      </div>
    </div>
  )
}

export default Banner
