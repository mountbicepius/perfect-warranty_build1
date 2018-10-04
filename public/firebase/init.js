// Initialize Firebase
var config = {
  apiKey: "AIzaSyDUOeYSOvXa-XmDnC4F98cty7NLX5pcQqA",
  authDomain: "perfect-warranty.firebaseapp.com",
  databaseURL: "https://perfect-warranty.firebaseio.com",
  projectId: "perfect-warranty",
  storageBucket: "perfect-warranty.appspot.com",
  messagingSenderId: "971456117336"
};
firebase.initializeApp(config);


var ui = new firebaseui.auth.AuthUI(firebase.auth());

var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById('loader').style.display = 'none';
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: '<url-to-redirect-to-on-success>',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  tosUrl: '<your-tos-url>'
};
ui.start('#firebaseui-auth-container', uiConfig);
