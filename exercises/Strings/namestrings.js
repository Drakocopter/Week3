function parseAndDisplayName(name){
    spacePosition = name.indexOf(" ")
    let first = name.slice(0,spacePosition)
    let last = name.slice(spacePosition+1)

    console.log(`Full Name: ${name}`);
    console.log(`First Name: ${first}`);
    console.log(`Last Name: ${last}`);
    console.log("")
}

parseAndDisplayName(`Brenda Kaye`)