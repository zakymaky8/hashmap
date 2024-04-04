function print(data) {
    console.log(data)
}

class HashTable {
    constructor() {
        this.hashTable = new Array(16);
    }

    buildChains() {
        for (let o=0; o<this.hashTable.length; o++) {
            this.hashTable[o] = new Array(0);
        }
    }

    hash(data) {
        let prime = 37;
        let hashCode = 0;
        for (let i=0; i< data.length; i++) {
            hashCode =  prime * hashCode + data.charCodeAt(i)
        }
        return hashCode % this.hashTable.length;
    }

    set(key, val) {
        let arr = [];
        const ind = this.hash(key);
        let keyAt = this.hashTable[ind];
    
        for (let i=0; i<keyAt.length; i++) {
            arr = arr.concat(Object.keys(keyAt[i]))
        }
    
        if (arr.includes(key)) {
            for (let i=0; i<keyAt.length; i++) {
                if (Object.keys(keyAt[i]).includes(key)) {
                    keyAt[i][key] = val 
                }
            }
        }
        else 
            keyAt.push({[key]: val})
    }

    get(key) {
        return this.hashTable[this.hash(key)]
    }

    has(key) {
        if (this.hashTable[this.hash(key)][0]) 
            return true;
        else 
            return false;
    }

    remove(key) {
        if (this.hashTable[this.hash(key)][0]) {
            let there = this.hashTable[this.hash(key)]
            for (let i=0; i<there.length; i++) {
                if (Object.keys(there[i]).includes(key)) {
                    there  = there.splice(i, 1)
                }
            }
             print(true)
        }
        else {
            print(false)
        }
    }

    length() {
        let len = 0;
        for (let i=0; i< this.hashTable.length; i++) {
            for (let j=0; j<this.hashTable[i].length; j++) {
                if (this.hashTable[i][j]) {
                    len++
                }
            }
        }
        return len
    }

    clear() {
        this.buildChains()
    }

    keys() {
        let keysArr = [];
        for (let q=0; q< this.hashTable.length; q++) {
            for (let s=0; s< this.hashTable[q].length; s++) {
                if (this.hashTable[q][s]) {
                    keysArr = keysArr.concat(Object.keys(this.hashTable[q][s]))
                }
            }
        }
        return keysArr;
    }

    values() {
        let valArr = [];
        for (let q=0; q< this.hashTable.length; q++) {
            for (let s=0; s< this.hashTable[q].length; s++) {
                if (this.hashTable[q][s]) {
                    valArr = valArr.concat(Object.values(this.hashTable[q][s]))
                }
            }
        }
        return valArr;
    }

    entries() {
        let keyValArr =[];
        let subArr = [];
        for (let s=0; s<this.hashTable.length; s++) {
            for (let i=0; i<this.hashTable[s].length; i++) {
                if (this.hashTable[s][i]) {
                    subArr = Object.keys(this.hashTable[s][i]).concat(Object.values(this.hashTable[s][i]))
                    keyValArr.push(subArr)
                }
            }
        }
        return keyValArr
    }

    showData() {
        for (let i=0; i< this.hashTable.length; i++) {
            if (this.hashTable[i][0]) {
                print(i + ' ' + this.hashTable[i])
            }
        }
    }
    
}

export { HashTable, print }