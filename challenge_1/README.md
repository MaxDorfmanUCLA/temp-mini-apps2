Name
Historical Events Finder.

Description
This app enables users to search and browse historical event information based on data found in the JSON file included with this repo. The UI allows the user to search for historical events based on a date keyword. It uses the full-text search features of json-server to return a result to the UI for browsing. It paginate the list of events with 10 results per page for easy viewing.

Installation
Once you have cloned this repo, run <npm install> to install all dependencies. To start the json-server run the script <npm run start>. This command runs nodemon and opens the server to respond to client side requests on an exposed port. To transpile the JS code to work for React components run the script <npm run react-dev>, and this will start webpack and watch for changes automatically. Lastly, run <npm run build> to serve up the static HTML page (UI) for the client side code.


Usage
SEARCH: -200 
RESULTS: 
1. {"date":"-200","description":"Antiochus III's forces continue their invasion of Coele Syria and Palestine.","lang":"en","category1":"By place","category2":"Seleucid Empire","granularity":"year"}

2. {"date":"-200","description":"Philip V of Macedon's fleet defeat the Rhodians at Lade. His forces then advance into Pergamum, plundering Pergamese territory and attacking cities in Caria.","lang":"en","category1":"By place","category2":"Greece","granularity":"year"}

3. ...ect