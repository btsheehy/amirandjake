import React, { Component } from 'react'

export default class VideoEndFrameSelector extends Component {
    constructor(props) {
        super(props)
        this.state = {
            videoDuration: 0,
            videoElement: false,
            randomIdVideo:
                '_' +
                Math.random()
                    .toString()
                    .replace(/\./g, ''),
            randomIdSlider:
                '_' +
                Math.random()
                    .toString()
                    .replace(/\./g, '')
        }
        this.formatTime = this.formatDuration.bind(this)
    }

    componentDidMount() {
        let getVideoElement = () => {
            setTimeout(() => {
                let el = document.getElementById(this.state.randomIdVideo)
                if (el) {
                    this.setState({ videoElement: el })
                } else getVideoElement()
            }, 100)
        }
        getVideoElement()
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.videoElement)
            this.state.videoElement.currentTime = (nextProps.startTime + nextProps.duration) / 100
    }

    formatDuration(d){
        d = Number(d)
        return (d / 100).toFixed(2) + ' seconds'
    }

    render(){
        let { props, state } = this
        let {duration} = props
        return (
            <div>
                <video id={state.randomIdVideo} src={this.props.videoSource} />
                <label htmlFor={state.randomIdSlider}>
                    {props.sliderLabel}
                </label>
                {typeof duration === 'number' ? (
                    <input
                        id={state.randomIdSlider}
                        type="range"
                        min="0"
                        max="1000"
                        onChange={props.onSliderUpdate}
                        value={props.duration.toString()}
                        style={{ width: '100%' }}
                    />
                ) : (
                        ''
                    )}

                <p>{this.formatDuration(props.duration)}</p>
            </div>
        )
    }
}

// props:
// videoSource: string
// sliderLabel: string
// length: number
// onSliderUpdate: function
// startTime: number
