# project-manage-back

This is the BackEnd of a porject that consist of a research project management.

### Content

This project has 4 principal folders:

db -> has the connection to the database, which is a mongoDB, through moongose.
utils -> has token generator and validator
models -> contains folders for mongoose schemas of User, Project and Inscriptions, also, each folder has its own resolvers and types, needed for GraphQL.
graphql -> here are imported all resolvers and types of models, also there is a folder with the resolvers and types of the token authentication and password encryption.
 
### To start
```
git clone 
yarn install
yarn start
```
