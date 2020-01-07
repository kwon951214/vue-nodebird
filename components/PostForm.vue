<template>
    <v-card>
        <v-container>
            <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
                <v-textarea v-model="content"
                            autlined auto-grow clearable label="어떤 일이 있었나요?"
                            :hide-details="hide-details"
                            :success-messages="successMessages"
                            :success="success"
                            :rules="[v=>!!v.trim() ||'내용을 입력하세요']"
                            @input="onChangeTextarea"/>
            </v-form>
            <v-btn type="submit" color="green" absolute right>짹짹</v-btn>
            <v-btn>이미지 업로드</v-btn>
        </v-container>
    </v-card>
</template>
<script>
    import { mapState } from 'vuex';

    export default {
        data() {
            return {
                hideDetails: false,
                successMessages: '',
                success: false
            }
        },
        computed: {
            ...mapState(['users/me'])
        },
        methods: {
            onChangeTextarea() {
                this.hideDetails = true;
                this.success = false;
                this.successMessages = '';
            },
            onSubmitForm() {
                if (this.$refs.form.validate()) {
                    this.$store.dispatch('posts/add', {
                        content: this.content,
                        user: {
                            nickname: this.me.nickname
                        },
                        comments: [],
                        Images: [],
                        id: Date.now(),
                        createAt: Date.now()
                    })
                        .then(() => {
                            this.hideDetails = false;
                            this.success = true;
                            this.successMessages = '게시글 등록 성공 !!';
                        })
                        .catch(() => {

                        })
                }
            }
        }
    }
</script>
<style></style>