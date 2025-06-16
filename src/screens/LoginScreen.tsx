import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import * as z from 'zod';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {AppPage} from '../components/layout/AppPage';
import {AppScrollView} from '../components/layout/AppScrollView';

import {colors} from '../styles/theme';
import {AppInput} from '../components/ui/AppInput';
import {AppButton} from '../components/ui/AppButton';
import {AppSeparator} from '../components/ui/AppSeparator';
import {RootStackParamList} from '../../types/types';

const schema = z.object({
  email: z.string().email({message: 'Invalid email'}),
  password: z.string().min(6, {message: 'Minimum 6 characters'}),
});

type LoginForm = z.infer<typeof schema>;
type NavigationProp = StackNavigationProp<RootStackParamList>;

export default function LoginScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginForm>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: LoginForm) => {
    console.log('Login data:', data);
    navigation.navigate('Auth', {screen: 'UserType'});
  };

  return (
    <AppPage title="HireHaven" showBack={false}>
      <AppScrollView>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/295/295128.png',
          }} // example login icon
          style={styles.loginImage}
        />
        <Text style={styles.title}>Welcome Back 👋</Text>
        <Text style={styles.subtitle}>
          Let's log in. Find jobs & rent properties easily.
        </Text>

        <Controller
          control={control}
          name="email"
          render={({field: {onChange, value}}) => (
            <AppInput
              label="Email"
              placeholder="Enter your email"
              value={value}
              onChangeText={text => onChange(text.trim())}
              error={errors.email?.message}
              icon={<Icon name="mail-outline" size={20} color="#999" />}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({field: {onChange, value}}) => (
            <AppInput
              label="Password"
              placeholder="Enter your password"
              value={value}
              secureTextEntry={!showPassword}
              onChangeText={onChange}
              error={errors.password?.message}
              icon={<Icon name="lock-closed-outline" size={20} color="#999" />}
              rightIcon={
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}>
                  <Icon
                    name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                    size={20}
                    color="#999"
                  />
                </TouchableOpacity>
              }
            />
          )}
        />

        <TouchableOpacity style={styles.forgotWrap}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>

        <AppButton title="Log in" onPress={handleSubmit(onSubmit)} />
        <AppSeparator />

        <TouchableOpacity
          style={styles.accountlinkWrap}
          onPress={() => navigation.navigate('Auth', {screen: 'Signup'})}>
          <Text style={styles.accountlinkSubtitle}>Haven't and account?</Text>
          <Text style={styles.register}>Register</Text>
        </TouchableOpacity>
      </AppScrollView>
    </AppPage>
  );
}

const styles = StyleSheet.create({
  loginImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
    color: colors.primary,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
  },
  forgotWrap: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  forgotText: {
    color: colors.secondary,
    fontSize: 13,
  },
  accountlinkWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  accountlinkSubtitle: {
    color: colors.text,
  },
  register: {
    color: colors.secondary,
  },
});
