
import styles from './style.module.scss';

const Button = (props) => <button className={styles.button}>{props.children}</button>

export {
  Button
}