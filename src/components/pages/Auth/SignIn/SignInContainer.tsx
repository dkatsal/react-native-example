import React, {FC, useState} from 'react';

import {useSelector} from 'react-redux';
import {
  Button,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './SignInContainerStyles';
import {login} from '../../../../store/user/userSlice';
import {RootState} from '../../../../store/reducers';
import {KeyValueModel} from '../../../../models';
import {useAppDispatch} from '../../../../store/configureStore';

interface IProps {}

interface IFields {
  email: string;
  password: string;
}

const SignInContainer: FC<IProps> = () => {
  const dispatch = useAppDispatch();

  const store = useSelector((state: RootState) => state);
  const [fields, setFields] = useState<IFields>({
    email: '',
    password: '12345678',
  });
  const [errors, setErrors] = useState<KeyValueModel<string | boolean>>({});

  const handleSubmit = () => {
    dispatch(
      login({
        email: fields.email,
        password: fields.password,
        callback: errors => {
          if (errors) {
            setErrors({
              ...errors,
            });
          }
        },
      }),
    );
  };

  const handleChange = (fieldName: string) => (value: string) => {
    setFields({
      ...fields,
      [fieldName]: value,
    });
    setErrors({});
  };

  return (
    <View style={styles.authPage}>
      <ImageBackground
        source={require('../../../../assets/images/auth-background.jpg')}
        resizeMode="cover"
        style={styles.imageBg}>
        <View style={styles.authForm}>
          <View style={styles.authHeader}>
            <Text style={styles.authTitle}>Good morning</Text>
            <Text style={styles.authText}>Population Health Solutions</Text>
            <Text style={styles.authLine}>qwe</Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('email')}
              value={fields.email}
            />
            {errors?.email ? (
              <Text style={styles.label}>{errors.email}</Text>
            ) : null}
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('password')}
                value={fields.password}
                secureTextEntry={true}
              />
            </View>
            {errors?.password ? (
              <Text style={styles.label}>{errors.password}</Text>
            ) : null}
          </View>
          {store.user.loading ? (
            <View style={styles.btn}>
              <Text style={styles.btnText}>Loading....</Text>
            </View>
          ) : (
            <TouchableOpacity
              onPress={handleSubmit}
              disabled={!(fields.email && fields.password)}
              style={[
                styles.btn,
                fields.email && fields.password ? {opacity: 1} : {opacity: 0.5},
              ]}>
              <Text style={styles.btnText}>Sign In</Text>
            </TouchableOpacity>
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignInContainer;
