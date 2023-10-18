import Slider from '../Slider'
import styles from './slidercomponent.module.scss'

function SliderComponent({ product }) {
  return (
    <div className={styles.container}>
      <div className={styles.title_container}>
        <p>Newest ex.iphones. Collection</p>
      </div>
      <Slider product={product} />
    </div>
  )
}

export default SliderComponent
