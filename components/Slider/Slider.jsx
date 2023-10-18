import styles from './slider.module.scss'
import Image from 'next/image'
// import { Carousel } from 'react-responsive-carousel'
import Button from '../button'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}
const CaruselItems = (props) => {
  return (
    <div className={styles.carusel_element}>
      <div>
        <Image src={props.url} />
      </div>
      <div></div>
      <div>
        <p>{props.name}</p>
        <p>From {props.price}</p>

        <Button title="Buy" />
      </div>
    </div>
  )
}

function Slider({ product }) {
  const customTransition = 'transform 0.5s ease-in-out'
  return (
    <div className={styles.container}>
      <Carousel
        rewindWithAnimation={true}
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={false}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition={customTransition}
        transitionDuration={200}
        containerClass={styles.carousel_container}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        itemClass={styles.carousel_item}
        // centerMode={true}
      >
        {product.map((item, index) => (
          <CaruselItems
            url={item.url}
            key={index}
            name={item.id}
            price={item.price}
          />
        ))}
      </Carousel>
    </div>
  )
}

export default Slider
