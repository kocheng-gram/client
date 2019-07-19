<template>
    <div>
        <Navbar></Navbar>
        <v-layout>
            <v-flex>
                <Explore @catApp="viewDetail"></Explore>
            </v-flex>
            <v-flex v-if="viewCat" xs4>
                <ViewImage @closeView="viewCat=''" :viewCat="viewCat" ></ViewImage>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import Navbar from './components/navbar'
import Explore from './components/explore'
import ViewImage from './components/view-image'
export default {
    data() {
        return {
            message: 'Kocheng-Gram',
            viewCat: ''
        }
    },
    components: {
        Navbar,
        Explore,
        ViewImage
    },
    methods: {
        viewDetail(payload){
            this.viewCat = payload
        }
    }
}
</script>

<style>

</style>
