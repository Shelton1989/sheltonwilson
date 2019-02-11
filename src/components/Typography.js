import React, {Component} from 'react';

class Typography extends Component {
    render(props) {
        return(
            <div>
                {this.props.heading?<div><h1>{this.props.heading}</h1></div>:<p></p>}
                {this.props.heading2?<div><h2>{this.props.heading2}</h2></div>:<p></p>}
                {this.props.heading3?<div><h2>{this.props.heading3}</h2></div>:<p></p>}
                {this.props.heading4?<div><h2>{this.props.heading4}</h2></div>:<p></p>}
                {this.props.heading5?<div><h2>{this.props.heading5}</h2></div>:<p></p>}
                {this.props.paragraph?<div><p>{this.props.paragraph}</p></div>:<p></p>}
                {this.props.paragraph2?<div><p>{this.props.paragraph2}</p></div>:<p></p>}
                {this.props.paragraph3?<div><p>{this.props.paragraph3}</p></div>:<p></p>}
                {this.props.paragraph4?<div><p>{this.props.paragraph4}</p></div>:<p></p>}
                {this.props.paragraph5?<div><p>{this.props.paragraph5}</p></div>:<p></p>}  
            </div>
        )
    }
}

export default Typography;