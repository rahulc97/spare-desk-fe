/* eslint-disable no-unused-vars */
import {
  FetchBaseQueryError,
  FetchBaseQueryMeta
} from '@reduxjs/toolkit/dist/query';
import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';

export type ExtraOptions = {
  showNotifier?: boolean;
  failure?: string;
  success?: string;
  showCustomMessage?: boolean;
  successNotifierType?: string;
  failureNotifierType?: string;
};

type ErrorCodeMapper = {
  [x: number]: string;
};

export type HandleNotifierLogics = (
  result: QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>,
  extraOptions: ExtraOptions,
  errorCodeMapper: ErrorCodeMapper
) => void;
