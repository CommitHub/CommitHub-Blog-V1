import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faTwitter,
  faLinkedin,
  faGithub,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'
import { faLaptopCode, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './styles/awesome-button.scss'

library.add(
  fab,
  faTwitter,
  faLinkedin,
  faEnvelope,
  faGithub,
  faLaptopCode,
  faFacebook
)

class AwesomeButton extends Component {
  constructor() {
    super()
    this.state = {
      url: null,
      iconName: null,
      icon: null,
      library: [
        faTwitter,
        faLinkedin,
        faEnvelope,
        faGithub,
        faLaptopCode,
        faFacebook,
      ],
    }
  }

  componentDidMount = () => {
    this.setState({
      url: this.props.url,
      iconName: this.props.icon,
      icon: this.state.library.find(icon => {
        return icon.iconName === this.props.icon
      }),
    })
  }

  render() {
    return (
      <section className={`${this.state.iconName}-btn`}>
        <a
          className="font-awesome"
          href={this.state.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {this.state.icon ? <FontAwesomeIcon icon={this.state.icon} /> : null}
          <span className="sr-only">{this.state.iconName} external link</span>
        </a>
      </section>
    )
  }
}

export default AwesomeButton
