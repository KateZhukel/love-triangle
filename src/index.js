/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let pair = [];
    let count = 0;
    for (let i = 0; i <= preferences.length -1 ; i++) {
        let firstLoved = preferences[i];
        let secondLoved = preferences[firstLoved-1];
        let thirdLoved = preferences[secondLoved-1];
        if(firstLoved === secondLoved || secondLoved === thirdLoved ||
            thirdLoved === firstLoved){
            continue;
        }
        if(thirdLoved === i+1 && (!pair.includes(firstLoved) ||
                                !pair.includes(secondLoved) ||
                                !pair.includes(thirdLoved))){
            pair.push(firstLoved);
            pair.push(secondLoved);
            pair.push(thirdLoved);
            count++;
        }
    }
    return count;
};
