import React from 'react';
import styles from './Modal.module.css';


const Modal = ({ isOpen = false, onClose, triggerRect }) => {
  if (!isOpen) return null;

  // Позиция кнопки и центр модального окна
  const centerX = triggerRect ? triggerRect.left + triggerRect.width / 2 : window.innerWidth / 2;
  const centerY = triggerRect ? triggerRect.top + triggerRect.height / 2 : window.innerHeight / 2;

  // Стартовая позиция контейнера (центр кнопки)
  const containerStyle = {
    /* position: 'absolute',
    left: `${centerX}px`,
    top: `${centerY}px`,
    transform: 'translate(-50%, -50%) scale(0.1)',
    opacity: 0 */
  };

  // Элемент будет анимироваться через requestAnimationFrame
  React.useEffect(() => {
    const container = document.querySelector(`.${styles.formaContainer}`);
    if (!container) return;

    // Плавное появление
    let start = null;
    const duration = 300; // мс

    const animateIn = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      
      // Интерполяция параметров
      const scale = 0.1 + progress * 0.9; // от 0.1 до 1.0
      const opacity = progress;

      container.style.opacity = opacity;
      container.style.transform = `scale(${scale})`;

      if (progress < 1) {
        requestAnimationFrame(animateIn);
      }
    };

    requestAnimationFrame(animateIn);

    // Очистка при закрытии
    return () => {
      const animateOut = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const scale = 1 - progress * 0.9; // от 1.0 до 0.1
        const opacity = 1 - progress;

        container.style.opacity = opacity;
        container.style.transform = `scale(${scale})`;

        if (progress < 1) {
          requestAnimationFrame(animateOut);
        }
      };
      requestAnimationFrame(animateOut);
    };
  }, [isOpen]);

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <div className={styles.formaContainer} style={containerStyle}>
          <form className={styles.forma} action="#" method="post">
            <input
              type="text"
              name="name"
              placeholder="Ваше имя"
              required
              className={styles.inputArea}
              aria-label="Ваше имя"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Телефон"
              required
              className={styles.inputArea}
              aria-label="Телефон"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className={styles.inputArea}
              aria-label="Email"
            />
            <textarea
              name="comment"
              placeholder="Ваш комментарий"
              className={styles.textArea}
              aria-label="Ваш комментарий"
            ></textarea>

            <div className={styles.agreement}>
              <input
                type="checkbox"
                name="agreement"
                id="agreement"
                className={styles.checkbox}
                required
              />
              <label htmlFor="agreement">
                Отправляя заявку, я даю согласие на обработку своих
                персональных данных
              </label>
            </div>
            <button type="submit" className={`${styles.button} ${styles.formaButton}`}>
              Оставить заявку
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;