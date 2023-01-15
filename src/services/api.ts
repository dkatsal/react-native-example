import axios from 'axios';
import {API_URI} from '../constants';
import {globals} from '../store/globals';
import {logoutSuccess} from '../store/user/userSlice';

export default class Api {
  static methods = {
    GET: 'get',
    POST: 'post',
    PATCH: 'patch',
    PUT: 'put',
    DELETE: 'delete',
  };

  static composeRouteUrl(route: string) {
    if (route.startsWith('http')) {
      return route;
    }
    return `${API_URI}${route}`;
  }

  static get(route: string, params?: object) {
    return Api.request(route, params, undefined, Api.methods.GET);
  }

  static put(route: string, params?: object, data?: object) {
    return Api.request(route, params, data, Api.methods.PUT);
  }

  static patch(route: string, params?: object, data?: object) {
    return Api.request(route, params, data, Api.methods.PATCH);
  }

  static post(route: string, data?: object, appendHeaders?: object) {
    return Api.request(route, undefined, data, Api.methods.POST, appendHeaders);
  }

  static delete(route: string, params?: object) {
    return Api.request(route, params, undefined, Api.methods.DELETE);
  }

  static async request(
    route: string,
    params: object | undefined,
    data: object | undefined,
    method: any,
    appendHeaders?: object,
  ) {
    const url = Api.composeRouteUrl(route);
    let headers: any = {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      'X-Requested-With': 'XMLHttpRequest',
    };

    if (globals.store) {
      const {access_token} = globals.store.getState().user;

      if (access_token) {
        headers.Authorization = `Bearer ${access_token}`;
      }
    }

    if (appendHeaders) {
      headers = {...headers, ...appendHeaders};
    }

    return axios({
      method,
      url,
      headers,
      params,
      data,
    })
      .then(resp => {
        return resp.data;
      })
      .catch(err => {
        Api.handleError(err);
        throw err;
      });
  }

  static handleError(error: any) {
    if (error.response && error.response.status === 401) {
      if (globals.store) {
        globals.store.dispatch(logoutSuccess());
      }
    }

    const response = error.response || error;
    console.log(`Error occurred\n${response.status} ${response.data?.code}`);
  }
}
