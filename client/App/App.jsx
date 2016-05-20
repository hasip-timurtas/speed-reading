import React from 'react';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            theText: ''
        }
    }

    componentDidMount() {
        this.getExample();
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-8">
                    <div className="reading-area">
                        {this.state.theText}
                    </div>
                </div>
            </div>
        )
    }

    getExample() {
        var text = "Bu uygulama ile okuma hızınız inanılmaz bir şekilde artacak. İlk başlarda çok hızlı olduğunu" +
            " düşüneceksiniz fakar ilerleyen zamanlarda bu durumun ne kadar zevkli olduğunu anlayacak ve okuma" +
            " hızınızı inanılmaz bir şekilde geliştireceksiniz. her bölümün sonunda okuma hızınızı bir tık" +
            " artıracaksınız";

        var interval = 250;
        var index = 0;

        var self = this;

        var timer = setInterval(function () {
            self.changeText(text.split(" ")[index]);
            index++;
        }, interval);

        if(index > text.split(" ").length)
        {
            clearTimeout(timer);
        }
    }

    changeText(text){
        this.setState({theText: text});
    }
}