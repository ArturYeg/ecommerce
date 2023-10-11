import Image from 'next/image'
import styles from './homepagetitle.module.scss'
import Iphone from '@/assets/img/iphone.png'
import Button from '../button'
import bgImg from '../../assets/img/iphone.png'
import { CiSearch } from 'react-icons/ci'
function HomePageTitle() {
  return (
    <div className={styles.container}>
      <div className={styles.bg}>
        <div className={styles.wrapper}>
          <h1>Discover Most Affordable Apple products</h1>
          <p>
            Find the best, reliable and affordable apple products here. We focus
            on the product quality. Here you can find all the products apple
            ever made. Even the products apple officially stopped selling. So
            why you are waiting? Just order now!
          </p>
          <div className={styles.search_container}>
            <CiSearch size={21} color="#3858D6" />
            <input placeholder="Find the best product" />
            <Button title="Search" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePageTitle
