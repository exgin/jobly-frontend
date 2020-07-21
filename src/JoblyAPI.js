import axios from 'axios';
import { BASE_TOKEN } from './App'; // destructing {} fixes our "JoblyAPI token null"
import { URL } from './config';

/**
 * Similar to how the model classes in /backend interact with the database, but we don't have SQL statements everywhere
 */

class JoblyAPI {
  static async request(endpoint, data = {}, verb = 'get') {
    let _token = localStorage.getItem(BASE_TOKEN);

    console.log('API Call:', endpoint, data, verb);

    // include the token in the request
    let link;

    if (verb === 'get') {
      link = axios.get(`${URL}/${endpoint}`, { params: { _token, ...data } });
    } else if (verb === 'post') {
      link = axios.post(`${URL}/${endpoint}`, { _token, ...data });
    } else if (verb === 'patch') {
      link = axios.patch(`${URL}/${endpoint}`, { _token, ...data });
    }

    try {
      return (await link).data;
    } catch (error) {
      console.error('API Error:', error.response);
      let message = error.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async getCompanies(search) {
    let res = await this.request(`companies`, { search });
    return res.companies;
  }

  static async getAllJobs() {
    let res = await this.request(`jobs`);
    return res.jobs;
  }

  static async register(data) {
    let res = await this.request(`users`, data, 'post');
    console.log('REG HIT');
    return res.token;
  }

  static async login(data) {
    let res = await this.request(`login`, data, 'post');
    console.log('LOGIN HIT');
    return res.token;
  }

  static async getCurrentUser(username) {
    let res = await this.request(`users/${username}`);
    console.log(`GET USER HIT`);
    return res.user;
  }

  static async saveUserProfile(username, data) {
    let res = await this.request(`users/${username}`, data, 'patch');
    console.log(`SAVE USER HIT`);
    return res.user;
  }

  static async getJobs(search) {
    let res = await this.request(`jobs`, { search });
    return res.jobs;
  }

  static async applyToJob(id) {
    let res = await this.request(`jobs/${id}/apply`, {}, 'post');
    console.log(`APPLY TO JOB HIT`);
    return res.message;
  }
}

export default JoblyAPI;
