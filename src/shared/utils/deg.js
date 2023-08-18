const directions = ['С', 'СВ', 'В', 'ЮВ', 'Ю', 'ЮЗ', 'З', 'СЗ'];

export const getDirectionByDeg = (value=0) => {
    const val =  Math.floor((value / 45) + 0.5);
    return directions[(val % 8)];
}