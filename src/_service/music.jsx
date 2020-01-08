import React from 'react'

class LoveMusic extends React.Component {
constructor(props){
  super(props)
  this.state = {
    preview: '',
    getResponse: false
  }
  this.getLove()
}
  render(){
    return(
      <div>
      {this.state.getResponse?<audio controls>
		      <source src={this.state.preview} type="audio/mpeg" >
		      </source>
       </audio>:'' }
       </div>
    )
  }

  getLove(){
    const API_KEY= '874891431676cc5021a97a02cba2357c'
    const USER = localStorage.getItem('user')
    const URL = "http://ws.audioscrobbler.com/2.0/?method=user.getlovedtracks&user="+USER+"&api_key="+API_KEY
    if (USER!=='')
    fetch(URL).then(
      response => {
        response.text().then(text=>{
          let data = parseXml(text)
          if (data.lfm.lovedtracks!==''){
            let loveName=''
            let loveArtist=''
            if(data.lfm.lovedtracks.track[0]!==undefined){
           loveName = data.lfm.lovedtracks.track[0].name
           loveArtist = data.lfm.lovedtracks.track[0].artist.name } else {
          loveName = data.lfm.lovedtracks.track.name
           loveArtist = data.lfm.lovedtracks.track.artist.name
          }
          const URL = 'https://api.deezer.com/search?q='+loveName+"_"+loveArtist
          fetch(URL).then(
            response => {
              response.text().then(text=>{
              const data = text && JSON.parse(text)
              console.log(data.data[0].preview)
              this.setState({preview:data.data[0].preview})
              this.setState({getResponse:true})
              })
            })
          }
        })
      })
  }

}

function parseXml(xmlData){
var parser = require('fast-xml-parser');
var he = require('he');

var options = {
    attributeNamePrefix : "@_",
    attrNodeName: "attr", //default is 'false'
    textNodeName : "#text",
    ignoreAttributes : true,
    ignoreNameSpace : false,
    allowBooleanAttributes : false,
    parseNodeValue : true,
    parseAttributeValue : false,
    trimValues: true,
    cdataTagName: "__cdata", //default is 'false'
    cdataPositionChar: "\\c",
    localeRange: "", //To support non english character in tag/attribute values.
    parseTrueNumberOnly: false,
    arrayMode: false, //"strict"
    attrValueProcessor: (val, attrName) => he.decode(val, {isAttributeValue: true}),//default is a=>a
    tagValueProcessor : (val, tagName) => he.decode(val), //default is a=>a
    stopNodes: ["parse-me-as-string"]
};

if( parser.validate(xmlData) === true) { //optional (it'll return an object in case it's not valid)
   return parser.parse(xmlData,options);
}
}

export default LoveMusic