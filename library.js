//  FUNZIONE CHE GENERA NUMERI RANDOM
function getRandomInt(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max -min) + min);
};

// FUNZIONE CHE GENERA COLORI RANDOM
function generateRandomColor() {
    const symbols = '0123456789ABCDEF';
    const lastSymbolIndex = symbols.length - 1;
    let color = '#';
    for(let i = 0; i < 6; i++) {
        const randomIndex = getRandomInt(0, lastSymbolIndex);
        const randomSymbol = symbols.charAt(randomIndex); // oppure symbols[randomIndex];
        color += randomSymbol;
    }
    return color;
};

/** 
@param {String} stringa
@return {string}
*/

//  FUNZIONE PER PORTARE IN UPPERCASE LA PRIMA LETTERA
function capitalize(stringa){
    return stringa[0].toUpperCase() + stringa.slice(1).toLowerCase();
}
