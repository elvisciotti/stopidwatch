import React from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';


export default class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.timerHandler = null;
        this.state = {
            counterSeconds: 0,
        }
        this._startTimer();
    }

    componentDidMount() {
        // this._startTimer();
    }

    currentTimestampSeconds() {
        return Math.floor(Date.now() / 1000);
    }

    _startTimer = function () {
        this.timerStartedAt = this.currentTimestampSeconds();

        clearTimeout(this.timerHandler);
        this.state.counterSeconds = 0;
        this.timerHandler = setInterval(() => {
            this.setState({
                counterSeconds: this.currentTimestampSeconds() - this.timerStartedAt,
            });
        }, 1000)
    }

    componentWillUnmount() {
        this.timerHandler = null;
    }

    secondsToMs = function (totalSeconds) {
        var minutes = Math.floor(totalSeconds / 60);
        var seconds = totalSeconds - minutes * 60;
        return minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);
    }

    render() {
        return (
            <TouchableWithoutFeedback
                onPress={() => this._startTimer()}>

                <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                    <Text style={{fontSize: 30, color: "#FF0000"}}>Stoppidwatch</Text>
                    <Text style={{fontSize: 120, color: "#FFF"}}>{this.secondsToMs(this.state.counterSeconds)}</Text>
                    <Text style={{fontSize: 30, color: "#FF0000"}}>{this.state.timerStartedAt}</Text>

                    <Text style={{fontSize: 15, color: "#FFF"}}>Touch anywere to reset</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}