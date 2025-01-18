const contacts=()=>(
    <div><h2>Контактная информация</h2>
    <p>Адрес: г. Нижний Новгород, Соляной пр., 10, к. 10</p>
    <p>Телефон: (822) 45-45-000</p>
    <p>email: remontvann@mail.ru</p>
    <p>Наше местоположение</p>
    <img src="Y.Karti_Android_mesto.jpg" alt="Y.Karti_Android_mesto.jpg" /></div>);
    import React from "react";
    import '...styles/contact.css';
    const contact=()=>(
        <div className="contact-form">
            <h3>Форма для обратной связи</h3><form>
            <label>Имя</label><input type="text" name="name" placeholder="Введите ваше имя"/>
            <label>Электронная почта</label><input type="email" name="email" placeholder="Введите ваш номер телефона"/>
            <label>Номер телефона</label><input type="number" name="telefon" placeholder="Введите вашу электронную почту"/>
            <label>Сообщение</label> <textarea name="messanger" rows={5} placeholder="Введите сообщение"></textarea>
            <button type="submit">Отправить</button>
        </form></div>);
export default Contacts;