import { Button } from "./../../components/Button";
import styles from "./style.module.scss";

const Add = () => {
  const year = new Date().getFullYear();

  return (
    <form className={styles.form}>
      <h3>Create a new movie card</h3>
      <div className={styles.row}>
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" />
      </div>
      <div className={styles.row}>
        <label htmlFor="year">Year:</label>
        <input type="number" name="year" min="1895" max={year} />
      </div>
      <div>
        <Button>+ Add to the database</Button>
      </div>
    </form>
  );
};

export default Add;
