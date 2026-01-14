

// import { View, StyleSheet, Text } from 'react-native';
// import React, { useMemo, useState } from 'react';
// import ProductImageCarousel from '../ProductImageCarousel/ProductImageCarousel';
// import styles from './styles';
// import UltraTech from '../../../assets/UltraTech';

// // type ItemProps = {
// //   // items: React.ReactElement[];
// //   currentState: number;
// //   setCurrentState: React.Dispatch<React.SetStateAction<number>>;
// // };

// export default function ProductDetailsImage() {
//   const [currentState, setCurrentState] = useState(1);
//   const items = useMemo(() => [
//     <UltraTech width={80} height={80} />,
//     <UltraTech width={80} height={80} />,
//     <UltraTech width={80} height={80} />,
//     <UltraTech width={80} height={80} />,
//     <UltraTech width={80} height={80} />,
//   ], []);
//   console.log("inside image")
//   return (
//     <View style={styles.topContainer}>
//       <View style={styles.imageContainer}>
//         {React.cloneElement(items[currentState], { width: 300, height: 300 })}
//         {/* {items[currentState] } */}
//       </View>
//       <View style={styles.imageListContainer}>
//         <ProductImageCarousel 
//           // currentState={currentState}
//           // setCurrentState={setCurrentState}
//         />
//       </View>
//     </View>

//   );
// }

import { View, StyleSheet, Text, Image, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import ProductImageCarousel from '../ProductImageCarousel/ProductImageCarousel';
import styles from './styles';

export default function ProductDetailsImage({ image_url }: { image_url: string }) {
  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.topContainer}>
      <View style={styles.imageContainer}>
        {loading && (
          <ActivityIndicator size="large" color="#0000ff" style={{ position: 'absolute', top: 80, left: '45%' }} />
        )}
        {image_url != "https://cdn-icons-png.flaticon.com/128/6356/6356587.png"? 
               <Image
          style={{
            width: '100%',
            height: '100%',
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
            : 
            <Image
            style={{
              width: '100%',
              height: 128,
              resizeMode: "contain"
            }}
            source={{
              uri: image_url
            }}
            onLoadEnd={() => setLoading(false)}
            onError={() => {
              setLoading(false);
              console.warn('Image failed to load');
            }}
          />

        }
      
      </View>
      <View style={styles.imageListContainer}>
        <ProductImageCarousel 
        image_url={image_url}
          
        />
      </View>
    </View>
  );
}
