<template>
    <div id="explore">
        <v-layout>
        <v-flex xs12 ma-2>
            <v-card>
            <v-container grid-list-sm fluid>
                <v-layout row wrap>
                    <CardImage aspect-ratio="2" @catExplore="addApp" v-for="cat in cats" :key="cat.id" :cat="cat" ></CardImage>
                </v-layout> 
            </v-container>
            </v-card>
        </v-flex>
        </v-layout>
    </div>
</template>
<script>
import axios from 'axios'
import CardImage from './card-image.vue'
export default {
    data(){
        return {
            cats: []
        }
    },
    methods : {
        addApp(payload) {
            console.log(payload.image, 'di explore')
            this.$emit('catApp', payload)
        }
    },
    created() {
        axios({
            method: 'get',
            url: 'http://localhost:3000/posts'
        })
        .then(({ data }) => {
            this.cats = data
        })
    },
    components: {
        CardImage
    }
}
</script>

<style>

</style>
