import styles from './page.module.scss'
import { PortfolioHome } from './sections/PortfolioHome'

export default function Home() {
  return (
    <div className={styles.main}>
      <PortfolioHome />
    </div>
  )
}
