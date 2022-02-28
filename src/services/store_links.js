export async function getLinksSave(key) {
    const myLinks = await localStorage.getItem(key)

    let linksSaves = JSON.parse(myLinks) || [];

    return linksSaves;
}

export async function saveLink(key, newLink){
    let linksStored = await getLinksSave(key)

    const hasLink = linksStored.some( link => link.id === newLink.id)

    if (hasLink) {
        console.log('This link already exists in your list!')
        return
    }

    linksStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linksStored))
    console.log('Link saved with success!')
}

export function deleteLink(Links, id) {

    let myLinks = Links.filter(item => {
        return (item.id !== id)
    })


    localStorage.setItem('@shortenLink', JSON.stringify(myLinks))
    console.log("Link deleted with success!")

    return myLinks
}