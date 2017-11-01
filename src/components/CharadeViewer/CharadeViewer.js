import React, { Component } from 'react';
import styles from './CharadeViewer.css';

class CharadeViewer extends Component {

    render() {
        return (
            <div className="charadeWrapper animated jackInTheBox">
                {this.props.charadewords && 
                    <span className="charadeWords">{this.props.charadewords}</span>
                }
            </div>
        );
    }
}

export default CharadeViewer;
