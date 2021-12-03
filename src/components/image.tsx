import React from 'react';
import '../style/image.css';

export default class Image extends React.Component<any,any> {
    constructor(props:any){
        super(props);
        this.state = {
            showLinks: false
        }
        this.showInfo = this.showInfo.bind(this)
    }

    showInfo(){
        this.setState({ showLinks: true })
    }

    hideInfo(){
        this.setState({ showLinks: false })
    }

    render(){

        const { image } = this.props;
        const { showLinks } = this.state;

        return (
            <div className="image-container" style={{ width: '240px', margin: '20px', fontFamily: "'Nunito', sans-serif" }}>
                <div style={{ position: 'relative'}}>
                    <img 
                        onMouseOver={() => this.showInfo()} 
                        onMouseLeave={() => this.hideInfo()}
                        className="each-image" 
                        src={image.src} 
                        alt={image.title} 
                        style={{ borderRadius: '24px', width: '100%'   }}/>
                    {showLinks
                    ? <div style={{ padding: '30px 20px', position: 'absolute', left: 0, bottom: 0, width: '100%', borderRadius: '0 0 24px 24px' }}>
                        <div style={{ borderRadius: '26px', padding: '6px 10px', backgroundColor: '#F7F7F7', width: '100px', opacity: '0.9'}}>Link</div>
                      </div>
                    : null}
                </div>
                <p style={{ fontWeight: 'bold', textAlign: 'left' }}>{image.title}</p>
            </div>
        )
    }
}