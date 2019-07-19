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
    props: ['cats'],
    data(){
        return {
            
        }
    },
    methods : {
        addApp(payload) {
            console.log(payload.image, 'di explore')
            this.$emit('catApp', payload)
        },
        
    },
    components: {
        CardImage
    }
}
</script>

<style>

</style>
