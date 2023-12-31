const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'


// const gifts = ['juego', 'puzzle']
// const materials = 'jlepuz'

// const gifts = ['libro', 'ps5']
// const materials = 'psli'


// 1. gifts to iterate
// 2. then iterate each char based on material
// 3. outside of inner for isPossible = true;
// 4. the first char which is not included isPossible = false;
// 5. if isPossible was true, push to madeGifts
// 6. if isPossible was true, continue;
// 7. return the list;aga ja

function manufacture(gifts, materials) {
    const madeGifts = gifts.filter((word)=>{ 
         for (let char of word) {
             if (!materials.includes(char)) return false;
         }
         return true;
     })
 
     return madeGifts;
 }

console.log(manufacture(gifts, materials) );