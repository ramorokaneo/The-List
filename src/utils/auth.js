import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, auth } from 'firebase/auth';
import { doc, setDoc, firestore } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { setUser } from '../Slices/userSlice';

const dispatch = useDispatch();

export const signUp = async (email, password, name) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    // Send email verification
    await sendEmailVerification(userCredential.user, {
      handleCodeInApp: true,
      url: 'https://list-it-2890a.firebaseapp.com',
    });

    // Store additional user data (name, surname, phone number) in your database
    const userData = { name };
    await setDoc(doc(firestore, 'users', userCredential.user.uid), userData);

    // Dispatch the user information to Redux
    dispatch(setUser({ email: 'user@example.com' }));

    return true;
  } catch (error) {
    console.error('Sign Up Error:', error);
    return false;
  }
};

export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    // Dispatch the user information to Redux
    dispatch(setUser({ email: 'user@example.com' }));

    return true;
  } catch (error) {
    console.error('Sign In Error:', error);
    return false;
  }
};
