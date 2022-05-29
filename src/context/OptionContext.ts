import { defaultOptions, DefaultOptions } from '@dust-defi/react-lib';
import { createContext } from 'react';
import { notify } from '../utils/utils';

export default createContext<DefaultOptions>(defaultOptions);
