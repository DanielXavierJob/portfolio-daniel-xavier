import styles from './style'
import {
  AboutMe,
  Trajectory,
  MyStacksContent,
  MyStacksHeader,
  Footer,
  Navbar,
  Stats,
  Certificates,
  Home,
} from './components'
import {  useEffect, useState } from 'react'
import ctxGithub from './contexts/github-contexts'
const App = () => {
  const [githubStats, setGithubStats] = useState({})
  useEffect(() => {
    getUserStats('DanielXavierJob')
  }, [])
  const getUserStats = async (user) => {
    const args = await fetch(`https://api.github.com/users/${user}`)
      .then((response) => response.json())
      .then((response) => {
        return response
      })
    setGithubStats(args)
  }
  return (
    <ctxGithub.Provider value={githubStats}>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Home />
          </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Trajectory />
            <AboutMe />
            <Certificates />
            <MyStacksHeader />
            <MyStacksContent />
            <Footer />
          </div>
        </div>
      </div>
    </ctxGithub.Provider>
  )
}

export default App
