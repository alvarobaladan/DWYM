import { SafeAreaView, StyleSheet, Text, View, Image, FlatList } from "react-native";

export default function Index() {
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      margin: 5,
    },

    image: {
      width: 300,
      height: 200,
      resizeMode: 'contain',
    },

    imageCardContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      margin: 3,
    },

    imageCard: {
      borderWidth: 1,
      borderRadius: 15,
      borderColor: 'grey',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })

  const data = [
    {
      id: '1',
      image: require('./images/img1.jpg'),
      description: 'Descripción de la imagen 1.'
    },
    {
      id: '2',
      image: require('./images/img2.jpg'),
      description: 'Descripción de la imagen 2.'
    },
    {
      id: '3',
      image: require('./images/img3.jpg'),
      description: 'Descripción de la imagen 3.'
    },
    {
      id: '4',
      image: require('./images/img4.jpg'),
      description: 'Descripción de la imagen 4.'
    },
    {
      id: '5',
      image: require('./images/img5.jpg'),
      description: 'Descripción de la imagen 5.'
    },
    {
      id: '6',
      image: require('./images/img6.jpg'),
      description: 'Descripción de la imagen 6.'
    },
    {
      id: '7',
      image: require('./images/img7.jpg'),
      description: 'Descripción de la imagen 7.'
    },
  ]

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>TA5 - Crear una galería de imágenes con desplazamiento vertical</Text>
        <FlatList
          data={data}
          renderItem={({ item }) =>
            <View style={styles.imageCardContainer}>
              <View style={styles.imageCard}>
                <Image style={styles.image} source={item.image}></Image>
                <Text>{item.description}</Text>
              </View>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
}
