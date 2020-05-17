# spring-config-ui

I created this project to learn about VueJS. You'll find some key concepts about this frameworks and I'll to manage all of this stuff in a "real app" way :) (#NoMoreHelloWorld #AllInOneFileBashing)

- [x] Init project with Vue CLI (ESLint, VueRouter, VueX, Vuetify...)
- [x] Managing data with services and stores (mutations/action) from VueX
- [x] Routing each page
- [x] Complete Home page (presentation of the project)
- [x] Complete Metrics page (viewing progress bar for data such as CPU, MEM, DISK...)
- [x] Complete Configs page (viewing information with good UI UX, auto detects values (thresholds, size...)
- [x] Complete Settings page
- [ ] Documentation
- [ ] Dockerize the whole app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```


### Simulate back-end server

You can create a Spring Boot application (with Actuator included) or run this Docker image which is ready:

`docker run -p 8080:8080 corentinmb/spring-boot-actuator`

And access `localhost:8080/actuator`


### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
