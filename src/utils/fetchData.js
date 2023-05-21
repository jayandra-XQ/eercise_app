export const exerciseOptions = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '15129050e4msh132810c8351980fp1effe9jsn739354ee999c',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };



export const fetchData = async (url, options) =>{

    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}