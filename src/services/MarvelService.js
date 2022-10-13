

class MarvelService {
   _apiBase = 'https://gateway.marvel.com:443/v1/public/';
   _apiKey = 'apikey=752647a63164270802a3cf95e021920e';

   getResource = async (url) => {
      let res =  await fetch(url);

      if (!res.ok) {
         throw new Error(`Could not fetch ${url}, status: ${res.status}`);
      }

      return await res.json();
   }

   getAllCharacters = () => {
      return this.getResource(`${this._apiKey}characters?limit=9&offset=215&${this._apiKey}`);
   }

   getCharacter = (id) => {
      return this.getResource(`${this._apiKey}characters/${id}?${this._apiKey}`);
   }
}

export default MarvelService;