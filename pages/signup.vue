<template>
    <div>
        <v-container>
            <v-card>
                <v-container>
                    <v-subheader>회원가입</v-subheader>
                    <v-form>
                        <v-text-field label="이메일" type="email" required/>
                        <v-text-field label="비밀번호" type="password" required/>
                        <v-text-field label="비밀번호 확인" type="password" required/>
                        <v-text-field label="닉네임" type="nickname" required/>
                        <v-checkbox required label="열심히 개발할 것을 나 자신과 약속합니다"/>
                        <v-btn color="green" type="submit">가입하기</v-btn>
                    </v-form>
                </v-container>
            </v-card>
        </v-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: 'Nuxt.js'
            }
        }
    }
</script>