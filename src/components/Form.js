import React from "react";
import offerDocument from '../vendor/offer.pdf';

const Form = () => {

    const [ name, setName ] = React.useState('');
    const [ phone, setPhone ] = React.useState('');
    const [ email, setEmail ] = React.useState('');
    const [ lyrics, setLyrics ] = React.useState('');
    const [ agreeOffer, setAgreeOffer ] = React.useState(false);
    const [ isNameValid, setIsNameValid ] = React.useState(true);
    const [ isPhoneValid, setIsPhoneValid ] = React.useState(true);
    const [ isEmailValid, setIsEmailValid ] = React.useState(true);
    const [ isLyricsValid, setIsLyricsValid ] = React.useState(true);
    const [ isAgreeOfferValid, setIsAgreeOfferValid ] = React.useState(true);

    const inputNameHandler = (e) => {
        setName(e.target.value);
        setIsNameValid(/^[a-zа-яё ]{2,30}$/.test(e.target.value));
    };

    const inputPhoneHandler = (e) => {
        setPhone(e.target.value);
        setIsPhoneValid(/^\+?[\d]{11}$/.test(e.target.value));
    };

    const inputEmailHandler = (e) => {
        setEmail(e.target.value);
        setIsEmailValid(/^[a-z1-9]{2,}\@[a-z]{2,}\.[a-z]{2,}$/.test(e.target.value));
    };

    const inputLyricsHandler = (e) => {
        setLyrics(e.target.value);
        setIsLyricsValid(/^[a-zа-яё1-9 ,.!?:;'"+=]{2,1000}$/.test(e.target.value));
    };

    const inputAgreeOfferHandler = (e) => {
        setAgreeOffer(e.target.checked);
        setIsAgreeOfferValid(e.target.checked);
    };
    /*
    React.useEffect(() => {
        setIsNameValid(/[a-zа-яё]{2}/.test(name));

    }, [ name, phone, email, lyrics, agreeOffer  ])
*/
    return (
        <form className="form">
            <h2 className="title">Форма.</h2>
            <p className="text form__subtitle">
            Заполняя эту форму, вы становитесь частью проекта.
            </p>
            <fieldset className="form__fieldset">
                <input
                    className="form__input"
                    type="text"
                    name="author-name"
                    placeholder="Имя и фамилия автора"
                    required
                    formNoValidate
                    value={name}
                    onChange={inputNameHandler}
                />
                { !isNameValid && <span className="form__input_type_error" id="form__author-error">Имя должно содержать от 2 до 30 букв</span> }
                <input 
                    className="form__input"
                    type="tel"
                    name="phone"
                    placeholder="Телефон"
                    required
                    formNoValidate
                    value={phone}
                    onChange={inputPhoneHandler} 
                />
                { !isPhoneValid && <span className="form__input_type_error" id="form__phone-error">Телефон должен должен был в форматах: +79999999999 либо 89999999999</span> }
                <input 
                    className="form__input" 
                    type="email" 
                    name="email"
                    placeholder="Почта"
                    formNoValidate
                    required
                    value={email}
                    onChange={inputEmailHandler}
                    />
                { !isEmailValid && <span className="form__input_type_error" id="form__email-error">Адрес электронной почты должен был в формате name@domain.ru</span> }
                <textarea
                    className="form__input form__input_textarea"
                    type="text"
                    name="lyrics"
                    placeholder="Стихи"
                    required
                    formNoValidate
                    value={lyrics}
                    onChange={inputLyricsHandler}
                ></textarea>
                { !isLyricsValid && <span className="form__input_type_error" id="form__textarea-error">Стихи должны состоять не менее чем из 2 символов и не более 1000</span>}
                <div className="form__radio-container">
                    <input 
                    className="form__radio" 
                    type="checkbox" 
                    id="checkbox"
                    required
                    formNoValidate
                    checked={agreeOffer}
                    onChange={inputAgreeOfferHandler}
                    />
                    <label className="form__radio-label hover-opacity" htmlFor="checkbox"></label>
                    <p className="text">
                    Согласен с{" "}
                    <a href={offerDocument} className="form__link-offer hover-opacity" target="_blank" rel="noreferrer">офертой</a>
                    </p>
                </div>
                { !isAgreeOfferValid && <span className="form__input_type_error" id="checkbox-error">Необходимо согласие с офертой</span> }
                <button className="form__submit hover-opacity" type="submit">
                    Отправить форму
                </button>
            </fieldset>
        </form>
    )
}

export default Form;
