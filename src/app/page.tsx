import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Embedded Engineering Company</p>
            <h1>설계부터 생산까지 이어지는 임베디드 엔지니어링</h1>
            <p className={styles.lead}>
              GASPLPLUS는 임베디드 하드웨어와 소프트웨어를 함께 다루는
              엔지니어링 기업입니다. 다양한 산업의 요구사항을 바탕으로
              시스템을 설계하고 구현하며, 실제 현장에 적용 가능한 결과물까지
              연결합니다.
            </p>
            <div className={styles.principles} aria-label="핵심 흐름">
              <span>Hardware</span>
              <span>Software</span>
              <span>System Integration</span>
            </div>
          </div>

          <div className={styles.heroPanel}>
            <p className={styles.panelLabel}>Project Scope</p>
            <ul className={styles.panelList}>
              <li>전장설계제작, 회로설계, 아트웍</li>
              <li>시스템개발, 통합 제어, 보드개발양산</li>
              <li>점검장비, 시뮬레이터, VR/AR 장비개발</li>
            </ul>
          </div>
        </section>
        <section className={styles.links} aria-label="바로가기">
          <Link className={styles.card} href="/about">
            <p className={styles.cardEyebrow}>About</p>
            <h2>회사 소개</h2>
            <p>
              회사의 방향성과 철학, Thinking - Development - Growth 구조를
              확인할 수 있습니다.
            </p>
          </Link>
          <Link className={styles.card} href="/work">
            <p className={styles.cardEyebrow}>Work</p>
            <h2>하는 일</h2>
            <p>
              설계, 개발, 점검장비, 시뮬레이터, VR/AR 등 실제 업무 영역을
              살펴볼 수 있습니다.
            </p>
          </Link>
          <Link className={styles.card} href="/location">
            <p className={styles.cardEyebrow}>Location</p>
            <h2>오시는 길</h2>
            <p>주소와 방문 안내 등 기본 정보를 확인할 수 있습니다.</p>
          </Link>
        </section>
      </main>
    </div>
  );
}
