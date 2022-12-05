import {
  configureStore,
  createSerializableStateInvariantMiddleware,
  isPlain,
} from '@reduxjs/toolkit';
import AreasReducer from './slices/AreasSlice';
import AuthReducer from './slices/AuthSlice';
import { Iterable } from 'immutable';

const isNotSerializable = (value) => !Iterable.isIterable(value) || !isPlain(value);

const serializableMiddleware = createSerializableStateInvariantMiddleware({
  isNotSerializable,

});

const store = configureStore({
  reducer: {
    areas: AreasReducer,
    auth: AuthReducer,
  },
  middleware: [serializableMiddleware],
});

export default store;
