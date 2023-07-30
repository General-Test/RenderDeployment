# csv-uploader


## Cloud Hosted App

1. Backend: https://csv-uploader-1.herokuapp.com/
2. Frontend: https://csv-uploader-app.netlify.app/
3. MongoDB: https://cloud.mongodb.com/

## Pre-Requisite

1. Node: 14.15
2. npm: 6.14
3. dB: https://cloud.mongodb.com/ 

## Deployment

##### Server:

1. Login to `https://cloud.mongodb.com/ ` to create mongodb cluster, user,network access and connection url
2. Create a `.env` file and add PORT and CONNECTION_URL in it. Refer `.env.example` file
3. Run `npm install` it will install all dependencies 
4. Run `npm start` for running the server
5. Open browser and check server is up or not, example `http://localhost:5000/` or `http://localhost:5000/uploads`

##### Client:

1. Run `npm install` it will install all dependencies 
2. Run `npm start` for running the client, example `http://localhost:3000/`



## Third Party Libraries:

1. @material-ui/core: To get proper styling
2. material-table: To handle tables operations
3. redux : To save the state of component


## Demo

![Csv_Uploader](https://user-images.githubusercontent.com/34151615/119337299-48feff80-bcac-11eb-9dc7-b7d30b5bc4d5.gif)


##### Note:

1. Here all of the table operation is handled by client side to speed up the development. We can also handle  these things in backend by sending proper request to express server.
2. The Backend of the server is hosted on heroku,`https://dashboard.heroku.com/apps`
3. The Frontend is hosted on netlify,`https://app.netlify.com/sites/csv-uploader-app/settings/domain`
4. The Database is hosted on MongoDB Atlas, `https://cloud.mongodb.com/ `
