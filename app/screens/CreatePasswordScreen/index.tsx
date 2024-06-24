// import React, {FC, useState, useMemo} from 'react';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import {StatusBar, View, TextInput, Text, TouchableOpacity} from 'react-native';
// import {useRoute, RouteProp} from '@react-navigation/native';
 
// import {
//   Button,
//   LoginFlowScreenHeader,
//   LoginFlowScreenTitle,
// } from '../../components';
// import {Colors} from '../../theme';
// import {CheckMarkIcon, EyeClose, EyeOpen, RedCrossIcon} from '../../assets/svg';
 
// import styles from './create-password-styles';
 
// type CreatePasswordScreenRouteProp = RouteProp<
//   {params: {data: {isEmailLogin?: boolean; phoneNum?: string; email?: string}}},
//   'params'
// >;
 
// const CreatePasswordScreen: FC = () => {
//   const {
//     params: {data: {isEmailLogin, phoneNum, email} = {}},
//   } = useRoute<CreatePasswordScreenRouteProp>();
//   // const navigation = useNavigation<RootStackParamList>();
 
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
 
//   const validatePassword = (password: string, confirmPassword: string) => {
//     return (
//       password.length >= 10 &&
//       /[0-9]/.test(password) &&
//       /[a-z]/.test(password) &&
//       /[A-Z]/.test(password) &&
//       password === confirmPassword
//     );
//   };
 
//   const isPasswordValid = useMemo(
//     () => validatePassword(password, confirmPassword),
//     [password, confirmPassword],
//   );
 
//   const toggleVisibility =
//     (setter: React.Dispatch<React.SetStateAction<boolean>>) => () =>
//       setter(prev => !prev);
 
//   const handleChange =
//     (
//       setter: React.Dispatch<React.SetStateAction<string>>,
//       validator: () => void,
//     ) =>
//     (text: string) => {
//       setter(text);
//       validator();
//     };
 
//   const getIcon = (isValid: boolean, password: string) => {
//     if (password.length === 0) {
//       return <CheckMarkIcon color={Colors.GRAY_TEXT} />;
//     }
//     return isValid ? <CheckMarkIcon color={Colors.GREEN} /> : <RedCrossIcon />;
//   };
 
//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="dark-content" backgroundColor={Colors.BLACK} />
//       <View style={styles.contentContainer}>
//         <LoginFlowScreenHeader />
//         <LoginFlowScreenTitle
//           title="Создать пароль"
//           subTitle="Используйте не менее 10 символов, включая прописные и строчные буквы и цифры."
//         />
//         {[
//           {
//             value: password,
//             setter: setPassword,
//             visible: passwordVisible,
//             toggle: toggleVisibility(setPasswordVisible),
//             placeholder: 'Пароль',
//           },
//           {
//             value: confirmPassword,
//             setter: setConfirmPassword,
//             visible: confirmPasswordVisible,
//             toggle: toggleVisibility(setConfirmPasswordVisible),
//             placeholder: 'Повторите пароль',
//           },
//         ].map(({value, setter, visible, toggle, placeholder}, index) => (
//           <View key={index} style={styles.inputContainer}>
//             <TextInput
//               style={styles.input}
//               value={value}
//               onChangeText={handleChange(setter, () =>
//                 validatePassword(password, confirmPassword),
//               )}
//               secureTextEntry={!visible}
//               placeholder={placeholder}
//             />
//             <TouchableOpacity onPress={toggle} style={styles.eyeIcon}>
//               {visible ? <EyeClose /> : <EyeOpen />}
//             </TouchableOpacity>
//           </View>
//         ))}
//         <View style={styles.validationContainer}>
//           {[
//             {
//               condition: password.length >= 10,
//               text: 'Имеет не менее 10 символов',
//             },
//             {
//               condition: /[0-9]/.test(password),
//               text: 'Содержит хотя бы одно число',
//             },
//             {
//               condition: /[a-z]/.test(password),
//               text: 'Содержит хотя бы одну строчную букву',
//             },
//             {
//               condition: /[A-Z]/.test(password),
//               text: 'Содержит хотя бы одну заглавную букву',
//             },
//             {condition: confirmPassword === password, text: 'Пароли совпадают'},
//           ].map(({condition, text}, index) => (
//             <View key={index} style={styles.validationItemContainer}>
//               {getIcon(condition, password)}
//               <Text style={styles.validationTitle}>{text}</Text>
//             </View>
//           ))}
//         </View>
//       </View>
//       <Button
//         handlePress={() =>
//           console.log(
//             'password',
//             password,
//             'email',
//             email,
//             'phoneNumber',
//             phoneNum,
//             'isEmailLogin',
//             isEmailLogin,
//           )
//         }
//         title="Создать учетную запись"
//         color="blue"
//         disabled={!isPasswordValid}
//         buttonStyle={[
//           styles.btnContainer,
//           !isPasswordValid && {backgroundColor: Colors.DISABLED_BUTTON},
//         ]}
//         titleStyles={[
//           styles.btnTitle,
//           !isPasswordValid && {color: Colors.GRAY_TEXT},
//         ]}
//       />
//     </SafeAreaView>
//   );
// };
 
// export default CreatePasswordScreen;