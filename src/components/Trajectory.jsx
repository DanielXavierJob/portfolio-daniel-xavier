import { steps } from '../constants'
import styles, { layout } from '../style'

const TrajectoryCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== steps.length - 1 ? 'mb-6' : 'mb-0'
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
)

const Trajectory = () => (
  <section id="how_did" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>How did I get here?</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Since 2015 I felt the immense desire to learn about the future of
        humanity, including technology. With the encouragement of family
        members, I followed this branch until today, where every day I go deeper
        and deeper
      </p>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {steps.map((feature, index) => (
        <TrajectoryCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
)

export default Trajectory
