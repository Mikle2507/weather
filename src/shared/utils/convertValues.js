export const convertPressure = (value = 0) => {
    const mmrs = 0.750064;
    return Math.round(value * mmrs);
}