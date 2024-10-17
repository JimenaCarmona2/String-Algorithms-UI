export class TrieNode {
    // Un nodo de Trie guarda un solo caracter de un string y los nodos hijos que le siguen
    end: boolean; // Termina el string
    character?: string;
    children: Map<string, TrieNode>;

    constructor(character?: string) {
        // El nodo se incializa con:
        this.character = character; // El caracter dado del string
        this.children = new Map<string, TrieNode>(); // Estructura vacía de nodos hijos
        this.end = false; // No termina
    }

    isEnding(): boolean {
        // Regresa verdadero si termina y falso si no
        return this.end;
    }

    numChildren(): number {
        // Regresa el número de hijos del nodo
        return this.children.size
    }

    hasChild(character: string): boolean {
        // Regresa verdadero si uno de sus hijos tiene el caracter dado
        return this.children.has(character);
    }

    getChild(character: string): TrieNode {
        // Regresa el nodo hijo con el caracter si se encuentra, sino regresa error
        if (this.hasChild(character)){
            return this.children.get(character)!;
        }
        throw new Error (`No child exists for: ${character}`)
    }

    addChild(character: string, child_node: TrieNode): void {
        /* Agrega un nodo hijo (child_node) al caracter dado (character). Si el nodo hijo 
        ya existe para ese caracter, regresa error */
        if(!this.hasChild(character)){
            this.children.set(character, child_node);
        } else {
            throw new Error (`Child exists for ${character}`);
        }
    }
}