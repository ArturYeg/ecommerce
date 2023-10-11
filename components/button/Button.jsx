import styles from './button.module.scss'
function Button({ title }) {
  return (
    <div className={styles.container}>
      <p>{title}</p>
    </div>
  )
}

export default Button
