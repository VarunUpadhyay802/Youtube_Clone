
const GOOGLE_API_KEY = "AIzaSyDKjGeAyhjtXIBr2BJcWuS7wmQTX9Dzt0s"
const CORS_REMOVER="https://thingproxy.freeboard.io/fetch/"
export const MOST_POPULAR_VID_YT_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=US&key=" + GOOGLE_API_KEY
export const YT_AUTOSUGGEST_API=CORS_REMOVER+"http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="