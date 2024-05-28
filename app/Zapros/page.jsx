import React from 'react'
import './zapros.css'
import Navbar from '../Navbar/page'
import Footer from '../Footer/page'

const Zapros = () => {
  return (
    <div>
        <Navbar/>
        <div id='container'>
        <p id='text'>Главная / Клиентам / Запрос ставки и условий погрузочно-разгрузочных работ</p>
        </div>
        <h1>Запрос ставки и условий погрузочно- <br />разгрузочных работ</h1>
        <div id='blok'>
            <div id='card'>
                <label htmlFor="">Наименование груза *</label>
                <input type="text"  id='input'/>
            </div>
            <div id='card'>
                <label htmlFor="">Размер партии *</label>
                <input type="text" id='input' />
            </div>
        </div>
        <div id='blok'>
            <div id='card'>
                <label htmlFor="">Ед.Измерения *</label>
                <select name="" id="input1">
                    <option value=""></option>
                </select>
            </div>
            <div id='card'>
                <label htmlFor="">Направление перевозки *</label>
                <select name="" id="input1">
                    <option value=""></option>
                </select>
            </div>
        </div>
        <div id='blok'>
            <div id='card'>
                <label htmlFor="">Пункт назначения перевозки</label>
                <input type="text" id='input' />
            </div>
            <div id='card'>
                <label htmlFor="">Период поступления груза к перевалке</label>
                <select name="" id="input1">
                    <option value=""></option>
                </select>
            </div>
        </div>
        <div id='blok'>
            <div id='card'>
                <label htmlFor="">Груз поступает в порт</label>
                <select name="" id="input1">
                    <option value=""></option>
                </select>
            </div>
            <div id='card'>
                <label htmlFor="">Груз отправлется из порта</label>
                <select name="" id="input1">
                    <option value=""></option>
                </select>
            </div>
        </div>
        <div id='blok'>
            <div id='card'>
                <label htmlFor="">Размер судовой партии</label>
                <input type="text"  id='input'/>
            </div>
            <div id='card'>
                <label htmlFor="">Опасность груза(класс)</label>
                <input type="text" id='input' />
            </div>
        </div>
        <div id='blok'>
            <div id='card'>
                <label htmlFor="">Дополнительная информация о грузе:</label>
                <input type="text"  id='input2'/>
            </div>
            <div id='card'>
                <label htmlFor="">Прикрепить файл</label>
                <input type="file" id='input3' />
            </div>
        </div>
        <h3 className='h3'>Просим сообщить:</h3>
        <div id='blok2'>
            <div id='card2'>
           <input type="checkbox" id='input4'/>
           <p id='text6'>Ставку ПРР</p>
            </div>
            <div id='card2'>
           <input type="checkbox" id='input4'/>
           <p id='text6'>Срок технологического накопления груза</p>
            </div>
            <div id='card2'>
           <input type="checkbox" id='input4'/>
           <p id='text6'>Ставку хранения груза сверх срока технологического накопления </p>
            </div>
            <div id='card2'>
           <input type="checkbox" id='input4'/>
           <p id='text6'>Возможность приема и перевалки груза в указанные сроки</p>
            </div>
        </div>
        <h3 className='h3'>Информация для обратной связи:</h3>
        <div id='blok'>
            <div id='card'>
                <label htmlFor="">Имя, Фамилия</label>
                <input type="text"  id='input'/>
            </div>
            <div id='card'>
                <label htmlFor="">Название компании *</label>
                <input type="text" id='input' />
            </div>
        </div>
        <div id='blok'>
            <div id='card'>
                <label htmlFor="">Номер телефона/факса</label>
                <input type="text"  id='input'/>
            </div>
            <div id='card'>
                <label htmlFor="">Адрес эл.почты *</label>
                <input type="text" id='input' />
            </div>
        </div>
       <a href=""id='a2'><p id='p4'>Отправить </p></a> 
        <Footer/>
    </div>
  )
}

export default Zapros