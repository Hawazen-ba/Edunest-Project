// import React from "react";
// import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
// import useColors from "../assets/styles/colors";

// const ChildSelector = ({ children, selectedChildId, onSelect }) => {
//   const Colors = useColors();
//   return (
//     <View style={styles.row}>
//       {children.map((child) => (
//         <TouchableOpacity
//           key={child.id}
//           style={[
//             styles.button,
//             selectedChildId === child.id && styles.buttonSelected,
//           ]}
//           onPress={() => onSelect(child.id)}
//           activeOpacity={0.8}
//         >
//           <Text
//             style={[
//               styles.buttonText,
//               selectedChildId === child.id && styles.buttonTextSelected,
//             ]}
//           >
//             {child.name}
//           </Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   row: {
//     flexDirection: "row",
//     justifyContent: "center",
//     marginVertical: 10,
//     marginTop: -10,
//     gap: 12,
//   },
//   button: {
//     backgroundColor: "#fff",
//     borderColor: Colors.primary,
//     borderWidth: 2,
//     borderRadius: 20,
//     paddingVertical: 10,
//     paddingHorizontal: 22,
//     marginHorizontal: 4,
//     elevation: 2,
//   },
//   buttonSelected: {
//     backgroundColor: Colors.primary,
//   },
//   buttonText: {
//     color: Colors.primary,
//     fontWeight: 600,
//     fontSize: 16,
//   },
//   buttonTextSelected: {
//     color: "#fff",
//   },
// });

// export default ChildSelector;
