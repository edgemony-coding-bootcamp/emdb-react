import { NavLink } from "react-router-dom";
import styles from "./style.module.scss";

const Nav = (props) => {
  const data = props.data || [];

  return (
    <div className={styles.line}>
      <main className={styles.top}>
        <h1 className={styles.title}>Robba cooool</h1>
        <nav>
          <ul>
            {data.map((item, index) => (
              <li key={index}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.active : undefined
                  }
                  to={item.url}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </main>
    </div>
  );
};

export { Nav };
