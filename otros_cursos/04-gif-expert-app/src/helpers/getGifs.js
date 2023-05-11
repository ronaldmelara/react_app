export const getGifs =  async(category)=>{
    const apiKey = 'voLM4cYjrzEwKgZpY0oZh1ShoNjeuBeY';
    const peticion = fetch(`http://api.giphy.com/v1/gifs/search?api_key=${ apiKey }&q=${ category }&limit=10`);

    peticion.then( resp => resp.json())
    .then(({data})=>{

        const gifs = data.map( img => ({
          id: img.id,
          title: img.title,
          url: img.images.downsized_medium.url
        }));

        console.log(gifs);

        return gifs;
    })
    .catch(console.warn); 
  }