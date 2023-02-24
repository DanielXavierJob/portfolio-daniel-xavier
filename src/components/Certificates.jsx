import { certificates } from '../constants'
import styles from '../style'
import FeedbackCard from './FeedbackCard'
import * as assets from '../assets'
const Certificates =  () => {
  return (
    <section
      id="certificates"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
  
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>My certificates</h2>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            The battle only becomes impossible when you stop fighting it.
          </p>
        </div>
      </div>
  
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {certificates.map((item, index) => (
          <FeedbackCard key={`certificate-${index}`} img={assets[item]} />
        ))}
      </div>
    </section>
  )
}

export default Certificates
