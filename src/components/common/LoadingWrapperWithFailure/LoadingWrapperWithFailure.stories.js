import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, number } from '@storybook/addon-knobs'

import LoadingWrapperWithFailure from '.';
import {SignInForm} from '../../../Authentication/components/SignInForm'

export default {
    component: LoadingWrapperWithFailure,
    title: 'Common/LoadingWrapperWithFailure'
}

export const defaultView = () => <LoadingWrapperWithFailure />

export const LoadingView = () => <LoadingWrapperWithFailure apiStatus={100} />

export const FailureView = () => <LoadingWrapperWithFailure apiStatus={400}/>

export const SuccessState = () => <LoadingWrapperWithFailure apiStatus={200} renderSuccessUI={SignInForm}/>

export const knobs = () => (
    <LoadingWrapperWithFailure 
     apiStatus={number("apiStatus", 100)}
        renderSuccessUI={SignInForm}
    />
    );
    
knobs.story = {
   decorators: [withKnobs]
}
    
