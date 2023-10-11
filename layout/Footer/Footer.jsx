import Button from '@/components/button'
import styles from './footer.module.scss'
import Logo from '@/assets/svg/Logo_single.svg'
import Facebook from '@/assets/svg/facebook.svg'
import Instagram from '@/assets/svg/instagram.svg'
import Youtube from '@/assets/svg/youtube.svg'
import Twitter from '@/assets/svg/twitter.svg'
import Image from 'next/image'

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.feedback_container}>
          <div className={styles.feedback_title}>
            <p>FEEDBACK</p>
            <p>
              <span>Seeking personalized support?</span> Request a call from our
              team
            </p>
          </div>
          <div className={styles.input_container}>
            <div>
              <p>YOUR NAME</p>
              <input />
            </div>
            <div>
              <p>PHONE NUMBER</p>
              <input />
            </div>
          </div>
          <Button title="Send Request" />

          <a>Privacy</a>
        </div>
        <div className={styles.links_container}>
          <div >
            <div className={styles.outer}>
              <div className={styles.inner}>
                <p>info</p>
                <ul>
                  <li>Company</li>
                  <li>Products</li>
                  <li>Engineering</li>
                  <li>Services</li>
                  <li>Productions</li>
                </ul>
              </div>
              <div className={styles.inner}>
                <p>info</p>
                <ul>
                  <li>Gallery</li>
                  <li>Technologies</li>
                  <li>Contacts</li>
                </ul>
              </div>
              <div>
                <Image src={Logo} alt="Logo" />
              </div>
            </div>
            <div className={styles.outer}>
              <div className={styles.inner}>
                <p>Contact Us</p>
                <ul>
                  <li>Company</li>
                  <li>Products</li>
                  <li>Engineering</li>
                  <li>Services</li>
                  <li>Productions</li>
                </ul>
              </div>
            </div>
            <div className={styles.social}>
              <div className={styles.social_container}>
                <div className={styles.icon_wrapper}>
                  <Image src={Facebook} alt="Facebook" />
                </div>
                <div className={styles.icon_wrapper}>
                  <Image src={Instagram} alt="Instagram" />
                </div>
                <div className={styles.icon_wrapper}>
                  <Image src={Youtube} alt="Youtube" />
                </div>
                <div className={styles.icon_wrapper}>
                  <Image src={Twitter} alt="Twitter" />
                </div>
              </div>
              <p>© 2023 — ex-iphones</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer
