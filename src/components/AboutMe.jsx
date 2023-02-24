import { MyProfile } from '../assets'
import styles, { layout } from '../style'

export const AboutMe = () => (
  <section id="about_me" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={MyProfile}
        alt="About me"
        className="w-[100%] h-[100%] relative z-[5]"
        style={{
          width: '70%',
          filter: 'saturate(1.5) contrast(1.2)',
        }}
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>About me</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        I am {new Date().getFullYear() - 2002} years old and I currently live in Natal-RN. I love programming in
        javascript and knowing a little about everything, currently I have
        knowledge in more than 10 programming languages, where some repositories
        in which I do studies are available on my github
      </p>
    </div>
  </section>
)
