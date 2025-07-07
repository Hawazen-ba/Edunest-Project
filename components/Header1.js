// import React from "react";
// import {
//   Image,
//   SafeAreaView,
//   StatusBar,
//   StyleSheet,
//   View,
//   Text,
//   TouchableOpacity,
//   Dimensions,
// } from "react-native";
// import Ionicons from "react-native-vector-icons/Ionicons";
// import useColors from "../assets/styles/colors";

// const { height, width } = Dimensions.get("window");

// const Header1 = () => {
//   const Colors = useColors();
//   const handleMenuPress = () => {
//     console.log("Menu pressed");
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
//       <View style={styles.headerWrapper}>
//         <View style={styles.mainHeader}>
//           <View style={styles.headerContent}>
//             <View style={styles.profileContainer}>
//               <Image
//                 source={require("../assets/profile.jpg")}
//                 style={styles.profileImage}
//               />
//               <View style={styles.textContainer}>
//                 <Text style={styles.name}>Yassine Zack</Text>
//                 <Text style={styles.title}>4th year IT engineering SE</Text>
//               </View>
//             </View>
//             <TouchableOpacity
//               style={styles.menuButton}
//               onPress={handleMenuPress}
//             >
//               <Ionicons name="ellipsis-vertical" size={24} color="white" />
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* <View style={[styles2.curve, styles2.rightCurve]} /> */}

//         <View style={styles.TopArea}>
//           <Image source={require("../assets/logo.png")} style={styles.logo} />
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: Colors.primary,
//     marginBottom: 20,
//   },
//   curve: {
//     position: "absolute",
//     backgroundColor: "green",
//     top: 10,
//     left: 10,
//     right: 0,
//     zIndex: 100,
//     // height: height * 0.4,
//   },
//   rightCurve: {
//     position: "absolute",
//     backgroundColor: "red",
//     top: 0,
//     left: 0,
//     right: 0,
//     height: height * 0.22,
//     transform: [{ rotate: "180deg" }],
//   },
//   headerWrapper: {
//     height: height * 0.1,
//   },
//   mainHeader: {
//     backgroundColor: Colors.primary,
//     height: height * 0.12,
//     paddingHorizontal: 20,
//     borderBottomLeftRadius: 30,
//   },
//   headerContent: {
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   profileContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   profileImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 50,
//     borderWidth: 2,
//     borderColor: "#fff",
//   },
//   textContainer: {
//     marginLeft: 15,
//   },
//   name: {
//     color: "#FFFFFF",
//     fontSize: 22,
//     fontWeight: "bold",
//     marginBottom: 5,
//   },
//   title: {
//     color: "#FFFFFF",
//     fontSize: 16,
//     opacity: 0.9,
//   },
//   menuButton: {
//     padding: 8,
//   },
//   curve: {
//     position: "absolute",
//     bottom: 0,
//     width: 70,
//     height: 70,
//     backgroundColor: "#102363",
//   },
//   rightCurve: {
//     position: "absolute",
//     right: -30,
//     borderTopLeftRadius: 60,
//   },
//   profileImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 50,
//     borderWidth: 2,
//     borderColor: "#fff",
//   },
//   logoContainer: {
//     paddingTop: 10,
//     marginRight: -5,
//     alignItems: "flex-end",
//     paddingHorizontal: 20,
//     borderTopRightRadius: 30,
//     backgroundColor: Colors.background,
//   },
//   logo: {
//     width: width * 0.2,
//     height: height * 0.1,
//     borderRadius: 65,
//   },
//   image: {
//     width: width * 0.1,
//     height: height * 0.1,
//   },
//   headerTitle: {
//     color: "#FFFFFF",
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 8,
//   },
//   headerSubtitle: {
//     color: "#FFFFFF",
//     fontSize: 16,
//     opacity: 0.9,
//   },
//   TopArea: {
//     backgroundColor: "red",
//     paddingTop: 10,
//     marginRight: -5,
//     alignItems: "flex-end",
//     paddingHorizontal: 20,
//     borderTopRightRadius: 30,
//     backgroundColor: Colors.background,
//   },
// });
// const styles2 = StyleSheet.create({
//   container: {
//     backgroundColor: "#fff",
//     flex: 1,
//   },
//   headerWrapper: {
//     height: 200,
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//   },
//   mainHeader: {
//     backgroundColor: "#102363",
//     height: 170,
//     paddingHorizontal: 20,
//     borderBottomLeftRadius: 30,
//     flexDirection: "row",
//   },
//   headerContent: {
//     flex: 1,
//   },
//   profileContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: 20,
//   },
//   profileImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     borderWidth: 2,
//     borderColor: "#fff",
//   },
//   textContainer: {
//     marginLeft: 15,
//   },
//   name: {
//     color: "#FFFFFF",
//     fontSize: 22,
//     fontWeight: "bold",
//     marginBottom: 5,
//   },
//   title: {
//     color: "#FFFFFF",
//     fontSize: 16,
//     opacity: 0.9,
//   },
//   curve: {
//     alignSelf: "flex-end",
//     // position: "absolute",
//     bottom: 0,
//     width: 70,
//     height: 70,
//     backgroundColor: "#102363",
//     marginTop: -20,
//   },

//   rightCurve: {
//     right: -30,
//     borderTopLeftRadius: 60,
//   },
//   profileImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 50,
//     borderWidth: 2,
//     borderColor: "#fff",
//   },
//   logoContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   logo: {
//     width: 150,
//     height: 150,
//     borderRadius: 50,
//     backgroundColor: "#fff",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   image: {
//     width: 100,
//     height: 100,
//   },

//   headerTitle: {
//     color: "#FFFFFF",
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 8,
//   },
//   headerSubtitle: {
//     color: "#FFFFFF",
//     fontSize: 16,
//     opacity: 0.9,
//   },
//   contentArea: {
//     flex: 1,
//     padding: 20,
//     borderTopRightRadius: 30,
//     backgroundColor: "#FFFFFF",
//   },
//   logoContainer: {
//     alignItems: "flex-end",
//     marginTop: 20,
//   },
//   image: {
//     width: 100,
//     height: 100,
//     borderRadius: 30,
//     marginTop: -120,
//     marginRight: -70,
//   },
//   noticeArea: {
//     padding: 20,
//   },
// });

// export default Header1;
