import React from "react";

import puzzleImg from "../../img/icons/puzzle.svg";

export default function Card() {
  return (
    <div className="card">
      <nav className="card__menu">
        <a className="menu__item menu__item--active" href="/">
          Основное
        </a>
        <a className="menu__item" href="/">
          Информация о награде
        </a>
        <a className="menu__item" href="/">
          Условия получения
        </a>
        <a className="menu__item" href="/">
          Поощерения
        </a>
        <a className="menu__item" href="/">
          Стилизация
        </a>
        <a className="menu__item" href="/">
          Технические настройки
        </a>
      </nav>
      <div className="card__inner">
        <div className="card__col_puzzle">
          <div className="puzzle">
            <div className="puzzle__item puzzle__item--yellow"></div>
            <div className="puzzle__item puzzle__item--pink">
              <img className="puzzle__item_img" src={puzzleImg} alt="элемент пазла" />
            </div>
            <div className="puzzle__item puzzle__item--blue">
              <img className="puzzle__item_img" src={puzzleImg} alt="элемент пазла" />
            </div>
            <div className="puzzle__item puzzle__item--orange">
              <img className="puzzle__item_img" src={puzzleImg} alt="элемент пазла" />
            </div>
            <div className="puzzle__item puzzle__item--green">
              <img className="puzzle__item_img" src={puzzleImg} alt="элемент пазла" />
            </div>
            <div className="puzzle__item puzzle__item--pink">
              <img className="puzzle__item_img" src={puzzleImg} alt="элемент пазла" />
            </div>
            <div className="puzzle__item puzzle__item--blue">
              <img className="puzzle__item_img" src={puzzleImg} alt="элемент пазла" />
            </div>
            <div className="puzzle__item puzzle__item--orange">
              <img className="puzzle__item_img" src={puzzleImg} alt="элемент пазла" />
            </div>
            <div className="puzzle__item puzzle__item--green">
              <img className="puzzle__item_img" src={puzzleImg} alt="элемент пазла" />
            </div>
          </div>
        </div>
        <div className="card__col_settings">
          <button className="select__puzzle">
            <span className="select__puzzle_title">Пазл</span>
            <span className="select__icon"></span>
          </button>
          <div className="puzzle__name_inner">
            <div className="puzzle__name_title">Название</div>
            <div className="puzzle__name">
              <div className="puzzle__lang">Ru</div>
              <input className="puzzle__name_input" type="text" name="input-name" placeholder="Имя" autocomplete="on" />
            </div>
            <div className="puzzle__name">
              <div className="puzzle__lang">En</div>
              <input
                className="puzzle__name_input"
                type="text"
                name="input-name"
                placeholder="Name"
                autocomplete="on"
              />
            </div>
          </div>
          <div className="puzzle__img_title">Картинка пазла</div>
          <div className="puzzle__img_inner">
            <button className="puzzle__img"></button>
            <div className="puzzle__img_load">
              <button className="puzzle__img_load_btn">Загрузить</button>
              <div className="puzzle__img_load_gallery">
                или{" "}
                <a className="puzzle__img_load_gallery_link" href="/">
                  Выбрать из коллекции
                </a>
              </div>
              <div className="puzzle__img_load_link_note">разрешение 550*550</div>
            </div>
          </div>
          <div className="puzzle__volume_title">Сколько деталей у пазла</div>
          <div className="puzzle__volume">
            <button className="puzzle__volume_btn">по Горизонтали 3</button>
            <button className="puzzle__volume_btn">по Вертикали 3</button>
          </div>
          <div className="puzzle__coupons">
            <div className="puzzle__coupons_title">Может ли награда выдавать купоны</div>
            <button className="select__coupons">
              <span className="select__coupons_title">Да</span>
              <span className="select__icon"></span>
            </button>
          </div>
          <div className="puzzle__reward">
            <div className="puzzle__reward_title">Сообщение при получении награды</div>
            <input className="puzzle__input_reward" type="text" name="input-reward" placeholder="Введите значение" />
          </div>
          <div className="puzzle__num_reward">
            <div className="puzzle__num_reward_title"></div>
            <button className="puzzle__num_reward_btn">
              <span>1</span>
              <span>Раз</span>
            </button>
            <button className="puzzle__timeout_btn">
              <span className="puzzle__timeout_btn--num">Таймаут: 1800</span>
              <span className="puzzle__timeout_btn--days">
                Дней
                <span className="select__icon"></span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
