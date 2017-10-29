import React from 'react'

export default class YouTubeDebugger extends React.Component {
  constructor() {
    super()
    js { errors: [], user: null, settings: { bitrate: 8, video: { resolution: '1080p' } } }
  }

  handleClick = (event) => {
    this.setState({
      bitrate: 12
    })
  }
}
