import React from 'react';

const ELEMENT_ID = 'firebaseui_container';

let firebaseUiDeletion = Promise.resolve();

export default class AuthenticationBox extends React.Component {
  constructor(props) {
    super(props);

    this.uiConfig = props.uiConfig;
    this.firebaseAuth = props.firebaseAuth;
    this.className = props.className;
    this.uiCallback = props.uiCallback;
    this.unregisterAuthObserver = () => {};
  }

  componentDidMount() {
    require('firebaseui/dist/firebaseui.css');

    // Firebase UI only works on the Client. So we're loading the package in `componentDidMount`
    // So that this works when doing server-side rendering.
    const firebaseui = require('firebaseui');

    // Wait in case the firebase UI instance is being deleted.
    // This can happen if you unmount/remount the element quickly.
    return firebaseUiDeletion.then(() => {
      // Get or Create a firebaseUI instance.
      this.firebaseUiWidget = firebaseui.auth.AuthUI.getInstance()
           || new firebaseui.auth.AuthUI(this.firebaseAuth);
      if (this.uiConfig.signInFlow === 'popup') {
        this.firebaseUiWidget.reset();
      }

      // We track the auth state to reset firebaseUi if the user signs out.
      this.userSignedIn = false;
      this.unregisterAuthObserver = this.firebaseAuth.onAuthStateChanged((user) => {
        if (!user && this.userSignedIn) {
          this.firebaseUiWidget.reset();
        }
        this.userSignedIn = !!user;
      });

      // Trigger the callback if any was set.
      if (this.uiCallback) {
        this.uiCallback(this.firebaseUiWidget);
      }

      // Render the firebaseUi Widget.
      this.firebaseUiWidget.start('#' + ELEMENT_ID, this.uiConfig);
    });
  }

  componentWillUnmount() {
    firebaseUiDeletion = firebaseUiDeletion.then(() => {
      this.unregisterAuthObserver();
      return this.firebaseUiWidget.delete();
    });
    return firebaseUiDeletion;
  }

  render() {
    return (
      <div className={this.className} id={ELEMENT_ID}/>
    );
  }
}