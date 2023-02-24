import styles from "../style";
import { arrowUp } from "../assets";
import {ctxGithub} from '../contexts/github-contexts'
import { useContext } from "react";

export const GoGithub = () => {
  const {html_url} = useContext(ctxGithub)
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`} onClick={() => {
      window.open(html_url)
    }}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="text-gradient">Github</span>
          </p>
          <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
        </div>
        
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Profile</span>
        </p>
      </div>
    </div>
  )
};
