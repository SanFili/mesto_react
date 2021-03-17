import logo from './logo.svg';
import './index.css';

function App() { 
  return (
    <div className="root">
      <header className="header root__section">
        <img src={logo} alt="mesto logo" className="logo" />
      </header>
      <div className="profile root__section">
        <div className="user-info">
          <div className="user-info__photo"></div>
          <div className="user-info__data">
            <h1 className="user-info__name"></h1>
            <p className="user-info__job"></p>
            <button className="button user-info__edit-button">Edit</button>
          </div>
          <button className="button user-info__button">+</button>
        </div>
      </div>
      <div className="places-list root__section">
      </div>

      <div className="popup">
        <div className="popup__content">
          <img src="<%=require('../images/close.svg').default%>" alt="" className="popup__close popup__close-place" />
          <h3 className="popup__title">Новое место</h3>
          <form className="popup__form" novalidate name="new">
            <input type="text" name="name" id="place-name" className="popup__input popup__input_type_place" placeholder="Название" />
            <span className="error-msg" id="error-place-name"></span>
            <input type="text" name="link" id="place-img" className="popup__input popup__input_type_link-url" placeholder="Ссылка на картинку" />
            <span className="error-msg" id="error-place-img"></span>
            <button type className="button popup__button">+</button>
          </form>
        </div>
      </div>
      <div className="popup popup-edit">
        <div className="popup__content">
          <img src="<%=require('../images/close.svg').default%>" alt="" className="popup__close popup__close-edit" />
          <h3 className="popup__title">Редактировать профиль</h3>
          <form className="popup__form popup__form_edit" novalidate name="new">
            <input type="text" name="name" id="name" className="popup__input popup__input_type_name" required placeholder="Имя" />
            <span className="error-msg" id="error-name"></span>
            <input type="text" name="about" id="job" className="popup__input popup__input_type_about" required placeholder="О себе" />
            <span className="error-msg" id="error-job"></span>
            <button type className="button popup__button popup__edit-button">Сохранить</button>
          </form>
        </div>
      </div>
      <div className="popup popup-avatar">
        <div className="popup__content">
          <img src="<%=require('./images/close.svg').default%>" alt="" className="popup__close popup__close-place" />
          <h3 className="popup__title">Обновить аватар</h3>
          <form className="popup__form popup__form_avatar" novalidate name="new">
            <input type="text" name="link" id="avatar" className="popup__input popup__input_type_link-url" placeholder="Ссылка на аватар" />
            <span className="error-msg" id="error-avatar"></span>
            <button type className="button popup__button popup__edit-button">Сохранить</button>
          </form>
        </div>
      </div>
      <div className="popup popup-img">
        <div className="popup-img__content">
          <img src="<%=require('./images/close.svg').default%>" alt="" className="popup__close popup__close-img" />
          <img className="popup-img__full-img" alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
