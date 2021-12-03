import React from 'react';
import Image from './image';

export default class Pinterest extends React.Component<any,any> {
    constructor(props: any){
        super(props);
        this.state = {
            images: [
                {
                    id: 1,
                    src: "https://i.pinimg.com/474x/16/fb/76/16fb76cca872b7b8a372ee86762c2b0b.jpg",
                    title: "しっとり キャロットケーキ"
                },
                {
                    id: 2,
                    src: "https://i.pinimg.com/474x/43/1a/e2/431ae27ed2d528668656b9f9066930f6.jpg",
                    title: "Dakota Johnson Is As Obsessed With These Skater Shoes"
                },
                {
                    id: 3,
                    src: "https://i.pinimg.com/474x/d9/32/f4/d932f4f6518486c26b9a655c6a01fdb7.jpg",
                    title: "Kinder Cookies"
                },
                {
                    id: 4,
                    src: "https://i.pinimg.com/474x/09/b0/49/09b049511a4a062eff23816b12933fda.jpg",
                    title: "Super Soft Condensed Milk Pai Bao"
                },
                {
                    id: 5,
                    src: "https://i.pinimg.com/474x/62/a5/c2/62a5c2e41e8931986dc512f9a7f4be6b.jpg",
                    title: "Alrauna Homestead"
                },
                {
                    id: 6,
                    src: "https://i.pinimg.com/474x/93/e4/d7/93e4d7ea8fad661778b56b6502172513.jpg",
                    title: "Autumn 2012: Celebration"
                },
                {
                    id: 7,
                    src: "https://i.pinimg.com/474x/08/f3/be/08f3be53aaec9a3186aa5349d5f0d2a1.jpg",
                    title: "visualmanifestation"
                },
                {
                    id: 8,
                    src: "https://i.pinimg.com/474x/a1/10/6e/a1106eb053ebbcb616fd1d9e8a4dcdec.jpg",
                    title: "10 Watercolor Hacks"
                },
                {
                    id: 9,
                    src: "https://i.pinimg.com/474x/ce/d7/c1/ced7c175030df1f986cae83c32aa6136.jpg",
                    title: "Dakota Johnson on Instagram"
                },
                {
                    id: 10,
                    src: "https://i.pinimg.com/474x/12/b2/a3/12b2a3c305862d767fd1fa097fc33828.jpg",
                    title: "Steamed Bao Buns"
                }
            ]
        }
    }

    render(){

        const { images } = this.state;

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
            <div style={{display: 'flex', flexWrap: 'wrap', maxWidth: '100vw' }}>
                {structuredImages.map(images => 
                    <div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}} >
                        {images.map(image => <Image image={image} />)}
                    </div>)}
            </div>
        )
    }
}