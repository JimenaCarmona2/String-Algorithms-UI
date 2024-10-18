function LCS(T1: string, T2: string) {
    let m = T1.length;
    let n = T2.length;

    // Matriz de tabulación, se usa para comparar los caractéres de las dos palabras
    let dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));
    let stringLength = 0;
    let finalIndexT1 = 0;
    let finalIndexT2 = 0;
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (T1[i - 1] === T2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                
                // se actualiza para encontrar la subcadena más larga
                if (dp[i][j] > stringLength) {
                    stringLength = dp[i][j];
                    finalIndexT1 = i - 1;
                    finalIndexT2 = j - 1;
                }


            } else {
                dp[i][j] = 0;
            }
        }
    }
    
    let startIndex1 = finalIndexT1 - stringLength + 1; 
    let startIndex2 = finalIndexT2 - stringLength + 1;

    return { stringLength, startIndex1, startIndex2 };
}

// regresa un html con etiquetas de <mark> que enciearran a los palíndromos más largos
export default function highlightedLCSHTML(T1: string, T2: string, setText1Content: React.Dispatch<React.SetStateAction<string>>, setText2Content: React.Dispatch<React.SetStateAction<string>>) {

    let LCSResult = LCS(T1, T2);

    let stringLength = LCSResult.stringLength;
    let startIndex1 = LCSResult.startIndex1;
    let startIndex2 = LCSResult.startIndex2;

    // construir HTML del texto 1
    let htmlText1 = '';

    let i = 0;

    while (i < T1.length) {
        if (i === startIndex1) {
            htmlText1 = htmlText1 + '<mark>';

            for (let j = 0; j < stringLength && (i + j) < T1.length; j++) {
                htmlText1 = htmlText1 + T1[i + j];
            }

            htmlText1 = htmlText1 + '</mark>'
            i = i + stringLength;
        }
        else {
            htmlText1 = htmlText1 + T1[i];
            i++;
        }
    }

    // construir HTML del texto 2
    let htmlText2 = '';

    i = 0;

    while (i < T2.length) {
        if (i === startIndex2) {
            htmlText2 = htmlText2 + '<mark>';

            for (let j = 0; j < stringLength && (i + j) < T2.length; j++) {
                htmlText2 = htmlText2 + T2[i + j];
            }

            htmlText2 = htmlText2 + '</mark>'
            i = i + stringLength;
        }
        else {
            htmlText2 = htmlText2 + T2[i];
            i++;
        }
    }

    setText1Content(htmlText1);
    setText2Content(htmlText2);
}