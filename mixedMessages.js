
// word library for random fortune generator
let verbs = ['run from','save','fight','marry','punch','kiss','kick','bite'];
let adverbs = ['angrily','fiercely','softly','painfully','slowly','lovingly'];
let prepositions = ['far away from','near','inside','below','above','beside','past','towards','behind'];
let nouns = ['Michael Jordan','a herd of wild pigs','a crowd of angry children','a feisty chicken',
'the woman of your dreams','the man of your dreams','your best friend'];
let places = ['Bangkok','a rollerskating rink','Dennys','Botswana','Boston','LA','a swamp',
'a sports arena','a stony field','a rocky gorge','Jamaica'];
// will display 'that you will || that you will not'
// statements representing fortune likelihood
let likelihood = ['It seems likely','The outcome is hazy but I see','I am certain',
'It seems unlikely','I am sort of seeing'];
// functions to get random words from each array 
const verbGenerator = () => {
    let randomVerb = verbs[Math.floor(Math.random()*verbs.length)];
    return randomVerb;
}

const adverbGenerator = () => {
    let randAdverb = adverbs[Math.floor(Math.random()*adverbs.length)];
    return randAdverb;
}

const prepGenerator = () => {
    let randPreposition = prepositions[Math.floor(Math.random()*prepositions.length)];
    return randPreposition;
}

const nounGenerator = () => {
    let randNoun = nouns[Math.floor(Math.random()*nouns.length)];
    return randNoun;
}

const placeGenerator = () => {
    let randPlace = places[Math.floor(Math.random()*places.length)];
    return randPlace;
}

const willOrNot = () => {
    let goodOrBad = Math.floor(Math.random()*2);
    if (goodOrBad ===1) {
        return "that you will";
    } else {
        return "that you will not";
    }
    
}

const likeGenerator = () => {
    let Likely = likelihood[Math.floor(Math.random()*5)];
    return Likely;
}


console.log(`${likeGenerator()} ${willOrNot()} ${adverbGenerator()} ${verbGenerator()} ${nounGenerator()} ${prepGenerator()} ${placeGenerator()} `);
