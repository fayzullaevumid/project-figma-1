import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div>
       <div className='karobka1'>
        <div className='mini'>
        <img className='location' src="https://www.svgrepo.com/show/475828/location-pointer.svg" alt="" />
           <p>123456, г.Тавима, ул.Морская, д.21</p> 
        </div>
        <p className='text8'>ᐯᏆᔑᗰᗩ</p>
        <img className='call' src="https://www.svgrepo.com/show/426602/call-reply.svg" alt="" />
        <p>+7(123)456-67-89</p>
        <img className='email' src="https://www.svgrepo.com/show/262846/email-mail.svg" alt="" />
        <p>order@visma.ru</p>
       </div>
       <div className='karobka2'>
        <div className='karobki'>
            <h3>Информация о ЮР.лице </h3>
            <p className='text9'>ОГРН 11111111111111 <br />
                ИНН 2222222222 <br />
                КПП 33333333333 <br />
                ОКПО 44444444444 ОКВЭД 52.24 <br />
                ОКТМО 55555555555555
            </p>
        </div>
        <div className='karobki'>
            <h3>Закупки </h3>
            <p className='text9'>
                Нормативные документы <br />
                Закупки на VISMA Order <br />
                Закупки на VISMA Tender <br />

            </p>
        </div>
        <div className='karobki'>
            <h3>Акционерам </h3>
            <p className='text9'>
               Устав VISMA <br />
               Свидетельства госрегистрации <br />
               Список аффлированных лиц <br />
               Информация <br />
               Отчеты

            </p>
        </div>
        <div className='karobki'>
            <h3>О Компании </h3>
            <p className='text9'>
              Порт сегодня <br />
              Характеристики порта <br />
              История <br />
              Дипломы и награды <br />
              Транспортная безопастность <br /> 
              Экология  <br />
              Правовая информация
            </p>
        </div>
       </div>
    </div>
  )
}

export default Footer