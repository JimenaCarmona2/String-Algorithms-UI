function computeZArray(S: string) {
    let n = S.length;

    let Z = Array(n).fill(0);

    let l = 0, r = 0, k = 0;

    for (let i = 1; i < n; i++) {

        if (i > r) {
            l = i;
            r = i;
        

            while (r < n && S[r - l] === S[r]) {
                r = r + 1;
            }

            Z[i] = r - l;
            r = r - 1;
        }
        else {
            k = i - l;

            if (Z[k] < r - i + 1) {
                Z[i] = Z[k];
            }
            else if (Z[k] >= r - i + 1) {
                l = i;

                while (r < n && S[r - l] === S[r]) {
                    r = r + 1;
                }

                Z[i] = r - l;
                r = r - 1;
            }
        }
        
    }

    return Z;
}

// regresa los índices en donde empieza la subcadena P dentro de T, para poder encontrar el rango
// en el que está la palabra se calcula el índice más el tamaño de P
export default function Z(T: string, P: string) {
    let indexes = Array(0);

    let S = P + '$' + T;

    let n = S.length;
    let Psize = P.length;

    let Z = computeZArray(S);

    for (let i = 0; i < n; i++) {
        if (Z[i] === Psize) {
            indexes.push(i - Psize - 1);
        }
    }

    return indexes;
}

