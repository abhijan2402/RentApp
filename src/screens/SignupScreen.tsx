import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import * as z from 'zod';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {AppScrollView} from '../components/layout/AppScrollView';
import {AppInput} from '../components/ui/AppInput';
import {AppButton} from '../components/ui/AppButton';
import {AppPage} from '../components/layout/AppPage';
import Icon from 'react-native-vector-icons/Ionicons';
import {AppSeparator} from '../components/ui/AppSeparator';
import {colors} from '../styles/theme';
import {RootStackParamList} from '../../types/types';

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be 6+ characters'),
});

type SignupForm = z.infer<typeof schema>;
type NavigationProp = StackNavigationProp<RootStackParamList>;

export default function SignupScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [showPassword, setShowPassword] = useState(false);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<SignupForm>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: SignupForm) => {
    console.log('Signup data:', data);
    navigation.navigate('Auth', {
      screen: 'Signup',
    });
  };

  return (
    <AppPage title="HireHaven" showBack={false}>
      <AppScrollView contentContainerStyle={styles.container}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/847/847969.png',
          }}
          style={styles.signupImage}
        />
        <Text style={styles.title}>Create Account 🎉</Text>
        <Text style={styles.subtitle}>Sign up to get started!</Text>

        <Controller
          control={control}
          name="name"
          render={({field: {onChange, value}}) => (
            <AppInput
              label="Full Name"
              placeholder="Enter your name"
              value={value}
              onChangeText={onChange}
              error={errors.name?.message}
              icon={
                <Icon name="person-circle-outline" size={20} color="#999" />
              }
            />
          )}
        />

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

        <AppButton title="Sign up" onPress={handleSubmit(onSubmit)} />

        <AppSeparator />

        <TouchableOpacity
          style={styles.accountlinkWrap}
          onPress={() =>
            navigation.navigate('Auth', {
              screen: 'Login',
            })
          }>
          <Text style={styles.accountlinkSubtitle}>Haven't and account?</Text>
          <Text style={styles.register}>Login</Text>
        </TouchableOpacity>
      </AppScrollView>
    </AppPage>
  );
}

const styles = StyleSheet.create({
  signupImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
  container: {
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#002745',
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
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
