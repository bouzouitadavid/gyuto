# Gyuto

### Instal Guide
### Yarn
If you don't have yarn, install it with 
```
npm i yarn -g
```
### Strapi
Install strapi in global  
[Doc's](https://strapi.io/documentation/3.x.x/getting-started/installation.html#requirements)
```
npm i strapi@alpha -g
```
#### Strapi (CMS)
```
git clone https://github.com/bouzouitadavid/gyuto
cd gyuto
yarn install
strapi start
```
After cloning go to config/environments/development/database.json  
Change the line 8 "uri": "<INSERT_MY_DATABASE_URI>" (Ryver !)

##### Strapi
Got to localhost:1337/admin
User and Pass look Ryver!

Add Layout Page -> Save!
Add Privilege to Public!

#### Gatsby (Frameworks)
```
cd site

yarn install 
yarn add gatsby
yarn gatsby develop
```
Go Develop !

#### Old
- https://github.com/pedroseromenho/gyuto
#### Ressources
- https://blog.strapi.io/building-a-static-website-using-gatsby-and-strapi/
- https://www.gatsbyjs.org/
- https://strapi.io/documentation/3.x.x/getting-started/installation.html
