import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, object } from '@storybook/addon-knobs'


import CountryCard from './CountryCard';

export default {
    component:CountryCard,
    title:'Cards/CountryCard'
}

export const defaultView = () => <CountryCard />