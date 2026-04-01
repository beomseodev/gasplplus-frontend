import styles from "../detail-page.module.css";

export default function WorkPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Work</p>
          <h1>하는 일</h1>
          <p>
            전장설계제작, 시스템개발, 회로설계/아트웍, 보드개발양산, 점검장비, 시뮬레이터, VR/AR장비개발
          </p>
        </section>

        <div className={styles.content}>
          <section>
            <h2>전장설계제작</h2>
            <p>
              전장설계제작 설명
            </p>
          </section>
          <section>
            <h2>시스템개발</h2>
            <p>
              시스템개발 설명
            </p>
          </section>
          <section>
            <h2>회로설계/아트웍</h2>
            <p>
              회로설계/아트웍 설명
            </p>
          </section>
          <section>
            <h2>보드개발양산</h2>
            <p>
              보드개발양산 설명
            </p>
          </section>
          <section>
            <h2>점검장비</h2>
            <p>
              점검장비 설명
            </p>
          </section>
          <section>
            <h2>시뮬레이터</h2>
            <p>
              시뮬레이터 설명
            </p>
          </section>
          <section>
            <h2>VR/AR장비개발</h2>
            <p>
              VR/AR장비개발 설명
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
