import React from 'react';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            theText: "Bu uygulama ile okuma hızınız inanılmaz bir şekilde artacak. İlk başlarda çok hızlı olduğunu" +
            " düşüneceksiniz fakar ilerleyen zamanlarda bu durumun ne kadar zevkli olduğunu anlayacak ve okuma" +
            " hızınızı inanılmaz bir şekilde geliştireceksiniz. her bölümün sonunda okuma hızınızı bir tık" +
            " artıracaksınız",
            word: '',
            readingSpeed: 250,
            timer: null,
            btnStatus: false
        }
    }

    decreaseSpeed() {
        this.stopTimer();
        var currentSpeed = this.state.readingSpeed;
        this.setState({readingSpeed: currentSpeed - 50});
    }

    increaseSpeed() {
        this.stopTimer();
        var currentSpeed = this.state.readingSpeed;
        this.setState({readingSpeed: currentSpeed + 50});
    }

    componentDidMount() {
        //this.getExample();
    }

    changeText() {
        var text = this.refs.theText.value;
        this.setState({theText: text});
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-8 reading-area">
                    <div className="control-area input-group">
                        <input type="text"
                               className="form-control text-speed"
                               value={this.state.readingSpeed}
                               readOnly={true}/>

                        <input type="button" value="-" className="btn btn-default"
                               onClick={this.decreaseSpeed.bind(this)}/>

                        <input type="button" value="+" className="btn btn-default"
                               onClick={this.increaseSpeed.bind(this)}/>
                        <br/>
                        <input type="button" value="Start"
                               disabled={this.state.btnStatus}
                               className="btn btn-default"
                               onClick={this.getExample.bind(this)}/>

                        <input type="button" value="Stop" className="btn btn-default"
                               onClick={this.stopTimer.bind(this)}/>
                    </div>
                    <br/>
                    <div className="reading-text">
                        <span>{this.state.word}</span>
                    </div>
                    <br/>
                    <textarea cols="30" rows="10"
                              className="form-control"
                              value={this.state.theText}
                              ref="theText"
                              onChange={this.changeText.bind(this)}
                    />

                </div>
            </div>
        )
    }

    getExample() {
        var text = this.state.theText;

        var readingSpeed = this.state.readingSpeed;
        var interval = 1000 / (readingSpeed / 60);
        console.log(interval);
        var index = 0;

        var self = this;

        this.state.timer = setInterval(function () {
            self.changeWord(text.split(" ")[index]);

            console.log(text.split(" ")[index]);

            index++;

            if (index + 1 > text.split(" ").length) {
                clearTimeout(self.state.timer);
            }

        }, interval);

        this.setState({btnStatus: true});
    }

    stopTimer() {
        clearTimeout(this.state.timer);
        this.setState({btnStatus: false});
    }

    changeWord(text) {
        this.setState({word: this.makecolorful(text)});
    }

    makecolorful(text) {
        return text;

        var textLenght = Math.floor(text.length / 2);
        //console.log(textLenght);
        var newText = "";

        for (i = 0; i < text.length; i++) {
            if (i == textLenght) {
                newText += [<span className='red-letter'>  text[i] </span>];
            } else {
                newText += text[i];
            }
        }

        return newText;
    }
}