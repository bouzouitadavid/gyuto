import React, { Component, Fragment } from 'react';
import Media from "react-media";
import ToggleBox from "../../../toggleBox/ToggleBox";

class DescriptionTest extends Component {

    render() {
        return (
            <Fragment>
                <Media query="(max-width: 700px)" render={() => (
                    <ToggleBox title={this.props.musicObject.text.title.fr} duration={""}>
                        <p className="musicText">{this.props.musicObject.text.text.fr}</p>
                        <p className="musicText">{this.props.musicObject.text.text2.fr}</p>
                        <p className="musicText">{this.props.musicObject.text.text3.fr}</p>
                        <p className="musicText">{this.props.musicObject.text.text4.fr}</p>
                        <p className="musicText">{this.props.musicObject.text.text5.fr}</p>
                    </ToggleBox>
                )} />
                <Media query="(min-width: 701px)" render={() => (
                    <Fragment>
                        <p className="musicText">{this.props.musicObject.text.text2.fr}</p>
                        <p className="musicText">{this.props.musicObject.text.text3.fr}</p>
                        <p className="musicText">{this.props.musicObject.text.text4.fr}</p>
                        <p className="musicText">{this.props.musicObject.text.text5.fr}</p>
                    </Fragment>
                )} />
            </Fragment>
        );
    }
}

export default DescriptionTest;

