# Easy Agreement

Easy Agreement is a web-based application designed to simplify the understanding of legal contracts. The application allows users to upload legal contracts in PDF format and generate summarized versions, making the complex language more accessible and easier to comprehend.

## Features

- Contract Summarization: Upload legal contracts in PDF format and generate concise summaries of the most important points within the document.
- Accessibility Options: Customize font size, utilize the read-aloud feature, and translate the summary into preferred languages to enhance accessibility for all users.
- User-Friendly Interface: Easy-to-use web interface that simplifies the process of uploading, generating, and accessing summarized legal contracts.

## Getting Started

To use Easy Agreement locally, follow these steps:

1. Clone the repository: `git clone https://github.com/ri-tae-ka/EasyAgreement.git`
2. Navigate to the project directory: `cd easy-agreement`
3. Install dependencies in root folder as well as client folder: `npm install`
4. Create a `.env` file ~ `server/config/config.env` as `.env.sample`
5. Create another `.env` file in the `/client` folder as `.env.sample`
6. Start the server side: `npm run dev`
7. Start the client side in another terminal: `cd client` and `npm start`
8. Access the application in your web browser at `http://localhost:3000`

## Technologies Used

<hr/>

### Built Using:
#### Frontend: ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
#### Backend: ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
#### Database: ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
#### Linter: ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
#### Built Using: ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

<br/>
<hr/>

#### _**IMPORTANT NOTE**_ -

This project does not have a mongoDB connection setup. Setup the connection based on the environments below.

- local development: create a config file (make sure to name it config.env) in the config folder, which exports your db.uri connection. An example is provided, server/config/config.env This file will be ignored by git so your db credentials will be kept safe when the app is deployed.

- production: Make sure you name the environement variable "DB_URI".


- MERN Stack:
  - MongoDB: Database for storing user data and contract summaries.
  - Express.js: Backend framework for handling HTTP requests and routing.
  - React: Frontend library for building the user interface.
  - Node.js: JavaScript runtime environment for server-side code.

## Contributing

Contributions to Easy Agreement are welcome! If you have suggestions for new features or improvements, please submit a pull request. For major changes, please open an issue first to discuss the proposed changes.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

We would like to thank the developers and contributors who have made their libraries, frameworks, and resources available, enabling us to build Easy Agreement.
