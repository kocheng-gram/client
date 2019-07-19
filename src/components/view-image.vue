<template>
    <div id="viewImage">
        <v-flex ma-2>
            <v-card>
                    <v-layout align-end column>
                        <v-btn @click="$emit('closeView')" flat icon color="grey" style="text-align: right;">
                            <v-icon>close</v-icon>
                        </v-btn>
                    </v-layout>
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
                        <v-btn color="orange white--text">Share</v-btn>
                    </v-card-actions>
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
