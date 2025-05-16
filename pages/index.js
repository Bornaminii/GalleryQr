import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <a
          href="https://www.instagram.com/kaveh.aminiraouf?igsh=MXFxdGN1cjlib2p0OA=="
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Instagram Profile
        </a>

        <p className={styles.text}>اسم تابلو : شاهنامه</p>
        <p className={styles.text}>اندازه : 2*2</p>
        <p className={styles.text}>تکنیک : میکس مدیا</p>
        <p className={styles.text}>قیمت : 70م</p>

        <div className={styles.spacer}></div>

        <p className={styles.text}>اسم تابلو : سرو</p>
        <p className={styles.text}>اندازه : 2*2</p>
        <p className={styles.text}>تکنیک : میکس مدیا</p>
        <p className={styles.text}>قیمت : 55م</p>

        <div className={styles.spacer}></div>

        <p className={styles.text}>اسم تابلو : اسب بالدار شرقی</p>
        <p className={styles.text}>اندازه : 110*110</p>
        <p className={styles.text}>تکنیک : میکس مدیا</p>
        <p className={styles.text}>قیمت : 40م</p>
      </div>
    </div>
  )
}
