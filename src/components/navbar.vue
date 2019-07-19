<template>
    <div id="navbar">
        <v-toolbar color="amber darken-2 white--text" light>
        <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
        <v-toolbar-title id="title">
            <v-icon x-large color="white">sentiment_satisfied</v-icon>
            Kocheng-Gram
            </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn color="white" class="menu" flat>Explore</v-btn>
            <v-btn color="white" class="menu" flat @click="$emit('openUpload')">Upload</v-btn>
            <!-- <v-btn flat>Search</v-btn> -->
        </v-toolbar-items>
        </v-toolbar>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Indie+Flower|Roboto&display=swap');
    #title {
        font-family: 'Indie Flower', cursive;
        font-size: 26px;
        
    }

    .menu {
        font-family: 'Roboto', sans-serif;
    }
</style>
