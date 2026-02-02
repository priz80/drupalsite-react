import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <div className={styles.formaContainer}>
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