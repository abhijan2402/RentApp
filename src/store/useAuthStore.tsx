import {create} from 'zustand';

interface AuthState {
  isLoggedIn: boolean;
  userType: string | null;
  userData: Record<string, any>;
  login: (type: string) => void;
  logout: () => void;
  setUserData: (data: Record<string, any>) => void;
}

export const useAuthStore =
  create <
  AuthState >
  (set => ({
    isLoggedIn: false,
    userType: null,
    userData: {},
    login: type => set({isLoggedIn: true, userType: type}),
    logout: () => set({isLoggedIn: false, userType: null, userData: {}}),
    setUserData: data => set({userData: data}),
  }));
