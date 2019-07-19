<template>
        <v-flex xs3 d-flex >
            <v-card flat tile ma-1 class="d-flex">
            <v-img @click="catCardImage" :src="cat.image" aspect-ratio="1" class="grey lighten-2">
                <template v-slot:placeholder>
                <v-layout fill-height align-center justify-center ma-1 >
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-layout>
                </template>
            </v-img>
            </v-card>     
        </v-flex>
</template>

<script>
export default {
    name:'card-image',
    props: ['cat'],
    created(){
        console.log(this.cat.image)
    },
    methods: {
        catCardImage(){
            this.$emit('catExplore', this.cat)
        }
    }
}
</script>

<style>

</style>
