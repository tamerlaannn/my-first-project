import React from 'react'
import Chat from './Chat'

function Chats() {
    return (
        <div className='chats'>
            <Chat
                name="Aya Shalkar"
                message="Привет"
                timestamp="10 минут назад"
                profilePic="https://pbs.twimg.com/media/EOH2KsGUUAAPU1F.jpg:large"
            />
            <Chat
                name="Irina Sheik"
                message="Приветики"
                timestamp="1 час назад"
                profilePic="https://images11.graziamagazine.ru/upload/img_cache/4f9/4f9f5aaa6484d732b7b551b6907b256c_cropped_666x500.jpg" />
            <Chat
                name="Nastya Petrova"
                message="Привет"
                timestamp="2 часа назад"
                profilePic="https://znaydaydzest.ru/wp-content/uploads/2020/08/%D1%8F%D0%BD%D0%B0-4-%D0%BF-1024x680.jpg" />
            <Chat
                name="Damelya Sweet"
                message="Приедешь?"
                timestamp="3 часа назад"
                profilePic="https://sun9-65.userapi.com/impg/IBQIcrS05xs86WHEpDRl5oIo_T2SxnP8PMlhng/74yIY5v5U0s.jpg?size=453x604&quality=95&sign=398498f47cb9bf94d757748436e9896d&type=album" />
            <Chat
                name="Lena Gornostayeva"
                message="Познакомимся?"
                timestamp="1 день назад"
                profilePic="https://znaydaydzest.ru/wp-content/uploads/2021/01/lena-gornostaeva418.jpg" />
        </div>
    )
}

export default Chats