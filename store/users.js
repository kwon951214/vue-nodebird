export const state = () => ({
    me: null,
    followerList: [{
        id: 1,
        nickname: '나야나'
    }, {
        id: 2,
        nickname: 'Gwon'
    },{
        id: 3,
        nickname: 'GM'
    }],
    followingList: [{

    }]
});

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
    }
};