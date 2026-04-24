import sharedStyles from "../detail-page.module.css";
import styles from "./page.module.css";

// 2026-04-21 콘텐츠 한국어 톤 통일: 제목·눈썹·핵심 가치 제목·본문의 영문 표현을 한국어 세트로 정리함.

const history = [
  {
    year: "2025",
    items: [{ month: "04", text: "안마기업체 신제품PCB및 제품검사지그" }],
  },
  {
    year: "2024",
    items: [
      { month: "09", text: "안마기업체 PCB및 제품 검사지그" },
      { month: "02", text: "드론용파워/통신/센싱보드개발" },
    ],
  },
  {
    year: "2023",
    items: [
      { month: "12", text: "낙하산시뮬레이터전장제작설치" },
      { month: "04", text: "경찰VR시뮬레이터하드웨어" },
    ],
  },
  {
    year: "2022",
    items: [{ month: "11", text: "오토바이무선충전거치대개발양산" }],
  },
  {
    year: "2021",
    items: [{ month: "12", text: "마그네틱활용 복강경마킹장비개발" }],
  },
  {
    year: "2020",
    items: [{ month: "12", text: "드론 파워보드, 파워분배보드" }],
  },
  {
    year: "2019",
    items: [
      { month: "12", text: "AI32채널 측정 및 디스플레이보드" },
      { month: "11", text: "LYNX해군 패널류 성능개선" },
      { month: "07", text: "반도체공정 웨이퍼온도측정" },
    ],
  },
  {
    year: "2018",
    items: [
      { month: "10", text: "태양광무선수로개폐장치" },
      { month: "07", text: "잠수함시뮬레이터패널류7종개발" },
      { month: "03", text: "자동차 휠 속도센서 WSS개발" },
      { month: "03", text: "가로등150W LED드라이브&가시광통신" },
    ],
  },
  {
    year: "2017",
    items: [
      { month: "12", text: "LYXY CFT 성능개선사업 참여" },
      { month: "03", text: "미래테크원 zigbee node 보드" },
      { month: "03", text: "미래테크원 8W LED 등 개발" },
      { month: "01", text: "신발건조기개발" },
    ],
  },
  {
    year: "2016",
    items: [
      { month: "12", text: "다목적실용위성 6호 Baseband TIU보드" },
      { month: "06", text: "보카보카 커피로스터기계전장개발" },
      { month: "01", text: "GRA시뮬레이터" },
    ],
  },
  {
    year: "2015",
    items: [
      { month: "12", text: "가스펠플러스 설립" },
      { month: "12", text: "GRA시뮬레이터" },
    ],
  },
];

export default function AboutPage() {
  return (
    <div className={sharedStyles.page}>
      <main className={sharedStyles.main}>
        <section className={styles.story}>
          <div className={styles.storyHeader}>
            <p className={styles.eyebrow}>회사 소개</p>
            <h1>GASPLPLUS는 어떤 회사인가요?</h1>
          </div>
          <div className={styles.storyBody}>
            <p className={styles.storyLead}>
              GASPLPLUS는 임베디드 하드웨어와 소프트웨어를 함께 다루는
              엔지니어링 기업입니다. <br /> 2015년 창업 이후 축적한 경험과 기술을
              바탕으로 다양한 산업의 요구사항과 기술 문제를 해결하며, 고객의
              가치를 키우는 기획과 협력, 개발과 구현, 성장 동반의 흐름을 만들어
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
              <h2>기획과 협력</h2>
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
              <h2>개발과 구현</h2>
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
              <h2>성장 동반</h2>
              <p>
                위탁 연구개발, 자사 제품, 센서 모듈 개발과 생산 및 납품까지
                이어지는 원스톱 서비스를 제공합니다. 고객의 성장 과정에
                실질적으로 기여하는 실행형 파트너가 되는 것이 목표입니다.
              </p>
            </div>
          </article>
        </section>

        <section className={styles.history} aria-labelledby="history-title">
          <div className={styles.historyHeader}>
            <p className={styles.historyEyebrow}>연혁</p>
            <h2 id="history-title">기업 연혁</h2>
            <p>
              2015년 설립 이후 진행해 온 주요 개발 이력입니다. 이미지가 아닌
              텍스트 타임라인으로 정리해 이후 수정과 확장이 쉽도록 구성했습니다.
            </p>
          </div>

          <div className={styles.timeline}>
            {history.map((group) => (
              <article className={styles.timelineGroup} key={group.year}>
                <div className={styles.timelineMarker} aria-hidden="true">
                  <span className={styles.timelineDot} />
                </div>
                <div className={styles.timelineCard}>
                  <p className={styles.timelineYear}>{group.year}</p>
                  <ul className={styles.timelineList}>
                    {group.items.map((item) => (
                      <li key={`${group.year}-${item.month}-${item.text}`}>
                        <span className={styles.timelineDate}>
                          {group.year}. {item.month}.
                        </span>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
