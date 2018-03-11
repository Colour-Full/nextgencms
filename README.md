# CMS Build Entirely On top of JavaScript Technologies Node.js / Express / MongoDB / React / Redux

An example project for a content management system build on top of popular JS technologies. It's using KeystoneJs as CMS admin panel, Mongo as a database, React on the front end and Redux Flux implementation to manage state. The project use Webpack as a build tool and materializecss for styling

In this example the CMS can hold some dummy user information and some movie or game character bio and picture.

*Important Note*: This is just an example and it's not meant to be used in production.

### Prerequisites

You will need Node.js and MongoDB installed the project is set to run from `mongodb://localhost/nextgencms` by default. You can change that by editing main.js

### Installing

Clone or download the GitHub repository. Navigate to the folder and 

```
npm install
```

Once all node modules are installed 

```
npm start
``` 

The project should be running on http://localhost:3000

You can access the admin panel at http://localhost:3000/keystone/ (email: admin@keystonejs.com / password: admin)

## Running the tests

TODO at the moment there are no test. I am planning to add JEST and Google puppeteer as test frameworks


## Deployment

This is not a production ready build and you should not deployed it in live services 

## Built With

* [Node.js](https://nodejs.org/en/)
* [MongoDB](https://www.mongodb.com/)
* [KeystoneJS](http://keystonejs.com/)
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Materialize](http://materializecss.com/)

## Authors

* **Velizar Mihaylov** - [Colour-Full](http://colour-full.co.uk)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
