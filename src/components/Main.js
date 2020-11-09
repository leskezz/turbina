import React from "react";

function Main() {
  return (
  <main className="content">
      <h2 className="title">О проекте.</h2>
      <p className="description__text text">
        Мы знаем, что наши дети постоянно существуют в режиме непрекращающегося
        творческого процесса. Мы видим это, когда ребёнок что-то напевает, когда
        он бесконечно рисует, когда придумывает истории, когда разговаривает с
        едой и игрушками — дети постоянно включены и что-то изобретают. Родители
        часто недооценивают это спонтанное творчество ребёнка. Это не плохо,
        просто мы привыкаем к этому. Давайте попробуем внимательнее
        присмотреться к нашим детям.
      </p>
      <p className="description__text text">
        Мы запускаем проект «ТУРБИНА», который открывает работу настоящего
        музыкального лейбла на базе «Маршака». В рамках «ТУРБИНЫ» лучшие
        современные инди-музыканты пишут свои песни на стихи, написанные детьми.
        Здесь важно&nbsp;— мы не&nbsp;заставляем наших детей садиться и писать
        поэзию, мы говорим о том, что родителям стоит быть более внимательными и
        чуткими к своим детям. Именно так мы сможем получить тексты, которые
        перестанут быть детскими, не будут осмыслены как взрослые&nbsp;— поэзия,
        которая сокращает дистанцию между взрослостью и детством, где спонтанное
        детское творчество и&nbsp;бессознательное, замеченное родителем,
        становится общественным культурным достоянием.
      </p>
      <h2 className="title">Как это работает?</h2>
      <p className="description__text text">
        Вы можете прислать нам тексты, родившиеся у ваших детей, которые вы
        записали и считаете, что это сильное высказывание. Мы собираем пул таких
        текстов и передаём их музыкантам. Артисты создают музыку на эти стихи.
        Мы продюсируем выпуск трека, возможно съёмки клипа и так далее. Мы
        всегда указываем автора стихотворений внутри релиза: Хадн&nbsp;Дадн
        feat. Варя&nbsp;Карпова и Федя&nbsp;Быстров&nbsp;— Контур.
      </p>
      <h2 className="title">Тезисы.</h2>
      <ul className="description__theses">
        <li className="description__thesis text">
          Дети никогда не&nbsp;прекращают творить и круто стараться быть на них
          похожими в этом
        </li>
        <li className="description__thesis text">
          Детское бессознательное помогает родителям понять, что происходит
          внутри семьи
        </li>
        <li className="description__thesis text">
          Не существует детской и взрослой поэзии. Существует мысль и чувство,
          зафиксированное в ней
        </li>
        <li className="description__thesis text">
          Дети получают невероятное удовольствие и мотивацию от того, что их
          творчество востребовано сверстниками и взрослыми
        </li>
      </ul>
      <form className="form">
        <h2 className="title">Форма.</h2>
        <p className="text form__subtitle">
          Заполняя эту форму, вы становитесь частью проекта.
        </p>
        <fieldset className="form__fieldset">
          <input
            className="form__input"
            type="text"
            id="form__author"
            name="author-name"
            placeholder="Имя и фамилия автора"
            minlength="2"
            maxLength="100"
            required
          />
          <span className="form__input_type_error" id="form__author-error"></span>
          <input 
            className="form__input"
            type="tel"
            id="form__phone"
            name="phone"
            placeholder="Телефон"
            required
          />
          <span className="form__input_type_error" id="form__phone-error"></span>
          <input 
            className="form__input" 
            type="email" 
            id="form__email"
            name="email"
            placeholder="Почта" />
          <span className="form__input_type_error" id="form__email-error"></span>
          <textarea
            className="form__input form__input_textarea"
            id="form__textarea"
            placeholder="Стихи"
          ></textarea>
          <span className="form__input_type_error" id="form__textarea-error"></span>
          <div className="form__radio-container">
            <input 
              className="form__radio" 
              type="checkbox" 
              id="checkbox"
              required
            />
            <label
              className="form__radio-label hover-opacity"
              for="checkbox"
            ></label>
            <p className="text">
              Согласен с{" "}
              <a
                href="./vendor/file.pdf"
                className="form__link-offer hover-opacity"
                target="_blank"
              >
                офертой
              </a>
            </p>
          </div>
          <span className="form__input_type_error" id="checkbox-error">Сообщение об ошибке</span>
          <button className="form__submit hover-opacity" type="submit">
            Отправить форму
          </button>
        </fieldset>
      </form>
    </main>
  );
}

export default Main;
