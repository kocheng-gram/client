<template>
    <div>
        <Navbar @openUpload="openDialog"  ></Navbar>
        <v-layout>
            <v-flex>
                <Explore @catApp="viewDetail" :cats="cats"></Explore>
            </v-flex>
            <v-flex v-if="viewCat" xs4>
                <ViewImage @closeView="viewCat=''" :viewCat="viewCat" ></ViewImage>
            </v-flex>
        </v-layout>
        <Upload :dialog="dialog" @closeUpload="dialog = false" @fetch="fetchCats" ></Upload>
    </div>
</template>

<script>
import Navbar from './components/navbar'
import Explore from './components/explore'
import ViewImage from './components/view-image'
import Upload from './components/upload.vue'
import axios from 'axios'
export default {
    data() {
        return {
            message: 'Kocheng-Gram',
            viewCat: '',
            dialog: false,
            cats: []
        }
    },
    components: {
        Navbar,
        Explore,
        ViewImage,
        Upload
    },
    methods: {
        viewDetail(payload){
            this.viewCat = payload
        },
        openDialog() {
            this.dialog = true
        },
        fetchCats() {
            axios({ 
                method: 'GET',
                url: 'http://35.198.255.105/post',
            })
            .then(({data}) => {
                this.cats = data
            })
            .catch(err => {console.log(err)})
        }
    },
    created() {
        axios({
            method: 'get',
            url: 'http://35.198.255.105/post'
        })
        .then(({ data }) => {
            this.cats = data
        })
    }
}
</script>

<style>

</style>
