import React from 'react'
import ReactGallery from 'reactive-blueimp-gallery';

export default class Gallery extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            sources: [{
                source: './content/images/gallery/park1.jpeg',
              }, {
                source: './content/images/gallery/park2.jpeg',
              }, {
                source: './content/images/gallery/park3.jpeg',
              }, {
                source: './content/images/gallery/sea1.jpeg',
              }, {
                source: './content/images/gallery/sea2.jpeg',
              }, {
                source: './content/images/gallery/yoga1.jpeg',
              }, {
                source: './content/images/gallery/yoga2.jpeg',
              }, {
                source: './content/images/gallery/yoga3.jpeg',
              }, {
                source: './content/images/gallery/yoga4.jpeg',
              }, {
                source: './content/images/gallery/yoga5.jpeg',
              }, {
                source: './content/images/gallery/yoga6.jpeg',
              }, {
                source: './content/images/gallery/yoga7.jpeg',
              }]
        }
    }

	render() {
		return (
            <div class="row">
                <div class="col-xs-12">
                    <ReactGallery>
                        { this.state.sources.map(item => <ReactGallery.Slide { ...item } key={ item.source } />) }
                    </ReactGallery>
                </div>
            </div>
		)
	}
};