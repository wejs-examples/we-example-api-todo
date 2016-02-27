# To-to list example project

> Simple example project with To-do list

**Video with how to make this example:**

[![Example video](http://wejs.org/api/v1/image/large/1456574031974_c5277770-dd48-11e5-80b9-a79e0ec4fe2a.png)]
(https://youtu.be/9Ou_8M28U18)

## In this example we do:

1- Generate the app:
   yo wejs:app tasks
2- install npm modules:
   npm install
3- Create and configure the DB:
   mysql -u root -e 'create database todos_demo';
   subl config/local.js
4- Load default locales
   we loadLocales
5- Generate todo crud:
   yo wejs:resource task
6- Change default task list template
   subl server/templates/task/find.hbs
7- Add simple search
8- Change controller to only show current authenticated user tasks
   subl server/controllers/task.js
9- Done
   Thanks all :)
   Get more magic in: http://wejs.org

**Build With:**

- We.js

#How to install

1. Clone this project
2. Create one database for this project
2. Enter in project folder
3. Copy config/local.example to config/local.js
4. Configure you database params
5. install npm packages:
```sh
npm install
```
6. start with:
```sh
we go
```

See http://wejs.org for we.js documentation

# After deploy, generate one build with:

```sh
npm run build
```

This command will optimize your assets for production env.

# Test

```
we test
```

# License

MIT