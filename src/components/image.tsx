import React from 'react';

export default class Image extends React.Component<any,any> {
    constructor(props:any){
        super(props);
        this.state = {

        }
    }

    render(){

        const { image } = this.props;

        return (
            <div style={{ width: '240px', margin: '20px' }}>
                <img src={image.src} style={{ borderRadius: '22px', width: '100%'   }}/>
                <p style={{ fontWeight: 'bold', textAlign: 'left' }}>{image.title}</p>
            </div>
        )
    }
}