import Button from 'components/Button';
import { FaTwitter } from 'react-icons/fa';
import dataEnter from './data_enter';
import styles from './styles.module.scss';
import twitterLogo from './twitterLogo';

const Enter = () => {
  function renderFooterItems() {
    // eslint-disable-next-line react/no-array-index-key
    return dataEnter.map((v, i) => <span key={i}>{v}</span>);
  }

  return (
    <section className={styles.wrapper}>
      <main>
        <div className={styles.imgArea}>{twitterLogo()}</div>

        <div className={styles.actionArea}>
          <div className={styles.header}>
            <span>
              <FaTwitter />
            </span>
          </div>

          <div className={styles.hero}>
            <h2>
              Şu anda olup <br /> bitenler
            </h2>
          </div>

          <div className={styles.main}>
            <h1>Twitter&#39;a bugün katıl.</h1>
          </div>

          <div className={styles.footer}>
            <div className={styles.buttons}>
              <Button variant="primary" size="lg">
                Kaydol
              </Button>

              <Button variant="secondary" size="lg">
                Giriş Yap
              </Button>
            </div>
          </div>
        </div>
      </main>

      <nav>{renderFooterItems()}</nav>
    </section>
  );
};

export default Enter;
