import React from 'react';
import Image from './image';

export default class Pinterest extends React.Component<any,any> {

    render(){

        const { images } = this.props;

        let structuredImages = [
            [],
            [],
            [],
            [],
            [],
            []
        ] as any
        let n = 0

        for (let i = 0; i < images.length; i++){
            if (n < 6){
                structuredImages[n].push(images[i])
            } else {
                n = 0
                structuredImages[n].push(images[i])
            }
            n += 1
        }
        
        console.log(structuredImages)

        return (
            <div style={{display: 'flex', flexWrap: 'wrap', maxWidth: '100vw', fontFamily: "'Nunito', sans-serif"  }}>
                {structuredImages.map(images => 
                    <div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}} >
                        {images.map(image => <Image image={image} />)}
                    </div>)}
            </div>
        )
    }
}