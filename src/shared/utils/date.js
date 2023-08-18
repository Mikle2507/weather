export function formatDate(date = new Date()) {
    const days = [
        'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'
    ];

    const month = [
        'янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
    ];
    const day = days[date.getDay() - 1];
    const dd = date.getDate();
    const mm = month[date.getMonth()];

    return `${day}, ${dd} ${mm}`;
}