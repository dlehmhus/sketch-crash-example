import React from 'react';
import { render, Artboard } from 'react-sketchapp';
import { View, Image } from 'react-primitives';


const styles = {
  DEFAULT: {
    borderWidth: 1,
    borderColor: '#333',
    margin: 50,
  },
  image: {
    width: 350,
    height: 150,
    resizeMode: 'contain',
  }
}
const Page = () => (
  <View name="Artboard">
    <View name="Desktop" 
      style={[
        styles.DEFAULT, {
        width: 1440, 
        height: 1000
        }]}>
        <Image source={require('./logo.png')} style={styles.image}/>
    </View>
  </View>
);

export default () => {
  render(<Page />, context.document.currentPage());
};
