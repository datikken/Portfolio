import Instafeed from 'react-instafeed';
import React, { Component } from 'react'

export default class Insta extends Component {
  render() {
 const instafeedTarget = 'instafeed';
    return (
                <div className="insta" id={instafeedTarget}>   
                <Instafeed
                        limit='7'
                        ref='instafeed'
                        resolution='thumbnail'
                        sortBy='most-liked'
                        target={instafeedTarget}
                        template='<a target="_blank" href="{{link}}"><img src="{{image}}" /></a>'
                        userId='4920998201'
                        clientId='e858900a6d574af3a35b4e7952ccb5b9'
                        accessToken='4920998201.1677ed0.0cf46a4aa67d49d094e1e36f886de24b'
                    />
                </div>
     )
  }
}



  