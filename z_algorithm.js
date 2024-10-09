// function computeZArray(S) {
//     let n = S.size()

//     let Z = []



// }


// vector<int> computeZArray(string S) {
//     int n = S.size();

//     vector<int> Z(n);
    
//     int l, r, k = 0;

//     for (int i = 1; i < n; i++) {
//         // Caso 1: en caso de que i este fuera de la "Z box"
//         if (i > r) {
//             l = i;
//             r = i;

//             while (r < n && S[r - l] == S[r]) {
//                 r = r + 1;
//             }

//             Z[i] = r - l;
//             r = r - 1;
//         }
//         // si i está dentro de la Z box
//         else {
//             k = i - l;

//             // Caso 2: el tamaño del substring actual dentro de la z box es MAYOR al valor z en la posición k, esto
//             // significa que NO ES posible que haya un prefijo más grande después de la z box
//             if (Z[k] < r - i + 1) {
//                 Z[i] = Z[k];
//             }
//             // Caso 3: el tamaño del substring actual dentro de la z box es MENOR O IGUAL al valor z en la posición k, esto
//             // significa que ES posible que haya un prefijo más grande después de la z box
//             else if (Z[k] >= r - i + 1) {
//                 l = i;

//                 while (r < n && S[r - l] == S[r]) {
//                     r = r + 1;
//                 }

//                 Z[i] = r - l;
//                 r = r - 1;
//             }
//         }
//     }

//     return Z;
// }


// function z(T, P) {
//     let indexes = {}

//     let S = P + "$" + T

//     let n = S.size()
//     let Psize = P.size()

//     let z = computeZArray(S)

//     for (i = 0; i < n; i++) {
//         if (Z[i] === Psize) {
//             indexes.insert(i - Psize - 1)
//         }
//     }

//     return indexes
// }


// unordered_set<int> Z(string T, string P) {
//     // crear vector que almacena los índices en donde se encuentra el patrón dado
//     unordered_set<int> indexes;


//     string S = P + "$" + T;

//     int n = S.size();
//     int Psize = P.size();

//     vector<int> Z = computeZArray(S);

//     for (int i = 0; i < n; i++) {
//         if (Z[i] == Psize) {
//             indexes.insert(i - Psize - 1);
//         }
//     }

//     return indexes;
// }