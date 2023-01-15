import axios, {Method, AxiosRequestConfig} from 'axios';
import {API_URI} from '../constants';
import {globals} from '../store/globals';

interface RequestParams<T> {
  data: T;
  method: Method;
  applicationType?: string;
  responseType?: AxiosRequestConfig['responseType'];
}

export const httpRequestReport = async (
  url: string,
  params: RequestParams<object>,
): Promise<any> => {
  const data = params.data;
  const method = params.method;
  const responseType = params.responseType;

  let headers: any = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Cache-Control': 'no-cache',
  };

  if (globals.store) {
    const {access_token} = globals.store.getState().user;
    if (access_token) {
      headers.Authorization = `Bearer ${access_token}`;
    }
  }

  console.log('report http', url, data);
  return axios({
    method,
    url: `${API_URI}${url}`,
    headers,
    data,
    responseType,
  })
    .then(async response => response.data)
    .catch(async err => {
      throw err;
    });
};
