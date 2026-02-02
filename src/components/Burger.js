import React, { useEffect } from 'react';

const Burger = () => {
  useEffect(() => {
    const burger = document.querySelector('.burger-mobile');
    const mobileMenu = document.querySelector('.mobile-menu-mobile');

    // Открытие/закрытие мобильного меню
    const toggleMenu = () => {
      burger?.classList.toggle('active');
      mobileMenu?.classList.toggle('active');
      document.body.classList.toggle('no-scroll'); // Блокировка скролла
    };

    burger?.addEventListener('click', toggleMenu);

    // Закрытие меню при клике на ссылку, кроме выпадающих пунктов
    const handleLinkClick = (e) => {
      const link = e.target;
      // Проверяем, не является ли родитель ссылки элементом с классом dropdown
      if (!link.parentElement?.classList.contains('dropdown')) {
        burger?.classList.remove('active');
        mobileMenu?.classList.remove('active');
        document.body.classList.remove('no-scroll');
      }
    };

    mobileMenu?.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', handleLinkClick);
    });

    // Обработка клика по пункту с подменю (dropdown)
    const handleDropdownClick = (e) => {
      e.preventDefault(); // Предотвращаем переход
      const dropdown = e.currentTarget.parentElement;
      dropdown.classList.toggle('active');
      // Важно: НЕ закрываем мобильное меню целиком!
    };

    mobileMenu?.querySelectorAll('.dropdown > a').forEach(anchor => {
      anchor.addEventListener('click', handleDropdownClick);
    });

    // Очистка событий при размонтировании компонента
    return () => {
      burger?.removeEventListener('click', toggleMenu);
      mobileMenu?.querySelectorAll('a').forEach(link => {
        link.removeEventListener('click', handleLinkClick);
      });
      mobileMenu?.querySelectorAll('.dropdown > a').forEach(anchor => {
        anchor.removeEventListener('click', handleDropdownClick);
      });
    };
  }, []);

  return (
    <div className="burger-container">
      <div className="burger-mobile">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="mobile-menu-mobile">
        <ul>
          <li><a href="#header">Главная</a></li>
          <li className="dropdown">
            <a href="#">Услуги</a>
            <ul className="dropdown-content_mobile">
              <li><a href="#">Разработка</a></li>
              <li><a href="#">Дизайн</a></li>
              <li><a href="#">Поддержка</a></li>
            </ul>
          </li>
          <li><a href="#cases">Кейсы</a></li>
          <li><a href="#team">Команда</a></li>
          <li><a href="#contacty">Контакты</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Burger;