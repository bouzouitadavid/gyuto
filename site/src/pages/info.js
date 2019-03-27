import React, { Component, Fragment } from "react";

// import { Helmet } from "react-helmet";
/*
import { Row, Col } from "react-flexbox-grid";
import InfoIndex from "./assets/infoIndex/InfoIndex";
import InfoText from "./assets/infoText/InfoText";
import { info } from "../data";
import ToggleBox from "../toggleBox/ToggleBox";
import ToggleBoxChild from "../toggleBox/ToggleBoxChild";
import Media from "react-media";
*/

import { graphql, StaticQuery } from 'gatsby'

class PageInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: 0 };
    this.handleClick = this.handleClick.bind(this);
    console.log(this.state.id)



  }
  handleClick(e) {
    this.setState({id: e.target.id})
    console.log(this)
  }

  //Permet de rechercher tout les titres dans la bases de données
  createTitle = (data) => {
    //créer un variable qui va contenir les différents titres
    let titles = []
    for (let i = 0; i < (Object.keys(data.allStrapiArticles.edges).length /*Permet d'obtenir le nombre d'objet/d'article */); i++) {
      //ajoute tout les titres des articles dans le tableau h2
      titles.push(<h2 onClick={this.handleClick} id={i /*L'id permettra de récupérer le bon contenu */}>{data.allStrapiArticles.edges[i].node.title}</h2>)
    }
    return titles
  }

  //Créer le contenu
  createContent = (data) => {
    //créer un variable qui va contenir les différents titres
    let content = []
    content.push(<div> {data.allStrapiArticles.edges[this.state.id].node.content} </div>)
    return content
  }

  render() {
    return (
      <div>
        <div>
          {this.createTitle(this.props.datas)}
        </div>
        {this.createContent(this.props.content)}
      </div>
    )
  }
}

//query
export default () => (
  <StaticQuery
    query={graphql`
    query IndexQueryyc {
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
      <PageInfo datas={data} content={data} />
    )}
  />
)
