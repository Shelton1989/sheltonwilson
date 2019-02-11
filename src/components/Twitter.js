import React, {Component} from 'react';

class Twitter extends Component {
    render(){
        return(
            <div>
                <a className="twitter-timeline"
                    href="https://twitter.com/sheltonwlsn">
                    Tweets by @sheltonwlsn
                </a>
                <script async src="//platform.twitter.com/widgets.js\" charset="utf-8\"></script>
            </div>
        )
    }
}

export default Twitter;