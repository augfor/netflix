import { FlatList, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Text } from '../../components/Themed';

import styles from './styles';

interface HomeCategoryProps {
  category: {
    id: string;
    title: string;
    movies: { id: string; poster: string }[];
  };
}

const HomeCategory = (props: HomeCategoryProps) => {
  const { category } = props;
  const navigation = useNavigation();

  const onMoviePress = (movie) => {
    navigation.navigate('MovieDetailsScreen', { id: movie.id });
  };

  return (
    <>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        data={category.movies}
        renderItem={({ item }) => (
          <Pressable onPress={() => onMoviePress(item)}>
            <Image
              style={styles.image}
              source={{
                uri: item.poster,
              }}
            />
          </Pressable>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};

export default HomeCategory;

/** Displaying data from the server */

// import { useEffect, useState } from 'react';
// import { FlatList, Image, Pressable } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { DataStore } from 'aws-amplify';

// import { Text } from '../../components/Themed';

// import styles from './styles';
// import { Category, Movie } from '../../src/models';

// interface HomeCategoryProps {
//   category: Category;
// }

// const HomeCategory = (props: HomeCategoryProps) => {
//   const { category } = props;

//   const [movies, setMovies] = useState<Movie[]>([]);

//   const navigation = useNavigation();

//   useEffect(() => {
//     const fetchMovies = async () => {
//       const result = (await DataStore.query(Movie)).filter(
//         (movie) => movie.categoryID === category.id
//       );

//       setMovies(result);
//     };

//     fetchMovies();
//   }, []);

//   const onMoviePress = (movie: Movie) => {
//     navigation.navigate('MovieDetailsScreen', { id: movie.id });
//   };

//   return (
//     <>
//       <Text style={styles.title}>{category.title}</Text>
//       <FlatList
//         data={movies}
//         renderItem={({ item }) => (
//           <Pressable onPress={() => onMoviePress(item)}>
//             <Image
//               style={styles.image}
//               source={{
//                 uri: item.poster,
//               }}
//             />
//           </Pressable>
//         )}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//       />
//     </>
//   );
// };

// export default HomeCategory;
