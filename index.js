// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name) {
    const newCats = cats.push(name);
    return newCats;
}

function destructivelyPrependCat(name) {
    const newNewCats = cats.unshift(name);
    return newNewCats;
}

function destructivelyRemoveLastCat(name) {
    const newwwCats = cats.pop(name);
    return newwwCats;
} 

function destructivelyRemoveFirstCat(name) {
    const newNewNewCats = cats.shift(name);
    return newNewNewCats;
}

function appendCat(name) {
    const fuckingCats = [...cats, name];
    return fuckingCats;
}
function prependCat(name) {
    const moreMotherFuckingCats = [name, ...cats];
    return moreMotherFuckingCats;
}
function removeFirstCat() {
    const fuckingCatsBro = cats.slice(1);
    return fuckingCatsBro;
}
function removeLastCat() {
    const wtf = cats.slice(0,-1);
    return wtf;
}