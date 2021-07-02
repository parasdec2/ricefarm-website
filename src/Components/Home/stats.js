// import styles from "../ ./css/Home.module.css";
import styles from "../../pages/Home.module.css";
import CountUp from "react-countup";

function Stats() {
  return (
    <div className={styles.stats}>
      <div className={styles.statsItem}>
        <span>
          <CountUp start={0} end={100} delay={1} />+
        </span>
        <h2>Customers</h2>
      </div>
      <div className={styles.statsItem}>
        <span>
          <CountUp start={0} end={100} delay={1} />+
        </span>
        <h2>Years</h2>
      </div>
      <div className={styles.statsItem}>
        <span>
          <CountUp start={0} end={100} delay={1} />+
        </span>
        <h2>Employees</h2>
      </div>
      <div className={styles.statsItem}>
        <span>
          <CountUp start={0} end={100} delay={1} />+
        </span>
        <h2>Countrues</h2>
      </div>
    </div>
  );
}

export default Stats;
