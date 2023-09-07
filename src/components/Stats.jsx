import { useContext} from 'react'
import {ctxGithub} from '../contexts/github-contexts'
import styles from '../style'
import { certificates } from '../constants'

export const Stats = () => {
  const ctx = useContext(ctxGithub)
  return (
    <section
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
    >
      <div className={`flex-1 flex justify-start items-center flex-row m-3`}>
        <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
          {ctx.public_repos}
        </h4>
        <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
          Public Repository's
        </p>
      </div>
      <div className={`flex-1 flex justify-start items-center flex-row m-3`}>
        <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
          25+
        </h4>
        <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
         Private Repository's 
        </p>
      </div>
      <div className={`flex-1 flex justify-start items-center flex-row m-3`}>
        <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
          {certificates.length}+
        </h4>
        <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
         Certificates
        </p>
      </div>
      <div className={`flex-1 flex justify-start items-center flex-row m-3`}>
        <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
          {ctx.followers}
        </h4>
        <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
         Followers
        </p>
      </div>
    </section>
  )
}

