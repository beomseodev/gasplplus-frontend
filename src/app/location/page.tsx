import sharedStyles from "../detail-page.module.css";
import styles from "./page.module.css";

// 2026-04-21 콘텐츠 한국어 톤 통일: 눈썹·카드 라벨·지도 제목·iframe 접근성 제목을 한국어로 정리함.

export default function LocationPage() {
  return (
    <div className={sharedStyles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroHeader}>
            <p className={styles.eyebrow}>오시는 길</p>
            <h1>오시는 길</h1>
          </div>
          <div className={styles.heroBody}>
            <p className={styles.heroLead}>
              방문 전 필요한 위치 정보와 방문 안내를 한 번에 확인할 수 있도록
              정리했습니다. 지도와 주소를 함께 보고 이동 경로를 확인할 수
              있습니다.
            </p>
            <div className={styles.heroChips} aria-label="방문 정보">
              <span>대전광역시 유성구</span>
              <span>배울1로 277, 4동</span>
            </div>
          </div>
        </section>

        <section className={styles.info} aria-labelledby="visit-info-title">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>방문 안내</p>
            <h2 id="visit-info-title">방문 정보</h2>
          </div>

          <div className={styles.infoGrid}>
            <article className={styles.infoCard}>
              <p className={styles.cardEyebrow}>주소</p>
              <h3>주소</h3>
              <p>대전광역시 유성구 배울1로 277, 4동</p>
            </article>

            <article className={styles.infoCard}>
              <p className={styles.cardEyebrow}>안내</p>
              <h3>방문 안내</h3>
              <p>방문 전 일정이 있다면 미리 연락해주시면 안내가 수월합니다.</p>
            </article>
          </div>
        </section>

        <section className={styles.mapSection} aria-labelledby="map-title">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>지도</p>
            <h2 id="map-title">지도</h2>
          </div>

          <div className={styles.mapCard}>
            <div className={styles.mapCopy}>
              <h3>사무실 위치</h3>
              <p>
                대전광역시 유성구 배울1로 277, 4동
              </p>
            </div>
            <div className={styles.mapBox}>
              <iframe
                className={styles.mapFrame}
                title="GASPLPLUS 사무실 위치 지도"
                src="https://www.google.com/maps?q=%EB%8C%80%EC%A0%84%EA%B4%91%EC%97%AD%EC%8B%9C%20%EC%9C%A0%EC%84%B1%EA%B5%AC%20%EB%B0%B0%EC%9A%B81%EB%A1%9C%20277%204%EB%8F%99&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
