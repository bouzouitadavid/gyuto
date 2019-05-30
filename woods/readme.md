

## Team Gyuto - *30 mai 2019*

### Point important à prendre en compte  

- **Mongodb** est une base de donnée au format json, dans le notre cas on utilise mongodb Atlas qui est l'un de leurs service cloud.
- **Strapi** est un cms headless qui permet de se connecter à une base de donnée (dans notre cas mongodb) et bien d'autres choses.
- **Gatsby** est un framework React qui intègre des technologies tels que graphQl ce qui nous facilite la récupération de donnée de strapi. Gatsby dans notre cas se connecte sur l'adresse de strapi pour récupérer les données. 

### Mongodb 

Pour bien comprendre ici nous avons fait le choix d'utilisé Mongodb Cloud par facilité car le travail est synchroniser. Mais vous pouvez aussi simplement installer un mongodb en local et la ce sera sans limite et totalement gratuit.
Il faut vérifier les limites d'utilisation de Mongodb Cloud Gratuit de souvenir la limite est quelque chose comme 100 utilisateur simultané. Ce qui d'après moi est large pour un début de site. 
[Pour plus d'info sur le Cloud Atlas](https://www.mongodb.com/cloud/atlas)

#### Outils 
- Schéma de fonctionnement du site [Schéma du 30 mai 2019](schema-site-30-mai-2019.png)
- Cloud mongodb [Gyuto](https://cloud.mongodb.com/v2/5c86200da6f2396cd47fa9b4#clusters)

### Installation du projet 

#### Strapi

```
git clone VOTRE_PROJECT
cd VOTRE_PROJECT
git checkout LA_BRANCHE_APPROPRIER
npm install OU yarn install
strapi start OU npm start //selon la config dans le package.json
```

Maintenent Strapi tourne sur l'adresse local http://localhost:1337/admin

#### Gatsby 

Si vous êtes toujours dans la fenetre de strapi, ouvrer un nouvel onglet dans votre terminal.

```
cd site
npm install OU yarn install
gatsby develop OU npm start //selon la config dans le package.json
```

Ici vous aller avoir deux adresse local une pour votre site, et l'autre avec graphql à la fin vous permet de faire des test de request vous verrez directement les données récupérer dans le cadre de droite.

#### Cheat Sheet

[Gatsby Cheat Sheet](https://www.gatsbyjs.org/docs/cheat-sheet/)
Sinon les plus important pour démarer

```
gatsby develop //lance le server de developpement
gatsby build //crée un build de votre application
gatsby clean //supprime le cache et dossier public
```

### Choses à faire 

 - [ ] Je vous conseil vraiment de faire ce Tuto ou équivalent. Pour mieux comprendre comment faire les requete graphQl et afficher des données depuis Strapi vers Gatsby [Tuto Strapi - Gatsby](https://blog.strapi.io/building-a-static-website-using-gatsby-and-strapi/)
 - [ ] Scss voir dans la docs de Gatsby comment et ou mettre les feuilles de style. [Strapi - Introduction to Styling in Gatsby](https://www.gatsbyjs.org/tutorial/part-two/)
 - [ ] Markdown ajouter le module react-markdown et l'utiliser dans vos page pour transformer vos donner .md en html [react-markdown](https://github.com/rexxars/react-markdown).
 - [ ] Strapi ajouter au .gitignore le fichier qui est dans ⁨gyuto⁩/⁨config⁩/⁨environments⁩/⁨development⁩/database.json (c'est le fichier ou on config la connection à la bdd) mais il ne dois normalement être visible sur le repo git.
  

### Outils

- La pageInfo.js avec la requête graphQL et le react-markdown fonctionnelle, qu'il suffit de copier coller dans votre componenent pageInfo [page info git](https://github.com/bouzouitadavid/gyuto/blob/hadrien/site/src/components/pageInfo/PageInfo.jsx) Ne pas oublier d'avoir installer le module React-Markdown.

### FAQ

- Problème de connection à la base de donnée lors du lancement de Strapi `Make sure your MongoDB database is running...` , peut être du au fait de ne pas avoir son IP dans la white list de mongodb.
- Problème de connection du type allStrapiArticles... peut venir du fait que vos données dans Strapi ne soit pas visible en visiteur, pour corriger il suffit d'aller dans votre [Strapi Permissions](strapi-permissions.png).
- Rien ne fonctionne quand je change de la css/scss, essayer `gatsby clean` 

