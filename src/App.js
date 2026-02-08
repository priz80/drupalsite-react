import "./App.css";
import Modal from './components/Modal';
import { useState } from 'react';
import Reviews from './components/Reviews';
import Faq from './components/Faq';


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [triggerRect, setTriggerRect] = useState(null);
  return (
    <div className="App.css">
      
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
      <header className="header">
        <video autoPlay muted loop playsInline>
      <source src="./video/video.mp4" type="video/mp4" />
      Ваш браузер не поддерживает воспроизведение этого видео.
    </video>

        <div className="druplicon">
          <img src="./img/header_img/druplicon.svg" alt="Drupal" />
        </div>
        <div className="container container-menu desktop-menu">
          <div className="logo">
            <a href="/">
              <img src="./img/menu_img/drupal-coder.svg" alt="Logo" />
            </a>
          </div>

          <nav className="dropdown-menu">
            <ul>
              <li className="under-line">
                <a href="#services">Поддержка drupal</a>
              </li>
              <li className="dropdown">
                <a href="#administration">Администрирование ▼</a>
                <ul className="dropdown-content">
                  <li>
                    <a href="#migration">Миграция</a>
                  </li>
                  <li>
                    <a href="#backups">Бэкапы</a>
                  </li>
                  <li>
                    <a href="#security">Аудит безопасности</a>
                  </li>
                  <li>
                    <a href="#optimization">Оптимизация скорости</a>
                  </li>
                  <li>
                    <a href="#https">Переезд на https</a>
                  </li>
                </ul>
              </li>
              <li className="under-line">
                <a href="#promotion">Продвижение</a>
              </li>
              <li className="under-line">
                <a href="#advertising">Реклама</a>
              </li>
              <li className="dropdown">
                <a href="#about">О нас ▼</a>
                <ul className="dropdown-content">
                  <li>
                    <a href="#team">Команда</a>
                  </li>
                  <li>
                    <a href="#drupalgive">Drupalgive</a>
                  </li>
                  <li>
                    <a href="#blog">Блог</a>
                  </li>
                  <li>
                    <a href="#courses">Курсы drupal</a>
                  </li>
                </ul>
              </li>
              <li className="under-line">
                <a href="#cases">Проекты</a>
              </li>
              <li className="under-line">
                <a href="#contacty">Контакты</a>
              </li>
            </ul>
          </nav>

          <div
            className="burger-mobile"
            aria-label="Открыть меню"
            aria-expanded="false"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <nav className="mobile-menu-mobile">
            <div className="header-block header-block_background">
              <div className="header-content">
                <h1>Поддержка сайтов на Drupal</h1>
                <p>
                  Сопровождение и поддержка сайтов
                  <br />
                  на CMS Drupal любых версий и запущенности
                </p>
              </div>
            </div>
            <ul>
              <li className="mobile-item_color">
                <a href="#services">Поддержка drupal</a>
              </li>
              <li className="dropdown mobile-item_color">
                <a href="#">Администрирование ▼</a>
                <ul className="dropdown-content_mobile mobile-item_color">
                  <li>
                    <a href="#migration">Миграция</a>
                  </li>
                  <li>
                    <a href="#backups">Бэкапы</a>
                  </li>
                  <li>
                    <a href="#security">Аудит безопасности</a>
                  </li>
                  <li>
                    <a href="#optimization">Оптимизация скорости</a>
                  </li>
                  <li>
                    <a href="#https">Переезд на https</a>
                  </li>
                </ul>
              </li>
              <li className="mobile-item_color">
                <a href="#promotion">Продвижение</a>
              </li>
              <li className="mobile-item_color">
                <a href="#advertising">Реклама</a>
              </li>
              <li className="dropdown mobile-item_color">
                <a href="#about">О нас ▼</a>
                <ul className="dropdown-content_mobile mobile-item_color">
                  <li>
                    <a href="#team">Команда</a>
                  </li>
                  <li>
                    <a href="#drupalgive">Drupalgive</a>
                  </li>
                  <li>
                    <a href="#blog">Блог</a>
                  </li>
                  <li>
                    <a href="#courses">Курсы drupal</a>
                  </li>
                </ul>
              </li>
              <li className="mobile-item_color">
                <a href="#cases">Проекты</a>
              </li>
              <li className="mobile-item_color">
                <a href="#contacty">Контакты</a>
              </li>
            </ul>
          </nav>
        </div>

        <section id="head">
          <div className="container header-container">
            <div className="header-block">
              <div className="header-content">
                <h1>Поддержка сайтов на Drupal</h1>
                <p>
                  Сопровождение и поддержка сайтов
                  <br />
                  на CMS Drupal любых версий и запущенности
                </p>
                <a href="#plans" className="button header-button">
                  {" "}
                  Тарифы{" "}
                </a>
              </div>
              <div className="header-promo_block">
                <div className="item-promo">
                  <div className="vline"></div>
                  <div className="item-block">
                    <div className="item-cup">
                      <div className="item-num item-nums">#1</div>
                      <div className="cup">
                        <img src="./img/header_img/cup.png" alt="Кубок" />
                      </div>
                    </div>
                    <div className="item-text">
                      Drupal-разработчик в России по версии Рейтинга Рунета
                    </div>
                  </div>
                </div>
                <div className="item-promo">
                  <div className="vline"></div>
                  <div className="item-block">
                    <div className="item-num">3+</div>
                    <div className="item-text">
                      средний опыт специалистов более 3 лет
                    </div>
                  </div>
                </div>
                <div className="item-promo">
                  <div className="vline"></div>
                  <div className="item-block">
                    <div className="item-num">14</div>
                    <div className="item-text">лет опыта в сфере Drupal</div>
                  </div>
                </div>
                <div className="item-promo">
                  <div className="vline"></div>
                  <div className="item-block">
                    <div className="item-num">200+</div>
                    <div className="item-text">
                      модулей и тем в формате DrupalGive
                    </div>
                  </div>
                </div>
                <div className="item-promo">
                  <div className="vline"></div>
                  <div className="item-block">
                    <div className="item-num">35 000</div>
                    <div className="item-text">
                      часов поддержки сайтов на Drupal
                    </div>
                  </div>
                </div>
                <div className="item-promo">
                  <div className="vline"></div>
                  <div className="item-block">
                    <div className="item-num">200+</div>
                    <div className="item-text">Проектов на поддержке</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>

      <main>
        
        <section id="services">
          <div className="container">
            <div className="services-title">
              <h2>13 лет совершенствуем компетенции в Drupal поддержке!</h2>
            </div>
            <div className="services-subtitle">
              <p>
                Разрабатываем и оптимизируем модули, расширяем функциональность
                сайтов, обновляем дизайн
              </p>
            </div>
            <div className="services-item_block">
              <div className="services-item">
                <div className="services-item_img">
                  <img src="./img/services_img/icon/item-img.svg" alt="" />
                </div>
                <div className="services-item_icon">
                  <img src="./img/services_img/icon/1.svg" alt="" />
                </div>
                <div className="services-item_text">
                  Добавление информации на сайт, создание новых разделов
                </div>
              </div>
              <div className="services-item">
                <div className="services-item_img">
                  <img src="./img/services_img/icon/item-img.svg" alt="" />
                </div>
                <div className="services-item_icon">
                  <img src="./img/services_img/icon/2.svg" alt="" />
                </div>
                <div className="services-item_text">
                  Разработка и оптимизация модулей сайта
                </div>
              </div>
              <div className="services-item">
                <div className="services-item_img">
                  <img src="./img/services_img/icon/item-img.svg" alt="" />
                </div>
                <div className="services-item_icon">
                  <img src="./img/services_img/icon/3.svg" alt="" />
                </div>
                <div className="services-item_text">
                  Интеграция с CRM, 1С, платежными системами, любыми
                  веб-сервисами
                </div>
              </div>
              <div className="services-item">
                <div className="services-item_img">
                  <img src="./img/services_img/icon/item-img.svg" alt="" />
                </div>
                <div className="services-item_icon">
                  <img src="./img/services_img/icon/4.svg" alt="" />
                </div>
                <div className="services-item_text">
                  Любые доработки функционала и дизайна
                </div>
              </div>
            </div>
            <div className="services-item_block">
              <div className="services-item">
                <div className="services-item_img">
                  <img src="./img/services_img/icon/item-img.svg" alt="" />
                </div>
                <div className="services-item_icon">
                  <img src="./img/services_img/icon/5.svg" alt="" />
                </div>
                <div className="services-item_text">
                  Аудит и мониторинг безопасности Drupal сайтов
                </div>
              </div>
              <div className="services-item">
                <div className="services-item_img">
                  <img src="./img/services_img/icon/item-img.svg" alt="" />
                </div>
                <div className="services-item_icon">
                  <img src="./img/services_img/icon/6.svg" alt="" />
                </div>
                <div className="services-item_text">
                  Миграция, импорт контента и апгрейд Drupal
                </div>
              </div>
              <div className="services-item">
                <div className="services-item_img">
                  <img src="./img/services_img/icon/item-img.svg" alt="" />
                </div>
                <div className="services-item_icon">
                  <img src="./img/services_img/icon/7.svg" alt="" />
                </div>
                <div className="services-item_text">
                  Оптимизация и ускорение Drupal-сайтов
                </div>
              </div>
              <div className="services-item">
                <div className="services-item_img">
                  <img src="./img/services_img/icon/item-img.svg" alt="" />
                </div>
                <div className="services-item_icon">
                  <img src="./img/services_img/icon/8.svg" alt="" />
                </div>
                <div className="services-item_text">
                  Веб-маркетинг, консультации и работы по SEO
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="support">
          <div className="container suport-container">
            <div className="support-title">
              <h2>
                Поддержка
                <br />
                от Drupal-coder
              </h2>
            </div>
            <div className="support-block">
              <div className="support-card">
                <div className="container-card">
                  <div className="card-num">01</div>
                  <div className="card-title">
                    <h3>Постановка задачи по Email</h3>
                  </div>
                  <div className="card-text">
                    Удобная и привычная модель постановки задач, при которой
                    задачи фиксируются и никогда не теряются.
                  </div>
                </div>
                <div className="card-img">
                  <img src="/img/support_img/icon/support1.svg" alt="" />
                </div>
              </div>
              <div className="support-card">
                <div className="container-card">
                  <div className="card-num">02</div>
                  <div className="card-title">
                    <h3>Система Helpdesk – отчетность, прозрачность</h3>
                  </div>
                  <div className="card-text">
                    Возможность посмотреть все заявки в работе и отработанные
                    часы в личном кабинете через браузер.
                  </div>
                </div>
                <div className="card-img">
                  <img src="/img/support_img/icon/support2.svg" alt="" />
                </div>
              </div>
              <div className="support-card">
                <div className="container-card">
                  <div className="card-num">03</div>
                  <div className="card-title">
                    <h3>Расширенная техническая поддержка</h3>
                  </div>
                  <div className="card-text">
                    Возможность организации расширенной техподдержки с 6:00 до
                    22:00 без выходных.
                  </div>
                </div>
                <div className="card-img">
                  <img src="/img/support_img/icon/settings.svg" alt="" />
                </div>
              </div>
              <div className="support-card">
                <div className="container-card">
                  <div className="card-num">04</div>
                  <div className="card-title">
                    <h3>Персональный менеджер проекта</h3>
                  </div>
                  <div className="card-text">
                    Ваш менеджер проекта всегда в курсе текущего состояния
                    проекта и в любой момент готов ответить на любые вопросы.
                  </div>
                </div>
                <div className="card-img">
                  <img src="/img/support_img/icon/group.svg" alt="" />
                </div>
              </div>
              <div className="support-card">
                <div className="container-card">
                  <div className="card-num">05</div>
                  <div className="card-title">
                    <h3>Удобные способы оплаты</h3>
                  </div>
                  <div className="card-text">
                    Безналичный расчет по договору или электронные деньги:
                    WebMoney, Яндекс.Деньги, Paypal.
                  </div>
                </div>
                <div className="card-img">
                  <img src="/img/support_img/icon/support5.svg" alt="" />
                </div>
              </div>
              <div className="support-card">
                <div className="container-card">
                  <div className="card-num">06</div>
                  <div className="card-title">
                    <h3>Работаем с SLA и NDA</h3>
                  </div>
                  <div className="card-text">
                    Работа в рамках соглашений о конфиденциальности и об уровне
                    качетсва работ.
                  </div>
                </div>
                <div className="card-img">
                  <img src="/img/support_img/icon/support6.svg" alt="" />
                </div>
              </div>
              <div className="support-card">
                <div className="container-card">
                  <div className="card-num">07</div>
                  <div className="card-title">
                    <h3>Штатные специалисты</h3>
                  </div>
                  <div className="card-text">
                    Надежные штатные специалисты, никаких фрилансеров.
                  </div>
                </div>
                <div className="card-img">
                  <img src="./img/support_img/icon/support7.svg" alt="" />
                </div>
              </div>
              <div className="support-card">
                <div className="container-card">
                  <div className="card-num">08</div>
                  <div className="card-title">
                    <h3>Удобные каналы связи</h3>
                  </div>
                  <div className="card-text">
                    Консультации по телефону, скайпу, в месенджерах.
                  </div>
                </div>
                <div className="card-img">
                  <img src="./img/support_img/icon/support8.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="expert">
          <div className="laptop-expert_img"></div>
          <div className="drupal-expert_img"></div>
          <div className="container expert-container">
            <div className="expert-block">
              <div className="expert-content">
                <h2>Экспертиза в Drupal, опыт 14 лет!</h2>
              </div>
              <div className="expert-promo_block">
                <div className="expert-promo">
                  <div className="item-expert">
                    <div className="vline-expert"></div>

                    <div className="expert-item-text">
                      Только системный подход – контроль версий, резервирование
                      и тестирование!
                    </div>
                  </div>
                  <div className="item-expert">
                    <div className="vline-expert"></div>

                    <div className="expert-item-text">
                      Только Drupal сайты, не берем на поддержку сайты на других
                      CMS!
                    </div>
                  </div>
                </div>
                <div className="expert-promo">
                  <div className="item-expert">
                    <div className="vline-expert"></div>
                    <div className="expert-item_text">
                      Участвуем в разработке ядра Drupal и модулей на
                      Drupal.org, разрабатываем 
                      <span style={{color: 'var(--icons-1)'}}>
                         &nbsp;свои модули Drupal
                      </span>
                    </div>
                  </div>
                  <div className="item-expert">
                    <div className="vline-expert"></div>
                    <div className="expert-item-text">
                      Поддерживаем сайты на Drupal 5, 6, 7, и 8
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="plans">
      <div className="fon-img">
        <img src="./img/plans_img/D.svg" alt="" />
      </div>
      <div className="container">
        <div className="plans-title">
          <h2>Тарифы</h2>
        </div>
          <div className="plans-item_block">
            <div className="plans-item">
              <div className="plans-item_container">
                <div className="plans-price_block">
                  <p className="plans-item_title">Стартовый</p>
                <div className="plans-item_line"></div>
                <div className="plans-item_text">
                  <ul>
                    <li>Предоплата от 2 часов</li>
                    <li>Консультации и работы по SEO</li>
                    <li>Услуги дизайнера</li>
                    <li>Стандартное время реакции</li>
                    <li>
                      Неиспользованные оплаченные часы переносятся на следующий
                      месяц
                    </li>
                  </ul>
                </div>
                <button
                  type="button"
                  className="button plans-button plans-button_style"
                  onClick={(e) => { const rect = e.currentTarget.getBoundingClientRect(); setTriggerRect(rect); setIsModalOpen(true); }}
                >
                  Свяжитесь с нами
                </button>
              </div>
            </div>
            
            </div>
            <div className="plans-item">
              <div className="plans-item_container">
                <div className="plans-price_block">
                  <p className="plans-item_title">Стартовый</p>
                <div className="plans-item_line"></div>
                <div className="plans-item_text">
                  <ul>
                    <li>Предоплата от 2 часов</li>
                    <li>Консультации и работы по SEO</li>
                    <li>Услуги дизайнера</li>
                    <li>Стандартное время реакции</li>
                    <li>
                      Неиспользованные оплаченные часы переносятся на следующий
                      месяц
                    </li>
                  </ul>
                </div>
                <button
                  type="button"
                  className="button plans-button plans-button_style"
                  onClick={(e) => { const rect = e.currentTarget.getBoundingClientRect(); setTriggerRect(rect); setIsModalOpen(true); }}
                >
                  Свяжитесь с нами
                </button>
              </div>
            </div>
            
            </div>
            <div className="plans-item">
              <div className="plans-item_container">
                <div className="plans-price_block">
                  <p className="plans-item_title">Стартовый</p>
                <div className="plans-item_line"></div>
                <div className="plans-item_text">
                  <ul>
                    <li>Предоплата от 2 часов</li>
                    <li>Консультации и работы по SEO</li>
                    <li>Услуги дизайнера</li>
                    <li>Стандартное время реакции</li>
                    <li>
                      Неиспользованные оплаченные часы переносятся на следующий
                      месяц
                    </li>
                  </ul>
                </div>
                <button
                  type="button"
                  className="button plans-button plans-button_style"
                  onClick={(e) => { const rect = e.currentTarget.getBoundingClientRect(); setTriggerRect(rect); setIsModalOpen(true); }}
                >
                  Свяжитесь с нами
                </button>
              </div>
            </div>
            
            </div>
          
          </div>
        <div className="plans-ps">
          <a onClick={(e) => { const rect = e.currentTarget.getBoundingClientRect(); setTriggerRect(rect); setIsModalOpen(true); }}>
            Вам не подходят наши тарифы? Оставьте заявку и мы предложим вам
            индивидуальные условия!
          </a>
        </div>
        <div className="plans-taketarif">
          <a onClick={(e) => { const rect = e.currentTarget.getBoundingClientRect(); setTriggerRect(rect); setIsModalOpen(true); }}>
            Получить индивидуальный тариф
          </a>
        </div>
      </div>
        </section>

        <section id="deadline">
      <div className="container">
        <div className="deadline-title">
          <h2>Наши профессиональные разработчики выполняют быстро любые задачи</h2>
        </div>
        <div className="services-item_block">
          <div className="services-item">
            
            <div className="services-item_icon">
              <img src="./img/deadline_img/competency-20.svg" alt="" />
            </div>
            <div className="deadline-item_text">
              <span>от 1ч</span>
              <p>Настройка события GA в интернет-магазине</p>
            </div>
          </div>
          <div className="services-item">
            <div className="services-item_icon">
              <img src="./img/deadline_img/competency-21.svg" alt="" />
            </div>
            <div className="deadline-item_text ">
              <span>от 20ч</span>
              <p>Разработка мобильной версии сайта</p></div>
          </div>
          <div className="services-item">
            <div className="services-item_icon">
              <img src="./img/deadline_img/competency-22.svg" alt="" />
            </div>
            <div className="deadline-item_text">
              <span>от 8ч</span>
              <p>Интеграция модуля оплаты</p></div>
          </div>
        </div>
      </div>
        </section>

        <section id="team">
          <div className="container">
            <div className="team-title">
              <h2>Команда</h2>
            </div>
            <div className="team-block">
              <div className="team-tile">
                <div className="team-image">
                  <img src="./img/team_img/IMG_2472_0.jpg" alt="Член команды" />
                </div>
                <div className="team-description">
                  <span>Сергей Синица</span>
                  <p>Руководитель отдела веб-разработки, канд. техн. наук, заместитель директора</p>
                </div>
              </div>
              <div className="team-tile">
                <div className="team-image">
                  <img src="./img/team_img/IMG_2539_0.jpg" alt="Член команды" />
                </div>
                <div className="team-description">
                    <span>Роман Агабеков</span>
                    <p>Руководитель отдела DevOps, директор</p>
                  </div>
              </div>
              <div className="team-tile">
                <div className="team-image">
                  <img src="./img/team_img/IMG_2474_1.jpg" alt="Член команды" />
                </div>
                <div className="team-description">
                    <span>Алексей Синица</span>
                    <p>Руководитель отдела поддержки сайтов</p>
                  </div>
              </div>
              <div className="team-tile">
                <div className="team-image">
                  <img src="./img/team_img/IMG_2522_0.jpg" alt="Член команды" />
                </div>
                <div className="team-description">
                    <span>Дарья Бочкарева</span>
                    <p>Руководитель отдела продвижения, контекстной рекламы и контент-поддержки сайтов</p>
                  </div>
              </div>
              <div className="team-tile">
                <div className="team-image">
                  <img src="./img/team_img/IMG_9971_16.jpg" alt="Член команды" />
                </div>
                <div className="team-description">
                    <span>Ирина Торкунова</span>
                    <p>Менеджер по работе с клиентами</p>
                  </div>
              </div>
              
            </div>
            <button type="button" className="button team-button"><span>Вся команда</span></button>
          </div>
        </section>

        <section id="cases">
          <div className="container">
            <div className="cases-title">
              <h2>Последние кейсы</h2>
            </div>
            <div className="cases-tile_block">
              <div className="cases-tile">
                <div className="cases-tile_img image-block">
                </div>
                
                <h3 className="cases-title">Настройка выгрузки YML для Яндекс.Маркета</h3>

                <p className="cases-title_data">22.04.2019</p>
                <p className="cases-title_subitle">
                  Эти слова совершенно справедливы, однако гипнотический рифф
                  продолжает паузный пласт.
                </p>
              </div>
              <div className="cases-tile_large"></div>
            </div>
            <div className="cases-tile_block">
              <div className="cases-tile images-block"></div>
              <div className="cases-tile imagev-block"></div>
              <div className="cases-tile">
                <div className="cases-tile_img img-block">
                </div>
                
                <h3 className="cases-title">Настройка выгрузки YML для Яндекс.Маркета</h3>

                <p className="cases-title_data">22.04.2019</p>
                <p className="cases-title_subitle">
                  Эти слова совершенно справедливы, однако гипнотический рифф
                  продолжает паузный пласт.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Reviews />

        <section id="partners">
            <div className="container">
              <div className="partners-title">
                <h2>С нами работают</h2>
                <p>
                  Десятки компаний доверяют нам самое ценное, что у них есть в
                  интернете – свои сайты. Мы делаем всё, чтобы наше сотрудничество
                  было долгим.
                </p>
              </div>
            </div>
            <div className="partners-slider_container">
              <div className="slider-track_left">
                <div className="partners-slider_item"><img src="./img/partners_img/image-gaz.png" alt="" /></div>
                <div className="partners-slider_item"><img src="./img/partners_img/image-gaz.png" alt="" /></div>
                <div className="partners-slider_item"><img src="./img/partners_img/image-gaz.png" alt="" /></div>
                <div className="partners-slider_item"><img src="./img/partners_img/image-gaz.png" alt="" /></div>
                <div className="partners-slider_item"><img src="./img/partners_img/image-gaz.png" alt="" /></div>
                <div className="partners-slider_item"><img src="./img/partners_img/image-gaz.png" alt="" /></div>
              </div>
              <div className="slider-track_left">
                <div className="partners-slider_item"><img src="./img/partners_img/image-gaz.png" alt="" /></div>
                <div className="partners-slider_item"><img src="./img/partners_img/image-gaz.png" alt="" /></div>
                <div className="partners-slider_item"><img src="./img/partners_img/image-gaz.png" alt="" /></div>
                <div className="partners-slider_item"><img src="./img/partners_img/image-gaz.png" alt="" /></div>
                <div className="partners-slider_item"><img src="./img/partners_img/image-gaz.png" alt="" /></div>
                <div className="partners-slider_item"><img src="./img/partners_img/image-gaz.png" alt="" /></div>
              </div>
              <div className="slider-track_left">
                <div className="partners-slider_item"><img src="./img/partners_img/image-gaz.png" alt="" /></div>
                <div className="partners-slider_item"><img src="./img/partners_img/image-gaz.png" alt="" /></div>
                <div className="partners-slider_item"><img src="./img/partners_img/image-gaz.png" alt="" /></div>
                <div className="partners-slider_item"><img src="./img/partners_img/image-gaz.png" alt="" /></div>
                <div className="partners-slider_item"><img src="./img/partners_img/image-gaz.png" alt="" /></div>
                <div className="partners-slider_item"><img src="./img/partners_img/image-gaz.png" alt="" /></div>
              </div>
              <div className="slider-track_left">
                <div className="partners-slider_item"><img src="./img/partners_img/image-gaz.png" alt="" /></div>
                <div className="partners-slider_item"><img src="./img/partners_img/image-gaz.png" alt="" /></div>
                <div className="partners-slider_item"><img src="./img/partners_img/image-gaz.png" alt="" /></div>
                <div className="partners-slider_item"><img src="./img/partners_img/image-gaz.png" alt="" /></div>
                <div className="partners-slider_item"><img src="./img/partners_img/image-gaz.png" alt="" /></div>
                <div className="partners-slider_item"><img src="./img/partners_img/image-gaz.png" alt="" /></div>
              </div>
            </div>
            <div className="partners-slider_container">
              <div className="slider-track_right">
                <div className="partners-slider_item"><img src="./img/partners_img/image-gaz.png" alt="" /></div>
                <div className="partners-slider_item"><img src="./img/partners_img/image-gaz.png" alt="" /></div>
                <div className="partners-slider_item"><img src="./img/partners_img/image-gaz.png" alt="" /></div>
                <div className="partners-slider_item"><img src="./img/partners_img/image-gaz.png" alt="" /></div>
                <div className="partners-slider_item"><img src="./img/partners_img/image-gaz.png" alt="" /></div>
                <div className="partners-slider_item"><img src="./img/partners_img/image-gaz.png" alt="" /></div>
              </div>
              <div className="slider-track_right">
                <div className="partners-slider_item"><img src="./img/partners_img/image-gaz.png" alt="" /></div>
                <div className="partners-slider_item"><img src="./img/partners_img/image-gaz.png" alt="" /></div>
                <div className="partners-slider_item"><img src="./img/partners_img/image-gaz.png" alt="" /></div>
                <div className="partners-slider_item"><img src="./img/partners_img/image-gaz.png" alt="" /></div>
                <div className="partners-slider_item"><img src="./img/partners_img/image-gaz.png" alt="" /></div>
                <div className="partners-slider_item"><img src="./img/partners_img/image-gaz.png" alt="" /></div>
              </div>
              <div className="slider-track_right">
                <div className="partners-slider_item"><img src="./img/partners_img/image-gaz.png" alt="" /></div>
                <div className="partners-slider_item"><img src="./img/partners_img/image-gaz.png" alt="" /></div>
                <div className="partners-slider_item"><img src="./img/partners_img/image-gaz.png" alt="" /></div>
                <div className="partners-slider_item"><img src="./img/partners_img/image-gaz.png" alt="" /></div>
                <div className="partners-slider_item"><img src="./img/partners_img/image-gaz.png" alt="" /></div>
                <div className="partners-slider_item"><img src="./img/partners_img/image-gaz.png" alt="" /></div>
              </div>
              <div className="slider-track_right">
                <div className="partners-slider_item"><img src="./img/partners_img/image-gaz.png" alt="" /></div>
                <div className="partners-slider_item"><img src="./img/partners_img/image-gaz.png" alt="" /></div>
                <div className="partners-slider_item"><img src="./img/partners_img/image-gaz.png" alt="" /></div>
                <div className="partners-slider_item"><img src="./img/partners_img/image-gaz.png" alt="" /></div>
                <div className="partners-slider_item"><img src="./img/partners_img/image-gaz.png" alt="" /></div>
                <div className="partners-slider_item"><img src="./img/partners_img/image-gaz.png" alt="" /></div>
              </div>
            </div>
        </section>
        
          <Faq />

        <section id="contacty">
          <div className="contacty-image"></div>
          <div className="container">
            <div className="contacty-container">
              <div className="contacty-img"></div>
              <div className="contacty">
                <div className="contacty-title">
                  <h2>Оставить заявку на поддержку сайта</h2>
                  <p>
                    Срочно нужна поддержка сайта? Ваша команда не успевает
                    справиться самостоятельно или предыдущий подрядчик не справился
                    с работой? Тогда вам точно к нам! Просто оставьте заявку и наш
                    менеджер с вами свяжется!
                  </p>
                </div>
                <div className="contacty-subtitle">
                  <div className="tel">
                    <img src="./img/contacty_img/phone-line.svg" alt="Телефон" />
                    <p>8 800 222-26-73</p>
                  </div>
                  <div className="email">
                    <img src="./img/contacty_img/mail.svg" alt="Email" />
                    <p><a href="mailto:info@example.com">info@example.com</a></p>
                  </div>
                </div>
              </div>
              <div className="forma-container">
                <form className="forma" action="#" method="post">
                  <input
                    type="text"
                    name="name"
                    placeholder="Ваше имя"
                    required
                    className="input-area"
                    aria-label="Ваше имя"
                    autoComplete="name"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Телефон"
                    required
                    className="input-area"
                    aria-label="Телефон"
                    autoComplete="tel"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="input-area"
                    aria-label="Email"
                    autoComplete="email"
                  />
                  <textarea
                    name="comment"
                    placeholder="Ваш комментарий"
                    className="text-area"
                    aria-label="Ваш комментарий"
                    autoComplete="comment"
                  ></textarea>

                  <div className="agreement">
                    <input
                      type="checkbox"
                      name="agreement"
                      id="agreement"
                      className="checkbox"
                      required
                    />
                    <label htmlFor="agreement">
                      Отправляя заявку, я даю согласие на обработку своих
                      персональных данных
                    </label>
                  </div>
                  <button type="submit" className="button forma-button">
                    Оставить заявку
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="line-footer"></div>
          <footer id="footer">
            <div className="container">
              <div className="footer-container">
                <p>Проект ООО «Инитлаб», Краснодар, Россия.</p>
                <p>
                  Drupal является зарегистрированной торговой маркой Dries
                  Buytaert.
                </p>
              </div>
            </div>
          </footer>
        </section>
      </main>
    </div>

  );
}

export default App;
