<template>
    <v-form ref="form" v-model="valid" style="position: relative" @submit.prevent="onsubmitForm">
        <v-textarea
            v-model="content"
            filled
            label="댓글 달기"
            :hide-details="hideDetails"
            :success="success"
            :success-messages="successMessages"
            @input="onChangeTextarea"
            />
        <v-btn color="green" dark absolute top right type="submit">삐약</v-btn>
    </v-form>
</template>

<script>

</script>
<style>

</style>