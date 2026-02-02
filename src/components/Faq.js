import React, { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Как начать работать с нами?",
      answer: "Для начала работы с нами достаточно оставить заявку на сайте или связаться по указанным контактам. Наш менеджер свяжется с вами в течение 24 часов."
    },
    {
      question: "Какие сроки выполнения проектов?",
      answer: "Сроки зависят от сложности проекта и оговариваются индивидуально. В среднем, веб-сайт средней сложности разрабатывается за 4-6 недель."
    },
    {
      question: "Можете ли вы помочь с продвижением сайта?",
      answer: "Да, мы предоставляем комплексные услуги по SEO-оптимизации и контекстной рекламе для эффективного продвижения вашего сайта."
    },
    {
      question: "Предоставляете ли вы техническую поддержку после сдачи проекта?",
      answer: "Да, мы предлагаем различные тарифы технической поддержки и сопровождения сайтов после их запуска."
    }
  ];

  return (
    <div className="faq-container">
      <h2 className="faq-title">Часто задаваемые вопросы</h2>
      {faqData.map((item, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? 'faq-active' : ''}`}
        >
          <div
            className="faq-question"
            onClick={() => toggleFAQ(index)}
          >
            {item.question}
          </div>
          <div
            className="faq-answer"
            style={{ display: activeIndex === index ? 'block' : 'none' }}
          >
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;