import styles from "../styles/components/Spinner.module.css";

const Spinner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Spinner;
