function computeManacherString(T: string) {
    let manacherString = '';

    for (let i = 0; i < T.length; i++) {
        manacherString = manacherString + '#' + T[i];
    }

    manacherString = '@' + manacherString + '#&';

    return manacherString;
}

// regresa un string del palíndromo más largo en una cadena
export default function longestPalindromicSubstring(T: string) {
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