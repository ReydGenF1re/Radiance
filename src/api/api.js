import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "6bde9a5e-9cf6-43d0-beb6-9df8c852b56c",

    }
});
export const friendsAPI = {
    getFriends: (currentPage = 1, pageSize = 6) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    handleButton: (action, user) => {
        // eslint-disable-next-line default-case
        switch (action) {
            case 'FOLLOW':
                return instance.post(`follow/${user.id}`).then(response => response.data);
            case 'UNFOLLOW':
                return instance.delete(`follow/${user.id}`).then(response => response.data);

        }
    },
    getProfile: (userID) => {
        return profileAPI.getProfile(userID)
    },
}
export const profileAPI = {

    getProfile: (userID) => {
        return instance.get(`profile/${userID}`).then(response => response.data)
    },
    getStatus:(userID) => {
        return instance.get(`profile/status/${userID}`).then(response => response.data)
    },
    updateStatus:(status) => {
        return instance.put(`profile/status`,{status}).then(response => response.data)
    },
    savePhoto:(photoFile) => {
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put(`profile/photo`,formData,{headers:{"Content-Type":"multipart/form-data"}}).then(response => response.data)

    }

}
export const authAPI = {
    authMe: () => {
        return instance.get(`auth/me`,).then(response => response.data)
    },
    login: (email,password,rememberMe = false) => {
        return instance.post('auth/login', {email,password,rememberMe}).then(response => response.data)
    },
    logout: () => {
        return instance.delete('auth/login').then(response => response.data)
    }
}
