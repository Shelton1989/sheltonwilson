import React, {Component} from 'react';

class Card extends Component {
    render(props){
        return(
            <div className="col m3">
                <div class="card">
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" alt="" src={this.props.image}/>
                    </div>
                    <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">{this.props.title}<i class="material-icons right">more_vert</i></span>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">{this.props.title}<i class="material-icons right">close</i></span>
                        <p>{this.props.content}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;