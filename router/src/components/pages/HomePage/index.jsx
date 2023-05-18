import {Box} from '@mui/material';

export default function HomePage (){
    return(
        
        <Box component={"span"}>
            Реалізувати сторінку "Список користувачів", дані взяти тут https://jsonplaceholder.typicode.com/users
            <br /><hr />
            При натисканні на кнопку Album під кожним користувачем вивести список альбомів конкретного користувача, url - https://jsonplaceholder.typicode.com/albums, userId – query параметр для фільтрації користувачам
            <br /><hr />
            При натисканні на кнопку Photos під кожним альбомом – вивести фото з цього альбому, урл https://jsonplaceholder.typicode.com/photos, albumId – query параметр для фільтрації альбомів.
            <hr />
        </Box>
        
    )
}