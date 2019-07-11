import React, { Component, Fragment } from "react";
import { graphql, StaticQuery } from 'gatsby'
import { Row, Col } from "react-flexbox-grid";
import InfoIndex from "./assets/infoIndex/InfoIndex";
import InfoText from "./assets/infoText/InfoText";
import { info } from "../data";
import ToggleBox from "../toggleBox/ToggleBox";
import ToggleBoxChild from "../toggleBox/ToggleBoxChild";
import Media from "react-media";


import { withNamespaces } from 'react-i18next';


const ReactDOM = require('react-dom')
const ReactMarkdown = require('react-markdown')



class PageInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: 0 };
    this.handleClick = this.handleClick.bind(this);
    console.log(this.state.id)
  }

  makeActive = id => {
    this.setState({
    id
    });
    };
    
    // componentDidMount() {
    // document.title = this.props.t('nav.info');
    // }

  handleClick(e) {
    this.setState({ id: e.target.id })
  }

  //Permet de rechercher tout les titres dans la bases de données 
  //data contient tout ce qui est récupérer par la query (voir la partie query)
  createTitle = (data) => {
    //créer un tableau qui va contenir les différents titres
    let titles = []
    for (let i = 0; i < (Object.keys(data.allStrapiArticles.edges).length /*Permet d'obtenir le nombre d'objet/d'article */); i++) {
      //ajoute tout les titres des articles dans le tableau
      titles.push(<h2><a className={this.state.id == i ? "indexTitle active" :  "indexTitle"} onClick={this.handleClick} id={i /*L'id permettra de récupérer le bon contenu */}>{data.allStrapiArticles.edges[i].node.title}</a></h2>)
    }
    return titles
  }

  //Créer le contenu
  createContent = (data) => {

    //grâce au state.id, il récupère l'information correspondante au titre sur lequel on clique. 
    //retourne le contenu
    // return data.allStrapiArticles.edges[this.state.id].node.content
  }


  render() {
    //contient le contenu de l'article qui est sous forme de markdown
    const markdown = this.createContent(this.props.content);
    return (
      <Fragment>
          <Media
            query="(max-width: 700px)"
            render={() =>
              info.map(inf => {
  
                  return (
  
                  <div key={inf.id} className="InfoMobileCtr">
  
                  <ToggleBox title={inf.index_title + " " + inf.title.fr}>

                  <Row className="infoContainer">
                  {inf.paragraphes.map(para => {

                    return (
                
                      <Col
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        className="infoCol"
                        key={para.id}
                      >
                      <p>{para.text.fr}</p>
                      {para.galery &&
                      para.galery.length > 0 &&
                      para.galery.map(gal => {

                        return (
                        
                          <img
                            key={gal.image.id}
                            src={gal.image.url}
                            alt={gal.image.title.fr}
                          />
                        );
                      }
                      )}
                    </Col>
                );
            })}
</Row>
{inf.sub_category &&
inf.sub_category.length > 0 &&
inf.sub_category.map(sub => {
return (
<Fragment key={sub.id}>
<ToggleBoxChild title={sub.index_title + " " + sub.title.fr}>
<Row className="infoContainer">
{sub.paragraphes.map(
para => {
return (
<Col
xs={12}
sm={12}
md={12}
lg={12}
className="infoCol"
key={para.id}
>
<p>
{para.text.fr}
</p>
{para.galery &&
para.galery.length > 0 &&
para.galery.map(
gal => {
return (
<img
key={gal.image.id}
src={gal.image.url}
alt={gal.image.title.fr}
/>
);
}
)}
</Col>
);
}
)}


</Row>
{sub.sub_category &&
sub.sub_category.length > 0 &&
sub.sub_category.map(
subsub => {
return (
<ToggleBoxChild
key={subsub.id}
title={subsub.index_title + " " + subsub.title.fr}
/>
);
}
)}
</ToggleBoxChild>
</Fragment>
);
})}
</ToggleBox>
</div>
);
})
}
/>
<Media
query="(min-width: 701px)"
render={() => (
<Fragment>
<Row className="pageInfo">
<InfoIndex
info={infos}
active={this.makeActive}
id={this.state}
/>

<InfoText info={info} id={this.state} />
</Row>
</Fragment>
)}
/>

      
          {/* <div className="infoParentDiv row">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 infoIndex">
              <div className="titles">
                {this.createTitle(this.props.datas) }ce props envoie les données dans la méthode createTitle qui comme son nom l'indique crée les titres
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
              <div className="infoContainer row">
                <div className="content">
                <ReactMarkdown
                  //transforme en markdown
                  source={markdown}
                  escapeHtml={false}
                />
                </div>
              </div>
            </div>
          </div> */}
      </Fragment>
    )
  }
}
///////////////////////
//Query 
//Permet de récupérer les infos de la base de données
//allStrapiArticles ---> permet de séléctionner le contenu des articles 
// l'id, le title et le content des articles sont récupérés
// toute les infos sont stocké dans data 
export default () => (
  <StaticQuery
    query={graphql`
    query IndexQuerzrgyyc {
      allStrapiArticles {
        edges {
          node {
            id
            title
            content
            
          }
        }
      }
    }
  `}
    render={(data) => (
      //Permet d'injecter en props les informations de la base données dans le compenent PageInfo
      <PageInfo datas={data} content={data} />
    )}
  />
)
