import React, { useState, useEffect } from 'react';
import style from './Reviews.module.css';

const Reviews = () => {
  // Данные для отзывов
  const reviewsData = [
    {
      logo: './img/reviews_img/lpcma_rus_v4.jpg',
      title: 'Произвольный текст на кириллице длиной около 1200 символов. Это начало большого текста, который используется для демонстрации наполнения контента в системе. В этом тексте могут быть упомянуты различные темы, связанные с веб-разработкой, дизайном и поддержкой сайтов на платформе Drupal. Мы пишем этот текст, чтобы заполнить поле title в массиве reviewsData. Текст должен быть информативным и содержать разнообразные слова и предложения. Важно, чтобы он был на кириллице и имел приблизительно 1200 символов, включая пробелы. Продолжаем писать, чтобы достичь нужной длины.',
      subtitle: 'Клиент',
      text: 'Отличная команда! Работают профессионально и быстро.'
    },
    {
      logo: './img/reviews_img/lpcma_rus_v4.jpg',
      title: 'Нужно добавить ещё немного текста, чтобы точно попасть в лимит. Возможно, стоит включить упоминание о современных технологиях, использовании JavaScript, CSS и HTML при создании интерактивных элементов на сайте. Также можно затронуть тему адаптивного дизайна и оптимизации производительности. Всё это важно для успешной работы современного веб-сайта. Надеемся, что данный текст подойдёт для тестирования и демонстрации функционала. Добавим ещё несколько предложений для надёжности и проверим общую длину символов. Произвольный текст на кириллице длиной около 1200 символов.',
      subtitle: 'Заказчик',
      text: 'Очень довольна результатом работы. Рекомендую!'
    },
    {
      logo: './img/reviews_img/image-winamp.png',
      title: 'В этом тексте могут быть упомянуты различные темы, связанные с веб-разработкой, дизайном и поддержкой сайтов на платформе Drupal. Мы пишем этот текст, чтобы заполнить поле title в массиве reviewsData. Текст должен быть информативным и содержать разнообразные слова и предложения. Важно, чтобы он был на кириллице и имел приблизительно 1200 символов, включая пробелы. Продолжаем писать, чтобы достичь нужной длины. Нужно добавить ещё немного текста, чтобы точно попасть в лимит. Возможно, стоит включить упоминание о современных технологиях, использовании JavaScript, CSS и HTML при создании интерактивных элементов на сайте.',
      subtitle: 'Партнер',
      text: 'Надежные и ответственные исполнители. Спасибо!'
    }
  ];

  // Состояние для текущего индекса отзыва
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  // Обновление индекса при изменении данных
  useEffect(() => {
    if (reviewsData.length > 0) {
      // Убедимся, что индекс в пределах допустимого диапазона
      if (currentReviewIndex >= reviewsData.length) {
        setCurrentReviewIndex(reviewsData.length - 1);
      }
    }
  }, [reviewsData.length, currentReviewIndex]);

  // Функция для перехода к предыдущему отзыву
  const goToPrevReview = () => {
    setCurrentReviewIndex(prevIndex => 
      prevIndex > 0 ? prevIndex - 1 : reviewsData.length - 1
    );
  };

  // Функция для перехода к следующему отзыву
  const goToNextReview = () => {
    setCurrentReviewIndex(prevIndex => 
      prevIndex < reviewsData.length - 1 ? prevIndex + 1 : 0
    );
  };

  // Получаем текущий отзыв
  const currentReview = reviewsData[currentReviewIndex];

  // Вычисляем значения для счетчиков
  const leftCount = currentReviewIndex > 0 ? currentReviewIndex : reviewsData.length;
  const rightCount = currentReviewIndex < reviewsData.length - 1 ? currentReviewIndex + 2 : 1;

  return (
    <div className={style['reviews-container']}>
      <div className={style['reviews-slider_container']}>
        <div className={style['reviews-header']}>
          <div className={style['reviews-logo']} style={{
            backgroundImage: `url(${currentReview.logo})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}></div>
          <div className={style['reviews-texts']}>
            <h3 className={style['reviews-title']}>{currentReview.title}</h3>
            <p className={style['reviews-subtitle']}>{currentReview.subtitle}</p>
          </div>
          <div className={style['reviews-content']}>
          <p className={style['reviews-description']}>{currentReview.text}</p>
        </div>
        </div>
        
        <div className={style['separator']}></div>
        
        <div className={style['reviews-controls']}>
          <button 
            className={style['reviews-arrow'] + ' ' + style['reviews-arrow_left']} 
            onClick={goToPrevReview}
            aria-label="Предыдущий отзыв"
          >
            
          </button>
          
          <span className={style['left-arrow_count']}>{leftCount}</span>
          <span>/</span>
          <span className={style['right-arrow_count']}>{rightCount}</span>
          <button 
            className={style['reviews-arrow'] + ' ' + style['reviews-arrow_right']} 
            onClick={goToNextReview}
            aria-label="Следующий отзыв"
          >
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;