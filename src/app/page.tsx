import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Company Website</p>
          <h1>복잡한 문제를 단순한 제품으로 풀어내는 팀</h1>
          <p className={styles.lead}>
            gasplplus는 기술을 실제 서비스 가치로 연결하는 데 집중합니다.
            지금은 회사 소개 사이트의 기본 뼈대를 먼저 구성한 상태입니다.
          </p>
        </section>

        <section className={styles.links}>
          <Link className={styles.card} href="/about">
            <h2>회사 소개</h2>
            <p>팀의 방향성과 철학, 왜 이 회사를 만들었는지 설명합니다.</p>
          </Link>
          <Link className={styles.card} href="/work">
            <h2>하는 일</h2>
            <p>서비스 영역, 기술 역량, 주요 프로젝트를 소개합니다.</p>
          </Link>
          <Link className={styles.card} href="/location">
            <h2>오시는 길</h2>
            <p>주소와 방문 안내, 연락 방법 같은 기본 정보를 안내합니다.</p>
          </Link>
        </section>
      </main>
    </div>
  );
}
