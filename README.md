## Description:
This is the best way I found to put a Vlog that reflects the content of my YouTube channel's playlist. I have managed to have the description formatted to my liking, but still I wasn't able yet to make the `target=_blank` on the linkify(1.0.0-alpha), I guess we will see if they update it one day.

Features:
* Youtube API v3 on React (title, video, description)
* Formatted description.
* If you have links in your description, they will show as clickable links.
* The video playlist will show the latest post first on top.


## Eazy to use:
### Steps: 
1. Download or clone repo.
2. Copy needed component to your project.
3. Add the necessary dependencies
..* react-linkify
..* I have use Materialize CSS for the video-container class, but it's really not necessary. (https://materializecss.com/media-css.html).
4. Create and Activate your Youtube API --> https://developers.google.com/youtube
5. Create a `.env` file in your project source (NOT IN THE "src" FOLDER) with your API Key (REACT_APP_YOUTUBE_API_KEY="your API key here").
6. You might have to restart your server.
7. Yarn or NPM install and you are good to go!

Enjoy and Ping me if you need help, have question or see potential for improvement!
