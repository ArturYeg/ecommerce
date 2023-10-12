import Image from 'next/image'
import styles from './colection.module.scss'
import Mac from '@/assets/svg/mac.svg'
import Iphone from '@/assets/svg/iphone.svg'
import Ipad from '@/assets/svg/ipad.svg'
import Watch from '@/assets/svg/watch.svg'
import Airpods from '@/assets/svg/airpods.svg'
import Airtag from '@/assets/svg/airtags.svg'
import Homepod from '@/assets/svg/homepod.svg'
import Accessories from '@/assets/svg/accessories.svg'

const items = [
  {
    id: 'mac',
    url: Mac,
    title: 'Mac',
  },
  {
    id: 'iphone',
    url: Iphone,
    title: 'Iphone',
  },
  {
    id: 'ipad',
    url: Ipad,
    title: 'Ipad',
  },
  {
    id: 'watch',
    url: Watch,
    title: 'Watch',
  },
  {
    id: 'Airpods',
    url: Airpods,
    title: 'Airpods',
  },
  {
    id: 'Airtag',
    url: Airtag,
    title: 'Airtag',
  },
  {
    id: 'Homepod',
    url: Homepod,
    title: 'Homepod',
  },
  {
    id: 'Accessories',
    url: Accessories,
    title: 'Accessories',
  },
]

const CollectionItems = ({ title, url }) => {
  return (
    <div className={styles.item_container}>
      <Image src={url} />
      <p className={styles.item_title}>{title}</p>
    </div>
  )
}

function Collection() {
  return (
    <div className={styles.container}>
      <div>
        <p>Newest Collection Available</p>
      </div>
      <div className={styles.wrapper}>
        {items.map((item) => (
          <CollectionItems key={item.id} title={item.title} url={item.url} />
        ))}
      </div>
    </div>
  )
}

export default Collection
