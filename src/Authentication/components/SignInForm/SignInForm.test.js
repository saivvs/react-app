/*global expect*/
import React from "react";
import { render } from "@testing-library/react";

import {SignInForm} from ".";

describe("SignInForm", () => {
  it("should render typed username", () => {
    const userName = "test-user";
    const { getByPlaceholderText } = render(
      <SignInForm userName={userName} onChangeUsername={() => {}} />
    );

    const usernameField = getByPlaceholderText("Username");

    expect(usernameField.defaultValue).toBe(userName);
  });
  
  it('should render typed password', () =>{
      const password = 'test-password';
      const { getByPlaceholderText } = render(
          <SignInForm password={password} onChangePassword={() => {}}/>
          );
          const passwordField = getByPlaceholderText("Password");
          expect (passwordField.defaultValue).toBe(password);
  });
  
  it('should render error message', () =>{
    const errorMessage = 'Please enter username';
    const { getByText } = render(
      <SignInForm errorMessage={errorMessage}/>
      );
      
      getByText(/Please enter username/i);
  });
});