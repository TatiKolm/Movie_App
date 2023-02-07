import Footer from "../components/footer";
import "../styles/globals.css";
import styles from "../styles/Home.module.css"

function myApp ({Component, pageProps}) {
    return (
     <div className={styles.container}>
        <Component {...pageProps} />

        <Footer /> 
     </div>
    )
} 

export default myApp