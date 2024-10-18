import { TrieNode } from "./TrieNode";

export class TrieTree {
    strings?: string[];
    start_char: string;
    root: TrieNode;
    size: number;

    constructor(strings: string[] = []) {
        this.strings = strings; // Inserta los strings en el árbol
        this.start_char = ''; // Constante
        this.root = new TrieNode(this.start_char); // Constante en el nodo raíz
        this.size = 0; // Número de strings en el árbol

        if(Array.isArray(this.strings) && this.strings.length > 0) {
            // Si hay un string dado
            for (let i = 0; i < this.strings!.length; i++)
                this.insert(strings[i]); // Se insertan en el árbol
        }
    }

    insert(str: string): void {
        let node = this.root;
        for (let i = 0; i < str.length; i++) {
            if (node.hasChild(str[i])) { // Si el caracter del nodo hijo es igual al caracter del string en el indice
                node = node.getChild(str[i]); // Se mueve a ese caracter nodo hijo
            } else {
                node.addChild(str[i], new TrieNode(str[i])) // Si no, se agrega un nuevo caracter nodo hijo en el árbol
                node = node.getChild(str[i]); // Se mueve al siguiente caracter nodo hijo
            }
        }

        if (!node.isEnding()) {
            this.size += 1;
            node.end = true;
        }
    }

    /* Input: string 
    Output: par del último nodo en el árbol que coincide con el prefijo del input
    y el tamaño del último nodo hasta el primero.
    */
    private findNode(str: string): [TrieNode, number] {
        if (str.length == 0) { // Si no hay string
            return [this.root, 0]; // Vacío
        }

        let [node, depth] = [this.root, 0];
        for (let i = 0; i < str.length; i++) {
            if (node.hasChild(str[i])) {
                node = node.getChild(str[i]); // Siguiente nodo
                depth += 1;
            } else {
                return [node, 0]; // No autocompleta para los no nodos hijos.
            }
        }

        return [node, depth]
    }

    // visit es una función callback que recibe un string (str) y no regresa nada (void)
    private transverse(node: TrieNode, prefix: string, visit: (str: string) => void): void {

    }

}