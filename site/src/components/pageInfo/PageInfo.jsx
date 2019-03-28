import React, { Component, Fragment } from "react";
import { graphql, StaticQuery } from 'gatsby'

const ReactDOM = require('react-dom')
const ReactMarkdown = require('react-markdown')


class PageInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: 0 };
    this.handleClick = this.handleClick.bind(this);
    console.log(this.state.id)
  }

  handleClick(e) {
    this.setState({ id: e.target.id })
  }

  //Permet de rechercher tout les titres dans la bases de données
  createTitle = (data) => {
    //créer un variable qui va contenir les différents titres
    let titles = []
    for (let i = 0; i < (Object.keys(data.allStrapiArticles.edges).length /*Permet d'obtenir le nombre d'objet/d'article */); i++) {
      //ajoute tout les titres des articles dans le tableau h2
      titles.push(<a className={this.state.id == i ? "bold" :  ""} onClick={this.handleClick} id={i /*L'id permettra de récupérer le bon contenu */}>{data.allStrapiArticles.edges[i].node.title}</a>)
    }
    console.log(titles)
    console.log(titles[0].props.children)
    return titles
  }

  //Créer le contenu
  createContent = (data) => {
    //créer un variable qui va contenir les différents titres
    return data.allStrapiArticles.edges[this.state.id].node.content
  }


  render() {
    const markdown = this.createContent(this.props.content);
    return (
        <Fragment>
          <div className="infoParentDiv">
            <div className="titles">
              {this.createTitle(this.props.datas)}
            </div>
            <div className="content">
            <ReactMarkdown
              source={markdown}
              escapeHtml={false}
            />
            </div>
          </div>
      </Fragment>
    )
  }
}
//query
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
      <PageInfo datas={data} content={data} />
    )}
  />
)