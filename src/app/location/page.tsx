import styles from "../detail-page.module.css";

export default function LocationPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Location</p>
          <h1>오시는 길</h1>
          <p>
            방문 전 필요한 위치 정보와 연락 방법을 정리하는 페이지입니다.
          </p>
        </section>

        <div className={styles.content}>
          <section>
            <h2>주소</h2>
            <p>대전광역시 유성구 배울1로 277, 4동</p>
          </section>
          <section>
            <h2>방문 안내</h2>
            <p>방문 전 일정이 있다면 미리 연락해주시면 안내가 수월합니다.</p>
          </section>
          <section>
            <h2>지도</h2>
            <div className={styles.mapBox}>
              <iframe
                className={styles.mapFrame}
                title="gasplplus location"
                src="https://www.google.com/maps?q=%EB%8C%80%EC%A0%84%EA%B4%91%EC%97%AD%EC%8B%9C%20%EC%9C%A0%EC%84%B1%EA%B5%AC%20%EB%B0%B0%EC%9A%B81%EB%A1%9C%20277%204%EB%8F%99&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
