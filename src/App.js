import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import VideoPlayer from './Player';

class App extends Component {

  componentDidMount(){

    window.kWidget.embed({
       'targetId': 'kaltura_player',
       'wid': '_423851',
       'uiconf_id' : '11598752',
       'entry_id' : '1_znvt6hgh',
       'flashvars':{ // flashvars allows you to set runtime uiVar configuration overrides.
            'autoPlay': false
       },
       'params':{ // params allows you to set flash embed params such as wmode, allowFullScreen etc
            'wmode': 'transparent'
       },
       readyCallback: function( playerId ){
            console.log( 'Player:' + playerId + ' is ready ');
       }
     });

  }


  render() {

    const videoJsOptions = {
      autoplay: true,
      controls: true,
      sources: [{
        src: '//vjs.zencdn.net/v/oceans.mp4',
        type: 'video/mp4'
      }]
    }

    return (
      <Container>

          <Row>

            <Col>VideoJS
            <VideoPlayer { ...videoJsOptions } />
            </Col>

            <Col>Kaltura
              <div id="kaltura_player" style={{'width' : '500px', 'height': '500px'}}></div>
            </Col>

          </Row>

      </Container>
    );
  }
}

export default App;
