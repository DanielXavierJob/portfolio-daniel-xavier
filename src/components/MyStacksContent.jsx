import { stacks } from '../constants'
import styles from '../style'

export const MyStacksContent = () => (
  <section className={`${styles.flexCenter} my-4`} id="stacks">
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {stacks.sort((prev, next) => prev < next ? -1 : 1).map((item, index) => (
        <div key={index} className={`flex-1 ${styles.flexCenter}m-5 p-2`}>
          <i
            className={`devicon-${item}-plain`}
            style={{ color: 'white', fontSize: '4rem' }}
            title={item}
          ></i>
        </div>
      ))}
    </div>
  </section>
)

