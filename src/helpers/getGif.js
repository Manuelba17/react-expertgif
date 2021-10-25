

export const getGif = async(categories) => {

    const apiKey ='C0UHCJVMqnzF9UbwTSNZ9ZC19a26XTIS'
    const url = `https://api.giphy.com/v1/gifs/search?limit=15&g=&q=${ encodeURI( categories)}&api_key=${apiKey}`    
    const resp = await fetch(url);
    const {data} = await resp.json()


    const gif = data.map(img => {
        return{
            id: img.id,
            titulo: img.title,
            url: img.images?.downsized_large.url
        }
    })

    return gif;
    
}