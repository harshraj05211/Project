import React, {useState, useEffect} from "react"
import styles from "../styles/index.scss"
import Login from "../pages/login"
import Loading from "../components/loading"


const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [])
  return (
    <main className={styles.container}>
      
      {
        loading ? <Loading loading={loading}/> : <Login />
      }
    </main>
  )
}

export default App
