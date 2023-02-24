import styles from "../style";

const MyStacksHeader = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>My Stacks</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      This is just a little bit of what I can know
      </p>
    </div>
  </section>
);

export default MyStacksHeader;
