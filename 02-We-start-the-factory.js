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
// 7. return the listreturn madeGifts;return madeGifts;return madeGifts;return madeGifts;
function manufacture(gifts, materials) {
    const madeGifts = [];

    for (let i = 0; i < gifts.length; i++) {
        const word = gifts[i]; 
        let isPossible = true;
            
        for (let j = 0; j < word.length; j++) {
            const char = word[j]; 

            if (materials.includes(char)) continue;
            isPossible = false;

        }

        if (isPossible) {
            madeGifts.push(word);
        }
        
    }

    return madeGifts;
}


console.log(manufacture(gifts, materials) );