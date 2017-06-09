<?php

namespace system;

class lang
{

    static $user_1 = "Пользователь не найден";
    static $user_2 = "ID содержит запрещенные символы";
    static $user_gender = array("Не указан", "Мужской", "Женский");
    static $user_ = "";

    static $auth_1 = "Не правильный логин или пароль";
    static $auth_2 = "Пароль пуст или содержит не коректные символы";
    static $auth_3 = "Имя пользователя пустое или содержит не коректные символы";
    static $auth_4 = "Ваш аккаунт заблокирован";

    static $add_user_1 = "Имя пользователя менее %s сиволов или имеет не верный формат";
    static $add_user_2 = "Пароль не может быть длинной менее %s символов";
    static $add_user_3 = "Введенные пароли не совпадают";
    static $add_user_4 = "Пароль содержет запрещенные символы";
    static $add_user_5 = "Почтовый адресс имеет не верный формат";

    static $gender_1 = "Мужской";
    static $gender_2 = "Женский";

    static $imsg = array(
        'danger' => "Ошибка",
        'success' => "Успешно",
        'info' => "Информация"
    );

    static $month = array(
        '1' => "января",
        '2' => "февраля",
        '3' => "марта",
        '4' => "апреля",
        '5' => "мая",
        '6' => "июня",
        '7' => "июля",
        '8' => "августа",
        '9' => "сентября",
        '10' => "октября",
        '11' => "ноября",
        '12' => "декабря");

    static $post_ = "";

    static $site_ = "";

    static $page_index = "Главная страница";
    static $page_ = "";

    static $msg_success = "Выполнено";
    static $msg_danger = "Ошибка";
    static $msg_info = "Информация";

    static $temp_1 = "Невозможно загрузить шаблон";

    static $error_1 = "Страница не найдена!";
    static $error_2 = "Страница не найдена! <a href='{%site_adr%}'>вернуться на сайт</a>";

    static $main = array('А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я', 'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я', '-');
    static $end = array('a', 'b', 'v', 'g', 'd', 'e', 'e', 'gh', 'z', 'i', 'y', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'f', 'h', 'c', 'ch', 'sh', 'sch', 'y', 'y', 'y', 'e', 'yu', 'ya', 'a', 'b', 'v', 'g', 'd', 'e', 'e', 'gh', 'z', 'i', 'y', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'f', 'h', 'c', 'ch', 'sh', 'sch', 'y', 'y', 'y', 'e', 'yu', 'ya', '-');


}