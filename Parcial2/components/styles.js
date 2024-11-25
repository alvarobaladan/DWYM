import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    card_container: {
        flexDirection: 'row',
        margin: 5,
        boxSizing: 'border-box',
        width: windowWidth * 0.85,
        height: windowHeight * 0.75,
        backgroundColor: 'rgba(217, 217, 217, 0.58)',
        borderColor: 'black',
        borderWidth: 2,
        borderBlockColor: 'solid white',
        boxShadow: '5px 5px 3px rgba(0, 0, 0, 0.22)',
        borderRadius: 17,
        //backgroundImage: 'linear-gradient(to right, #051937, #444964, #808195, #bfbec8, #ffffff);',
    },

    title: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 20,
    },

    image: {
        alignSelf: 'flex-start',
        margin: 5,
        width: 100,
        height: 100,
        resizeMode: 'contain',
        borderWidth: 2,
        borderRadius: 17,
    },

    button: {
        width:100,
        height:40,
        margin:5,
        alignSelf:'flex-end',

        backgroundColor: '#FAFBFC',
        borderColor: 'black', //rgba(27, 31, 35, 0.15)
        borderWidth: 1,
        borderRadius: 6,
        paddingVertical: 6,
        paddingHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#1B1F23',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.04,
        shadowRadius: 0,
    },

    textInput: {
        margin: 5,
        textAlign: 'center',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'grey',
        borderRadius: 5,
        minHeight: 50,
        minWidth: 300,
      },
});

export default styles;