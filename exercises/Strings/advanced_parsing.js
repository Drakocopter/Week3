function parseAndDisplayName(name) {
    let delimterSpace = " ";
    let partsArrayList = name.split(delimterSpace);
    console.log(name)
    if (partsArrayList.length == 1) {
        console.log(`Only name: ${name}`)
    }
    else if (partsArrayList.length == 2) {
        console.log(`First name: ${partsArrayList[0]}`)
        console.log(`Last name: ${partsArrayList[1]}`)
    }
    else {
        console.log(`First name: ${partsArrayList[0]}`)
        console.log(`Middle name: ${partsArrayList[1]}`)
        console.log(`Last name: ${partsArrayList[2]}`)
    }
    console.log("")
}
parseAndDisplayName("Beyoncé");
parseAndDisplayName("Keanu Reeves");
parseAndDisplayName("Joseph Gordon Levitt");
// Do you need to give the space or symbol a name before splitting?