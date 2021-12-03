import React from 'react';

export default class Search extends React.Component <any,any> {
    constructor(props: any){
        super(props);
        this.state = {
            
        }
       
    }

    handleChangeInSearch(e){
       this.props.filterImages(e.target.value)
    }

    render(){
        return (
            <div>
                <input 
                    onChange={(e) => this.handleChangeInSearch(e)}
                    placeholder="Look for ideas..." 
                    style={{ backgroundColor: '#EEEEEE', borderRadius: '60px', padding: '15px 50px', border: 'none', width: '100%', maxWidth: '600px', margin: '10px 0', fontFamily: "Nunito, sans-serif"  }}
                />
            </div>
        )
    }
}