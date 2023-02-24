import styles from '../style'
import { discount, MyProfile } from '../assets'
import { GoGithub } from './GoGithub'
import { useState } from 'react'
import { TypeWriter } from './TypeWriter'

export const Home = () => {
  const [texts, setTexts] = useState(['Developer', 'Designer', 'Teacher'])
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div
          className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 cursor-pointer"
          onClick={() => {
            window.open(
              'https://github.com/DanielXavierJob/studying-cards-nlw-copa',
            )
          }}
        >
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Show</span> me{' '}
            <span className="text-white">the</span> code
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            I'm <br className="sm:block hidden" />{' '}
            <span className="text-gradient">
              <TypeWriter texts={texts} />
            </span>{' '}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GoGithub />
          </div>
        </div>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With only {new Date().getFullYear() - 2002} years old, he has 15
          certificates of completion of programming courses, one of which is
          participation in havard, with {new Date().getFullYear() - 2015} years
          of experience a full stack developer
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={MyProfile}
          alt="My Profile"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GoGithub />
      </div>
    </section>
  )
}
