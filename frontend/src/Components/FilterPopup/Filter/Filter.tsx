

// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// export default function Filter() {
//   const filterOptions = {
//     Brand: ['Infra Market', 'UltraTech', 'Bharathi', 'ACC', 'Sagar', 'Birla'],
//     Grade: ['Grade A', 'Grade B', 'Grade C', 'Grade D', 'Grade E'],
//     Weight: [10, 20, 30, 40, 50],
//     Price: [300, 400, 500, 600, 700],
//     Rating: [1, 2, 3, 4, 5],
//   };

//   type FilterOptions = typeof filterOptions;
//   type FilterKeys = keyof FilterOptions;

//   const [selectedCategory, setSelectedCategory] = useState<FilterKeys | null>('Brand');
//   const [selectedValues, setSelectedValues] = useState<Set<string | number>>(new Set());

//   // const [selectedCategory, setSelectedCategory] = useState<FilterKeys | null>('Brand');
//   // const [selectedValues, setSelectedValues] = useState<Set<string | number>>(new Set());

//   const handleSelectCategory = (category: FilterKeys) => {
//     setSelectedCategory(selectedCategory === category ? null : category);
//   };

//   const handleSelectValue = (value: string | number) => {
//     const updatedSelectedValues = new Set(selectedValues);

//     if (updatedSelectedValues.has(value)) {
//       updatedSelectedValues.delete(value);
//     } else {
//       updatedSelectedValues.add(value);
//     }

//     setSelectedValues(updatedSelectedValues);
//   };

//   return (
//     <View style={styles.topContainer}>
//       <View style={styles.leftContainer}>
//         {Object.keys(filterOptions).map((category) => (
//           <TouchableOpacity key={category} onPress={() => handleSelectCategory(category as FilterKeys)}>
//             <Text style={[styles.categoryTitle, selectedCategory === category ? styles.selectedKey : null]}>{category}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//       {/* <View style={styles.leftContainer}>
//           {Object.keys(filterOptions).map((category)=>(
//             <TouchableOpacity >
//                <Text>{category}</Text>
//             </TouchableOpacity>
//           ))}
//       </View> */}
//       <View style={styles.rightContainer}>
//         {selectedCategory && (
//           <View style={styles.innerRight}>
//             {filterOptions[selectedCategory].map((value, index) => (
//               <TouchableOpacity key={index} onPress={() => handleSelectValue(value)}>
//                 <Text style={[styles.valueText, selectedValues.has(value) && styles.selectedValue]}>
//                   {value}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//         )}
//         <View style={styles.selectedContainer}>
//           <Text>Selected Values:</Text>
//           {Array.from(selectedValues).map((value, index) => (
//             <Text key={index} style={styles.selectedValueText}>{value}," ",{index}</Text>
//           ))}
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   topContainer: {
//     flexDirection: 'row',
//     flex: 1,
//   },
//   leftContainer: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: 'red',
//     // padding: 10,
//   },
//   rightContainer: {
//     flex: 2,
//     borderWidth: 1,
//     borderColor: 'black',
//     // padding: 10,
//   },
//   categoryTitle: {
//     fontWeight: 'bold',
//     // marginBottom: 10,
//     padding:10,
//     borderWidth:1,
//     borderColor:'black'
//   },
//   innerRight: {
//     // marginTop: 10,
//   },
//   valueText: {
//     // marginLeft: 10,
//     padding:10,
//     borderWidth:1,
//     borderColor:'black',
//     // paddingVertical: 5,
//   },
//   selectedValue: {
//     backgroundColor: 'lightblue',
//   },
//   selectedKey: {
//     backgroundColor: 'lightblue',
//   },
//   selectedContainer: {
//     marginTop: 20,
//   },
//   selectedValueText: {
//     marginLeft: 10,
//     fontWeight: 'bold',
//   },
// });


import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Unclicked from '../../../assets/UnClicked';
import ClickedIcon from '../../../assets/ClickedIcon';
import styles from './styles';

type Filterprops = {
  selectedCategory: string | null;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>;
  selectedValues: Map<string, Set<string | number>>;
  setSelectedValues: React.Dispatch<React.SetStateAction<Map<string, Set<string | number>>>>;
};


export default function Filter({selectedCategory,setSelectedCategory,selectedValues,setSelectedValues}:Filterprops) {
  const filterOptions: { [key: string]: (string | number)[] } = {
    Brand: ['Infra Market', 'UltraTech', 'Bharathi', 'ACC', 'Sagar', 'Birla'],
    Grade: ['Grade A', 'Grade B', 'Grade C', 'Grade D', 'Grade E'],
    Weight: [10, 20, 30, 40, 50],
    Price: [300, 400, 500, 600, 700],
    Rating: [1, 2, 3, 4, 5],
  };

  // const [selectedCategory, setSelectedCategory] = useState<string | null>('Brand');
  // const [selectedValues, setSelectedValues] = useState<Map<string, Set<string | number>>>(new Map());

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  const handleSelectValue = (key: string, value: string | number) => {
    const updatedSelectedValues = new Map<string, Set<string | number>>(selectedValues);
    
    if (updatedSelectedValues.has(key)) {
      const values = updatedSelectedValues.get(key)!; 
      if (values.has(value)) {
        values.delete(value);
      } else {
        values.add(value);
      }
    } else {
      updatedSelectedValues.set(key, new Set([value]));
    }

    setSelectedValues(updatedSelectedValues);
  };

  return (
    <View style={styles.topContainer}>
      <View style={styles.leftContainer}>
        {Object.keys(filterOptions).map((category) => (
          <TouchableOpacity key={category} onPress={() => handleSelectCategory(category)}>
            <Text style={[styles.categoryTitle, selectedCategory === category ? styles.selectedKey : null]}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.rightContainer}>
        {selectedCategory && (
          <View style={styles.innerRight}>
            {filterOptions[selectedCategory].map((value, index) => (
              <TouchableOpacity key={index} onPress={() => handleSelectValue(selectedCategory, value)}>
                <View style={styles.valueTextcontainer}>
                  {
                    selectedValues.get(selectedCategory)?.has(value) ? <ClickedIcon/> : <Unclicked/>
                  }
                
                <Text style={[styles.valueText]}>
                  {value}
                </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
        <View style={styles.selectedContainer}>
          {/* <Text>Selected Values:</Text>
          {Array.from(selectedValues.entries()).map(([category, values]) => (
            <View key={category}>
              <Text style={styles.categoryTitle}>{category}:</Text>
              {Array.from(values).map((value, index) => (

                <Text key={index} style={styles.selectedValueText}>
                  {value}
                </Text>
              ))}
            </View>
          ))} */}
        </View>
      </View>
    </View>
  );
}
