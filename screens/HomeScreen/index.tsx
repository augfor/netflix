import { FlatList } from 'react-native';

import { View } from '../../components/Themed';
import HomeCategory from '../../components/HomeCategory';

import styles from './styles';
import categories from '../../assets/data/categories';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories.items}
        renderItem={({ item }) => <HomeCategory category={item} />}
      />
    </View>
  );
};

export default HomeScreen;

/** Displaying data from the server */

// import { FlatList } from 'react-native';
// import { useEffect, useState } from 'react';
// import { DataStore } from 'aws-amplify';

// import { View } from '../../components/Themed';
// import HomeCategory from '../../components/HomeCategory';

// import styles from './styles';
// import { Category } from '../../src/models';

// const HomeScreen = () => {
//   const [categories, setCategories] = useState<Category[]>([]);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       setCategories(await DataStore.query(Category));
//     };

//     fetchCategories();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <FlatList data={categories} renderItem={({ item }) => <HomeCategory category={item} />} />
//     </View>
//   );
// };

// export default HomeScreen;
