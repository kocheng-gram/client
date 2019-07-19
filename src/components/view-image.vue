<template>
    <div id="viewImage">
        <v-flex ma-2>
            <v-card>
            <v-container>
                <v-img 
                    :src="viewCat.image"
                    aspect-ratio="1"
                ></v-img>
        
                <v-card-title primary-title>
                    <div>
                    {{ viewCat.caption }}
                    </div>
                </v-card-title>
        
                <v-card-actions>
                    <v-btn color="orange">Share</v-btn>
                    <v-btn @click="$emit('closeView')" color="red">Close</v-btn>
                </v-card-actions>

            </v-container>
            </v-card>
        </v-flex>
    </div>
</template>

<script>
export default {
    data(){
        return {
            image: '',
            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere, risus ac mollis blandit, neque diam faucibus orci, nec sodales turpis mi non quam. Ut volutpat ac arcu sit amet laoreet.'
        }
    },
    methods : {
        
    },
    props : ['viewCat']
}
</script>

<style>

</style>
