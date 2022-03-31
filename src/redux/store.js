import {configureStore} from '@reduxjs/toolkit';
import { setHeader } from './value';
export const store= configureStore({
    reducer:{
        header:setHeader
    },
})