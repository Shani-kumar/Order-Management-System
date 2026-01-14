import { View, Text, StyleSheet, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import SearchIcon from '../../../assets/SearchIcon';
import UltraTech from '../../../assets/UltraTech';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store';
import { setsearchText } from '../../../redux/slices/searchtextSlice';

// type searchbarprop = {
//   // setsearchtext: React.Dispatch<React.SetStateAction<string>>;
//   setsearchtext:(value: string) => void;
// };

function Searchbar() {
  const [inputtext, setInputText] = useState('');
const dispatch = useDispatch<AppDispatch>()
const searchtext = useSelector((state:RootState)=> state.searchText.searchText)
  const [flag, setFlag] = useState(true);
  // useEffect(()=>{
  //   setInputText(searchtext);
  // },[])

  // const [items, setItems] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch('http://10.0.2.2:5000/products')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const formattedItems = data.map((item: any) => {
  //         const total_price = item.price;
  //         const discount = item.discount || 0;
  //         const discounted_price = total_price - (total_price * discount) / 100; // Calculate discounted price

  //         return {
  //           description: item.product_name, // Assuming 'product_name' is in the API response
  //           total_price: total_price,
  //           discounted_price: discounted_price,
  //           sale: item.sale,
  //           key: item.id.toString(),
  //           comp: <UltraTech width={128} height={128} />,
  //         };
  //       });
  //       setItems(formattedItems);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error);
  //       setLoading(false);
  //     });
  // }, []);

  const handlesearch = (newtext: string) => {
    setInputText(newtext); // Update local input text state
    // setsearchtext(newtext); // Set the search text in Home
      // dispatch(setsearchText(inputtext))
  };
  useEffect(()=>{
    dispatch(setsearchText(inputtext))
  },[inputtext])

  // useEffect(() => {
  //   // console.log(inputtext);
  // }, [inputtext]);

  return (
    <View style={styles.searchContainer}>
      {flag ? <SearchIcon /> : ''}
      <TextInput
        placeholder="Search Products"
        style={styles.textInput}
        placeholderTextColor="#888"
        onChangeText={handlesearch} // Call handlesearch on text change
        value={inputtext} // Bind input text to the state
        onFocus={() => setFlag(false)}
        onBlur={() => setFlag(true)}
      />
    </View>
  );
}

export default Searchbar;




// import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import SearchIcon from '../../../assets/SearchIcon';
// import UltraTech from '../../../assets/UltraTech';

// // Define the type for items
// interface Item {
//   name: string;
//   description: string;
//   total_price: number;
//   discounted_price: number;
//   sale: boolean;
//   key: string;
//   comp: JSX.Element;
// }

// function Searchbar() {
//   const [inputtext, setInputText] = useState("");
//   const [flag, setFlag] = useState(true);
//   const [items, setItems] = useState<Item[]>([]);
//   const [filteredItems, setFilteredItems] = useState<Item[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch('http://10.0.2.2:5000/products')
//       .then(response => response.json())
//       .then(data => {
//         const formattedItems = data.map((item: any) => {
//           const total_price = item.price;
//           const discount = item.discount;
//           const discounted_price = total_price - (total_price * discount / 100);
//           const description = item.description;
//           const name = item.product_name;
//           const sale = item.sale;
//           const id = item.id;

//           return {
//             name: name,
//             description: description,
//             total_price: total_price,
//             discounted_price: discounted_price,
//             sale: sale,
//             key: id.toString(),
//             comp: <UltraTech width={128} height={128} />
//           };
//         });
//         setItems(formattedItems);
//         setFilteredItems(formattedItems);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       });
//   }, []);

//   // Filter items based on the input text
//   function handleSearch(newText: string) {
//     setInputText(newText);
//     const results = items.filter((item) =>
//       item.description.toLowerCase().includes(newText.toLowerCase())
//     );
//     setFilteredItems(results);
//   }

//   return (
//     <View style={styles.searchContainer}>
//       {flag ? <SearchIcon /> : null}
//       <TextInput
//         placeholder="Search Products"
//         style={styles.textInput}
//         placeholderTextColor="#888"
//         onChangeText={handleSearch}
//         value={inputtext}
//         onFocus={() => setFlag(false)}
//         onBlur={() => setFlag(true)}
//       />

//       {/* Render loading indicator or filtered results */}
//       {loading ? (
//         <ActivityIndicator size="large" color="#000" />
//       ) : (
//         <FlatList
//           data={filteredItems}
//           keyExtractor={(item) => item.key}
//           renderItem={({ item }) => (
//             <TouchableOpacity style={styles.resultItem}>
//               {item.comp}
//               <View style={styles.textContainer}>
//                 <Text style={styles.productDescription}>{item.name}</Text>
//                 <Text style={styles.productPrice}>${item.discounted_price.toFixed(2)}</Text>
//                 {item.sale && <Text style={styles.saleTag}>Sale</Text>}
//               </View>
//             </TouchableOpacity>
//           )}
//         />
//       )}
//     </View>
//   );
// }

// export default Searchbar;

// const styles = StyleSheet.create({
//   searchContainer: {
//     flexDirection: 'column',
//     borderRadius: 10,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     marginHorizontal: 10,
//     paddingHorizontal: 15,
//     backgroundColor: '#fff',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   textInput: {
//     height: 50,
//     fontSize: 16,
//     color: '#333',
//   },
//   resultItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderColor: '#ddd',
//   },
//   textContainer: {
//     marginLeft: 10,
//   },
//   productDescription: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   productPrice: {
//     color: '#333',
//     fontSize: 14,
//   },
//   saleTag: {
//     color: 'red',
//     fontSize: 12,
//     fontWeight: 'bold',
//   },
// });
