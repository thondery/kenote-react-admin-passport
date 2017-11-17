import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'antd'
import QueueAnim from 'rc-queue-anim'
import '../styles/screen.scss'

export default class Screen extends PureComponent {
  
  static propTypes = {
    children: PropTypes.any,
    logoSource: PropTypes.any,
    titleName: PropTypes.string,
    description: PropTypes.string,
    copyright: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
  }
  
  static defaultProps = {
    children: null,
    logoSource: require('../assets/images/NGCCBOENpgTXpBWUIPnI.svg'),
    titleName: 'Kenote Admin',
    description: '基于 React 和 Ant Design 设计与开发的管理平台.',
    copyright: (
      <span>
        2017 <b>Kenote</b> 实验室出品
      </span>
    )
  }

  render () {
    const { children, logoSource, titleName, description, copyright } = this.props
    return (
      <QueueAnim component="div" delay={300} type={['top', 'bottom']} className="passport_screen_container">
        <div className="container_top" key="a">
          <div className="container_top_header">
            <img className="container_top_header_logo" src={logoSource} />
            <span className="container_top_header_title">{titleName}</span>
          </div>
          <p className="container_top_desc">{description}</p>
        </div>
        <div className="container_main" key="b">
          {children}
        </div>
        <div className="globalFooter container_footer" key="c">
          <QueueAnim component="div" delay={300} type={['bottom', 'top']}>
            <div className="copyright" key="a">
              Copyright <Icon type="copyright" /> {copyright}
            </div>
          </QueueAnim>
        </div>
      </QueueAnim>
    )
  }
}