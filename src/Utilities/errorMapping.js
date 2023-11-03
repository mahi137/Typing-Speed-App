const errorMapping = {
   'auth/user-not-found' : 'There is no existing user record corresponding to the provided identifier.',
   'auth/uid-already-exists' : 'The provided uid is already in use by an existing user. Each user must have a unique uid.',
   'auth/phone-number-already-exists' : 'The provided phoneNumber is already in use by an existing user. Each user must have a unique phoneNumber.',
   'auth/invalid-uid' : 'The provided uid must be a non-empty string with at most 128 characters.',
   'auth/invalid-password' : 'The provided value for the password user property is invalid. It must be a string with at least six characters.',
   'auth/invalid-email' : 'The provided value for the email user property is invalid. It must be a string email address.',

}

export default errorMapping;