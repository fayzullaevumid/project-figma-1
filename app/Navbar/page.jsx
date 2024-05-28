'use client'
import React, { useState } from 'react'
import './navbar.css'


const Navbar = () => {
    const [login, setLogin] = useState('')
  return (
    <div>
      <div className='navbar'>
        <div><a href="/">
        <img className='icon' src="visma.jpg" alt="" />
        </a>
        </div>
        <a  href="" className='a'>О Компании</a>
        <a className='a1' href="">Новости</a>
        <a className='a1 ' href="">Услуги</a>
        <a className='a1' href="">Клиенты</a>
        <a href="/Zayavka" className='a1'>Заявки</a>
        <a href="/Zapros" className='a1'>Запросы</a>
        <a className='a1' href="">О Нас</a>
        <img className='icon1' src="https://www.svgrepo.com/show/425986/search.svg" alt="" />
        <input 
        className='input'
        type="text" 
        placeholder='Поиск'
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        />
      </div>
    </div>
  )
}

export default Navbar;