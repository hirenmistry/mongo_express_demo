# mongo_express_demo
This application is an example of how we can manage Express as route and controller , PugJS as view and Mongoose as database handling lib.

## Follwing steps I have done already for it:

- Called express generator to create folder and install required libs to that we need.

```
   > express --view=pug mongo_express_demo

   > npm install nodemon mongoose express-validator dotenv async --save
```

- Created data populator file *"populatedb.js"*.

## What you need to do to start this application:

- Need to install node modules

```
    > npm install
```

- Execute the populatedb.js file

```
    > node populatedb
```

- Now start the application with nodemon

```
    > npm run devstart
```
