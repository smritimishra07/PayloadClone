### Payload CMS

## Documents Updates

| **Version** | **Created**   | **Updated**    |
|-------------|---------------|----------------|
| 0.0.1       | 09 Dec 2024   |  09 Dec 2024   |

IMPORTANT:  When ever you update this document, change the update date and version

## Environment 
To run this project, you will need to add have

| **Environment** | **Version**  |
|-----------------|--------------|
| Node.js         | v22.11.0*    |
| React           | v19.0.0      |
| Next.js         | v15.0.4      |
| MongoDB         | v5.0         |

## Documentation 
This project has three directories:  
- `react-client` (for frontend using React.js)  
- `backend` (for backend using Node.js)  
- `payload` (Payload CMS - Nextjs)  


## Installation backend
Change Directory
    cd backend 

Install dependencies
    npm install

Run Nodejs
    node server.js

Backend url 
    http://localhost:4000

## Installation frontend-react 
Change Directory
    cd react-client 

Install React 
    npm install 

Run React 
    npm run dev 

Frontend URL 
    http://localhost:3000 

Note: 
Refer to .env.sample to make .env 

## Installation Payload 
Change Directory 
    cd payload

Install Payload 
    npm install

Run Payload 
    npm run dev 

Payload URL 
    http://localhost:8000

Payload Admin Panel
    http://localhost:8000/admin 

Note : 

- refer to .env.sample to make .env 
- For database MongoDB is used. Sample Connection string is in .env.sample . Use your Credentials for the mongodb connection.


## API for fetching Users from backend 
    http://localhost:4000/api/users

The body of the GET Request will be :
    Request Body:
    {
            "id": 1,
            "name": "smriti",
            "email": "smriti@valuebound.com"
        },
        {
            "id": 2,
            "name": "raunak",
            "email": "raunak@valuebound.com"
        }


## Contributors

| **Name**              | **Email**                  | **POC Name**       |
|-----------------------|----------------------------|--------------------|
| [Smriti Mishra]()     | <smriti@valuebound.com>    | PayloadCMS         |
| [Raunak Jaimini]()    | <raunak@valuebound.com>    | PayloadCMS         |