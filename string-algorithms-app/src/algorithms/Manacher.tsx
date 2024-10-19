import { Z } from './Z'

function computeManacherString(T: string) {
    let manacherString = '';

    for (let i = 0; i < T.length; i++) {
        manacherString = manacherString + '#' + T[i];
    }

    manacherString = '@' + manacherString + '#&';

    return manacherString;
}

// regresa un string del palíndromo más largo en una cadena
function longestPalindromicSubstring(T: string) {
    let manacherString = computeManacherString(T);

    let P = Array(manacherString.length).fill(0);

    let C = 0, R = 0, maxIndex = 0, maxSize = 0;

    for (let i = 1; i < manacherString.length - 1; i++) {
        let mirror = 2 * C - i;

        if (i < R) {
            P[i] = Math.min(R - i, P[mirror]);
        }

        while (manacherString[i + (1 + P[i])] === manacherString[i - (1 + P[i])]) {
            P[i]++;
        }

        if (i + P[i] > R) {
            C = i;
            R = i + P[i];
        }

        if (P[i] > maxSize) {
            maxIndex = i;
            maxSize = P[i];
        }
    }

    let start = Math.floor((maxIndex - maxSize) / 2);
    let palindrome = T.substring(start, start + maxSize);

    return palindrome
}

// regresa un html con etiquetas de <mark> que enciearran a los palíndromos más largos
export default function highlightedPalindromeHTML(T: string, setText1Content: React.Dispatch<React.SetStateAction<string>>, fileContent2: string, setText2Content: React.Dispatch<React.SetStateAction<string>>) {

    let palindrome = longestPalindromicSubstring(T);
    let indexes = Z(T, palindrome);
    let stringSize = palindrome.length;

    let html = '';

    let i = 0;

    while (i < T.length) {
        if (indexes.includes(i)) {
            html = html + '<mark style="background-color: lightgreen;">';

            for (let j = 0; j < stringSize && (i + j) < T.length; j++) {
                html = html + T[i + j];
            }

            html = html + '</mark>'
            i = i + stringSize;
        }
        else {
            html = html + T[i];
            i++;
        }
    }

    // el texto subrayado del palíndromo se asigna a text1
    setText1Content(html);

    // el texto 2 se resetea al texto original para evitar confusiones
    setText2Content(fileContent2);
}