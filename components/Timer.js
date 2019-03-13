import React from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';


currentTimestampSeconds = function() {
    return Math.floor(Date.now() / 1000);
}

export default class Timer extends React.Component {

    timerHandler = null;

    constructor(props) {
        super(props);
        this.timerHandler = null;
        this.state = {
            counterSeconds: 0,
        }
        this._startTimer();
    }

    _startTimer = function () {
        //stop previous setTimeout
        clearTimeout(this.timerHandler);

        // reset counters and relaunch setInterval with state update
        this.timerStartedAt = currentTimestampSeconds();
        this.state.counterSeconds = 0;
        this.timerHandler = setInterval(() => {
            this.setState({
                counterSeconds: currentTimestampSeconds() - this.timerStartedAt,
            });
        }, 1000)
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
                    <Text style={{fontSize: 30, color: "#FF0000"}}>Stopwatch</Text>
                    <Text style={{fontSize: 120, color: "#FFF"}}>{this.secondsToMs(this.state.counterSeconds)}</Text>
                    <Text style={{fontSize: 30, color: "#FF0000"}}>{this.state.timerStartedAt}</Text>

                    <Text style={{fontSize: 15, color: "#FFF"}}>Touch anywere to reset</Text>
                    <Text style={{fontSize: 10, color: "#FFF"}}>by SES</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }

    componentWillUnmount() {
        clearTimeout(this.timerHandler);
        this.timerHandler = null;
    }
}