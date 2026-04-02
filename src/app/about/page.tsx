import sharedStyles from "../detail-page.module.css";
import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <div className={sharedStyles.page}>
      <main className={sharedStyles.main}>
        <section className={styles.story}>
          <div className={styles.storyHeader}>
            <p className={styles.eyebrow}>About</p>
            <h1>What is GASPLPLUS?</h1>
          </div>
          <div className={styles.storyBody}>
            <p className={styles.storyLead}>
              GASPLPLUS는 임베디드 하드웨어와 소프트웨어를 함께 다루는
              엔지니어링 기업입니다. <br /> 2015년 창업 이후 축적한 경험과 기술을
              바탕으로 다양한 산업의 요구사항과 기술 문제를 해결하며, 고객의
              가치를 키우는 Thinking - Development - Growth의 흐름을 만들어
              왔습니다.
            </p>
            <div className={styles.principles} aria-label="기업 이념">
              <span>사람을 이롭게</span>
              <span>자연을 아름답게</span>
              <span>사회를 따뜻하게</span>
            </div>
          </div>
        </section>

        <section className={styles.pillars} aria-label="핵심 가치">
          <article className={`${styles.pillar} ${styles.thinking}`}>
            <span className={styles.pillarIndex}>01</span>
            <div className={styles.pillarContent}>
              <h2>Thinking</h2>
              <p>
                고객의 요구사항과 문제점을 분석해 최적의 솔루션을 제안합니다.
                단순히 개발만 수행하는 조직이 아니라, 함께 방향을 고민하고
                생각과 기술을 공유하는 협력 파트너를 지향합니다.
              </p>
            </div>
          </article>
          <article className={`${styles.pillar} ${styles.development}`}>
            <span className={styles.pillarIndex}>02</span>
            <div className={styles.pillarContent}>
              <h2>Development</h2>
              <p>
                축적된 노하우를 바탕으로 임베디드 기반의 다양한 솔루션을
                구현합니다. PC뿐 아니라 Android, iOS 등 여러 환경을 아우르는
                통합 관리와 제어 경험까지 연결합니다.
              </p>
            </div>
          </article>
          <article className={`${styles.pillar} ${styles.growth}`}>
            <span className={styles.pillarIndex}>03</span>
            <div className={styles.pillarContent}>
              <h2>Growth</h2>
              <p>
                위탁 연구개발, 자사 제품, 센서 모듈 개발과 생산 및 납품까지
                이어지는 One Stop 서비스를 제공합니다. 고객의 성장 과정에
                실질적으로 기여하는 실행형 파트너가 되는 것이 목표입니다.
              </p>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}
