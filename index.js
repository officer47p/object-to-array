// I'm glad to help me in this project.
// Please fork me in Github and consider that this is my first app.

function objecttoarray(obj){
    let rkeys = []; // returned keys list
    let rvalues = []; // returned values list
    let pobj = JSON.stringify(obj); // turns the given object into a string
    if(pobj.indexOf('""') != -1 || pobj.indexOf("''") != -1){ // if there was an empty key or value, it will return false
        return false;
    } else{ // if every thing was OK:
        pobj = pobj.split(","); // splits the key-values
        pobj.forEach(item => { // on every item in key-values list:
            let startqoute = item.indexOf('"'); // locates the first double-quotation's index
            startqoute += 1; // in slicing we need to start from the index that "key" starts
            let endqoute = item.indexOf('"', startqoute); // locates the end double-quotation's index
            rkeys.push(item.slice(startqoute, endqoute)); // slices the "key" from the string
        });
        rkeys.forEach(item => { // walking over the keys and finding values
            rvalues.push(obj[item]); // pushing values into values list
        })
        return [rkeys, rvalues]; // returns the results
    }
}

module.exports = jsontoarray; // exports the function