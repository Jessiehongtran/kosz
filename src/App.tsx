import './App.css';
import Pinterest from './components/pinterest';
import Search from './components/search';
import React from 'react';
import { images } from './data/images';

export default class App extends React.Component<any,any> {
  constructor(props){
    super(props);
    this.state= {
      images: images
    }
    this.filterImages = this.filterImages.bind(this)
  }

  filterImages(searchValue){
    const curImages  = this.state.images;
    if (searchValue.length > 0){
      const filtered = curImages.filter(image => image.title.toLowerCase().includes(searchValue.toLowerCase()))
      this.setState({ images: filtered })
    } else {
      this.setState({ images: images })
    }
  
  }

  render(){

    return (
      <div className="App" onBlur={() => this.setState({ images: images }) }>
        <Search filterImages={this.filterImages} />
        <Pinterest images={this.state.images} />
      </div>
    );
  }
}

