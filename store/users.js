export const state = () => ({
    me: null,
    followerList: [],
    followingList: [],
    hasMoreFollower: true,
    hasMoreFollowing: true

});

const totalFollowers = 8;
const totalFollowings = 6;
const limit = 3;
export const mutations = {
    setMe(state, payload) {
        state.me = payload;
    },
    onChangeNickname({commit}, payload) {
        state.me.nickname = payload.nickname;
    },
    addFollowing(state, payload) {
        state.followerList.push(payload);
    },
    addFollower(state, payload) {
        state.followingList.push(payload);
    },
    removeFollowing(state, payload) {
        const index = state.followingList.findIndex(v => v.id === payload.id);
        state.followerList.splice(index, 1);
    },
    removeFollower(state, payload) {
        const index = state.followerList.findIndex(v => v.id === payload.id);
        state.followerList.splice(index, 1);
    },
    loadFollowings(state) {
        const diff = totalFollowings - state.followingList.length;
        const fakeUsers = Array(diff > limit ? limit : diff).fill().map(v => ({
            id: Math.random().toString(),
            nickname: Math.floor(Math.random() * 1000)
        }));
        state.followingList = state.followingList.concat(fakeUsers);
        state.hasMoreFollowing = fakeUsers.length === limit;
    },
    loadFollowers(state) {
        const diff = totalFollowers - state.followerList.length;
        const fakeUsers = Array(diff > limit ? limit : diff).fill().map(v => ({
            id: Math.random().toString(),
            nickname: Math.floor(Math.random() * 1000)
        }));
        state.followerList = state.followerList.concat(fakeUsers);
        state.hasMoreFollower = fakeUsers.length === limit;
    }
};

export const actions = {
    signUp({commit, state}, payload) {
        //서버에 회원가입 요청을 보내는 부분
        commit('setMe', payload);
    },
    logIn({commit}, payload) {
        commit('setMe', payload);
    },
    logOut({commit}, payload) {
        commit('setMe', null);
    },
    onChangeNickname({commit}, payload) {
        commit('changeNickname', payload);
    },
    addFollowing() {
        commit('addFollowing', payload);
    },
    addFollower() {
        commit('addFollower', payload);
    },
    removeFollowing() {
        commit('removeFollowing', payload);
    },
    removeFollower() {
        commit('removeFollower', payload);
    },
    loadFollowers({commit, state}, payload) {
        if (state.hasMoreFollower) {

            commit('loadFollowers');
        }
    },
    loadFollowings({commit}, payload) {
        if (state.hasMoreFollowing) {
            commit('loadFollowings');
        }
    }
};