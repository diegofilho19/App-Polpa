import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#fff',
    },
    headerContainer: {
      width: 414,
      height: 68,
      backgroundColor: '#fd511a',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
    },
    backButton: {
      marginRight: 16,
    },
    headerText: {
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold',
    },
    subheader: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 16,
      marginBottom: 16,
    },
    option: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 16,
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 8,
    },
    icon: {
      width: 24,
      height: 24,
      marginRight: 16,
    },
    optionText: {
      fontSize: 18,
      flex: 1,
    },
    radioButton: {
      fontSize: 18,
    },
    confirmButton: {
      backgroundColor: '#fd511a',
      padding: 16,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 32,
    },
    confirmButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
  
  export default styles;