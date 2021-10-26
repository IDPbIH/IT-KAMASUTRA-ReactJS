import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { "API-KEY": "22b94168-25c1-42a1-b082-01d927be30be" }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        });
    },
    follow(userid) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userid}`)
    },
    unfollow(userid) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userid}`)
    }
}