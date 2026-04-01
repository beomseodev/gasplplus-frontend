import styles from "../detail-page.module.css";

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>About</p>
          <h1>회사 소개</h1>
          <p>
            gasplplus가 어떤 문제를 풀고 있으며, 어떤 관점으로 제품을
            만들어가는지 설명하는 페이지입니다.
          </p>
        </section>

        <div className={styles.content}>
          <section>
            <h2>우리가 보는 문제</h2>
            <p>
              고객이 실제로 겪는 복잡한 업무나 기술 문제를 더 단순한 흐름으로
              바꾸는 데 집중합니다.
            </p>
          </section>
          <section>
            <h2>일하는 방식</h2>
            <p>
              과한 기능보다 분명한 목적을 우선하고, 작은 단위로 빠르게
              검증하면서 제품을 발전시킵니다.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
