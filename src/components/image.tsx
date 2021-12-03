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
            <div style={{ width: '240px', margin: '20px', fontFamily: "'Nunito', sans-serif" }}>
                <img src={image.src} alt={image.title} style={{ borderRadius: '24px', width: '100%'   }}/>
                <p style={{ fontWeight: 'bold', textAlign: 'left' }}>{image.title}</p>
            </div>
        )
    }
}