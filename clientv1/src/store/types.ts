// Shared enums and types across the application go here

import { FetchModelDebouncer } from './core/actions';
import PromiseStore from './core/PromiseStore';
import StoreUtils from './core/StoreUtils';

export interface LinkedModel {
  id?: string,
  type?: string,
  url?: string
}

export interface Model extends LinkedModel {
  [key: string]: any
}

export interface RootState {
  [key: string]: any,
  version: string;
}

export interface CoreState {
  [key: string]: any,
  models: Array<Model>;
  selected?: Model;
  selectedCopy?: Model;
  storeUtils?: StoreUtils;
  _storeName: string;
  _url: (action?: string) => string;
  _responseFields?: (action?: string) => string;
  _promiseStore: PromiseStore;
  _fetchModelDebouncer?: FetchModelDebouncer;
};

export enum ModelType {
  quote = 'quote'
};

export enum StoreType {
  QuoteStore = 'quoteStore',
  StockSubscriptionStore = 'stockSubscriptionStore'
}

export enum ModelBaseUrlType {
  quote = 'quote',
  stockSubscription = 'subscription'
}
