import axios from 'axios';
import { BASE_TOKEN } from './App'; // destructing {} fixes our "JoblyAPI token null"

/**
 * Similar to how the model classes in /backend interact with the database, but we don't have SQL statements everywhere
 */

class JoblyAPI {
  static async request(endpoint, data = {}, verb = 'get') {
    console.log(`Backend using:`, process.env.URL);
    let _token = localStorage.getItem(BASE_TOKEN);

    // console.log('API Call:', endpoint, data, verb);

    // include the token in the request
    let link;

    if (verb === 'get') {
      link = axios.get(`${process.env.URL}/${endpoint}`, { params: { _token, ...data } });
    } else if (verb === 'post') {
      link = axios.post(`${process.env.URL}/${endpoint}`, { _token, ...data });
    } else if (verb === 'patch') {
      link = axios.patch(`${process.env.URL}/${endpoint}`, { _token, ...data });
    }

    try {
      return (await link).data;
    } catch (error) {
      // console.error('API Error:', error.response);
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
    return res.token;
  }

  static async login(data) {
    let res = await this.request(`login`, data, 'post');
    return res.token;
  }

  static async getCurrentUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  static async saveUserProfile(username, data) {
    let res = await this.request(`users/${username}`, data, 'patch');
    return res.user;
  }

  static async getJobs(search) {
    let res = await this.request(`jobs`, { search });
    return res.jobs;
  }

  static async applyToJob(id) {
    let res = await this.request(`jobs/${id}/apply`, {}, 'post');
    return res.message;
  }
}

export default JoblyAPI;
