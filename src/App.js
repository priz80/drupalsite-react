import "./App.css";

function App() {
  return (
    
      <header className="header">
      {/* <video autoPlay muted loop playsInline>
        <source src="/video/video.mp4" type="video/mp4" />
        Ваш браузер не поддерживает воспроизведение этого видео.
      </video> */}

      <div className="druplicon">
        <img src="/img/header_img/druplicon.svg" alt="Drupal" />
      </div>
      <div className="container container-menu desktop-menu">
        <div className="logo">
          <a href="#"><img src="/img/menu_img/drupal-coder.svg" alt="Logo" /></a>
        </div>


        <nav className="dropdown-menu">
          <ul>
            <li className="under-line"><a href="#services">Поддержка drupal</a></li>
            <li className="dropdown">
              <a href="#administration">Администрирование ▼</a>
              <ul className="dropdown-content">
                <li><a href="#migration">Миграция</a></li>
                <li><a href="#backups">Бэкапы</a></li>
                <li><a href="#security">Аудит безопасности</a></li>
                <li><a href="#optimization">Оптимизация скорости</a></li>
                <li><a href="#https">Переезд на https</a></li>
              </ul>
            </li>
            <li className="under-line"><a href="#promotion">Продвижение</a></li>
            <li className="under-line"><a href="#advertising">Реклама</a></li>
            <li className="dropdown">
              <a href="#about">О нас ▼</a>
              <ul className="dropdown-content">
                <li><a href="#team">Команда</a></li>
                <li><a href="#drupalgive">Drupalgive</a></li>
                <li><a href="#blog">Блог</a></li>
                <li><a href="#courses">Курсы drupal</a></li>
              </ul>
            </li>
            <li className="under-line"><a href="#cases">Проекты</a></li>
            <li className="under-line"><a href="#contacty">Контакты</a></li>
          </ul>
        </nav>

      
      <div className="burger-mobile" aria-label="Открыть меню" aria-expanded="false">
        <span></span>
        <span></span>
        <span></span>
      </div>


      <nav className="mobile-menu-mobile">
        <div className="header-block header-block_background">
                  <div className="header-content">
                    <h1>Поддержка сайтов на Drupal</h1>
                    <p>
                      Сопровождение и поддержка сайтов<br />
                      на CMS Drupal любых версий и запущенности
                    </p>
                  </div>
                  
                </div>
        <ul>
          <li className="mobile-item_color"><a href="#services">Поддержка drupal</a></li>
          <li className="dropdown mobile-item_color">
            <a href="#">Администрирование ▼</a>
            <ul className="dropdown-content_mobile mobile-item_color">
              <li><a href="#migration">Миграция</a></li>
              <li><a href="#backups">Бэкапы</a></li>
              <li><a href="#security">Аудит безопасности</a></li>
              <li><a href="#optimization">Оптимизация скорости</a></li>
              <li><a href="#https">Переезд на https</a></li>
            </ul>
          </li>
          <li className="mobile-item_color"><a href="#promotion">Продвижение</a></li>
          <li className="mobile-item_color"><a href="#advertising">Реклама</a></li>
          <li className="dropdown mobile-item_color">
            <a href="#about">О нас ▼</a>
            <ul className="dropdown-content_mobile mobile-item_color">
              <li><a href="#team">Команда</a></li>
              <li><a href="#drupalgive">Drupalgive</a></li>
              <li><a href="#blog">Блог</a></li>
              <li><a href="#courses">Курсы drupal</a></li>
            </ul>
          </li>
          <li className="mobile-item_color"><a href="#cases">Проекты</a></li>
          <li className="mobile-item_color"><a href="#contacty">Контакты</a></li>
        </ul>
      </nav>
      </div>

      <section id="head">
        <div className="container header-container">
          <div className="header-block">
            <div className="header-content">
              <h1>Поддержка сайтов на Drupal</h1>
              <p>
                Сопровождение и поддержка сайтов<br />
                на CMS Drupal любых версий и запущенности
              </p>
              <a href="#plans" className="button header-button"> Тарифы </a>
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
                  <div className="item-text">часов поддержки сайтов на Drupal</div>
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

      
    
  );
}

export default App;
