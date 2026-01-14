


import {  ScrollView, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';



export default function ProductImageCarousel({image_url}:{image_url:string}) {
  const [loading, setLoading] = useState(true);
  const items = [
    image_url,
    image_url,
    image_url,
  ];
  return (
    <ScrollView horizontal={true} style={styles.scrollStyle} showsHorizontalScrollIndicator={false}>
      {items.map((value, index) => (
        <TouchableOpacity
          key={index} 
          style={styles.itemContainer} 
         
        >
       {loading && (
          <ActivityIndicator size="large" color="#0000ff" style={{ position: 'absolute', top: 80, left: '45%' }} />
        )}
       <Image
          style={{
            width: 80,
            height:80,
            resizeMode: "contain"
          }}
          // source={{ uri: `data:image/png;base64,${image_url}` }}
          source={{ uri: `${image_url}` }}
          onLoadEnd={() => setLoading(false)}
          onError={() => {
            setLoading(false);
            console.warn('Image failed to load');
          }}
        />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}