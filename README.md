# DevStacks-Backend

CURRENT NOTE: until now, we can receive through apollo users register.

we got 3 main folders:
1. db : conects to mongo database usign moongose
2. grapql : we store types and controllers that graphQL need to work.
3. models : each collection has its own folder (ie. Users, projects, etc), in turn each folder has its controlers and types (these are then impoorted in graphql carpet). controlers has the actions (ie. createUser) and types has what th action act on.
