import { HashTable, print } from "./hashMap.mjs";
const hashMap = new HashTable();

// 1 first build chains for  each buckets in order to
//  have different values in the same key

hashMap.buildChains();

// 2 then let's set values to be in the hash table
// here you can notice that values with the same 
// key are overwritten and those with different key
// and the same hashCode are bunched together with
// the same array

hashMap.set('Mattew', 'prey');
hashMap.set('John', 'Doe');
hashMap.set('Micheal', 'Jakson');
hashMap.set('Mattew', 'Perry');
hashMap.set('Ross', 'Geller');
hashMap.set('Pheobe', 'Kudrow');

// 3 let get data using a key;

print(hashMap.get('Mattew'))
// [ { Mattew: 'Perry' } ]
// there you go

// 4 and now check whether there is a specified key in the hash table

print(hashMap.has('Ros'))
// false

print(hashMap.has('Ross'))
// true

// 5 let's remove key on the specified key

hashMap.remove('Micheal')
// check here
print(hashMap.hashTable)


// 6 check length of the hashmap 
print(hashMap.length())

//  8 getting the array of keys in the hash map data

print(hashMap.keys())

// 9 now array of the values

print(hashMap.values())

// 10 entries
print(hashMap.entries())

// 7 clear everything
hashMap.clear()
//  check here
print(hashMap.hashTable)

// fool around with it !