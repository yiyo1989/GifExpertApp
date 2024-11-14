
const apiKey='UkdomiVzNarj4C6wsCT2cnKcfJ61e1e1';


export const getGifs = async (category) =>
    {
    
      const urlGiphy = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=5`;
    
      const resp = await fetch(urlGiphy);

   
      const {data}  = await resp.json();

      const gifs = data.map(img =>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url        
    }));

      return (gifs);
    
    }