<template>
    <v-dialog v-model="dialog" persistent max-width="400px">
        <v-card>
            <v-card-title>
                <span class="headline">Upload File</span>
            </v-card-title>
            <v-card-text>
                <v-container grid-list-md>
                    <v-layout wrap>
                        <v-flex xs12 sm12 md12>
                            <v-text-field v-model="caption" label="Caption" required></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm12 md12 class="text-xs-center text-sm-center text-md-center text-lg-center">
                            <img :src="imageUrl" height="200" width="200" style="object-fit: cover;" v-if="imageUrl">
                            <v-text-field label="Select Image" @click="pickFile" v-model="imageName" prepend-icon="attach_file"></v-text-field>
                            <input type="file" style="display: none" ref="image" accept="image/*" @change="onFilePicked">
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-layout column justify-center>
                    <v-flex xs12>
                        <v-layout v-if="score > 0.9" column align-center style="margin-bottom: 20px;">
                            <p style="color: green;">Score : {{Math.floor(score * 10)}} </p>
                            <p>It's A Cat ! Go ahead and upload your image :)</p>
                        </v-layout>
                        <v-layout v-if="score < 0.9 && score > 0" column align-center style="margin-bottom: 20px;">
                            <p style="color: red">Score : {{Math.floor(score * 10)}} </p>
                            <p>Sorry it's not cat enough :(</p>
                        </v-layout>
                        <v-btn block @click="upload()" small color="black" dark v-if="score > 0.9"> Upload </v-btn>
                        <v-btn block @click="validate()" small color="black" dark v-if="score < 0.9"> Validate </v-btn>
                    </v-flex>
                    <v-flex xs12 class="mt-1">
                        <v-btn block @click="$emit('closeUpload')" small color="red" dark> Cancel </v-btn>
                    </v-flex>
                </v-layout>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import axios from 'axios';

export default {
    props: ['dialog'],
    data() {
        return {
            imageName: '',
            imageUrl: '',
            imageFile: '',
            avatar : '',
            avatar : null,
            score: 0,
            caption: ''
        }
    },
    methods: {
        validate() {
            let formData = new FormData();
            formData.append('caption', this.caption)
            formData.append('image', this.avatar)
            axios({
                method: 'POST',
                url: 'http://localhost:3000/post/validate',
                data : formData    
            })
            .then( ({data}) => {
                console.log(data)
                this.score = data.score
            })
            .catch( err =>{
                if(err.response.data.message === "Cannot read property 'cloudStoragePublicUrl' of undefined"){
                        this.errMesssage = "You Need Upload Photo For Registration"
                } else {
                    this.errMesssage = err.response.data.message;
                }
            })  
        },

        upload() {
            let formData = new FormData();
            formData.append('caption', this.caption)
            formData.append('image', this.avatar)
            axios({
                method: 'POST',
                url: 'http://localhost:3000/post',
                data : formData    
            })
            .then( ({data}) => {
                this.$emit('closeUpload')
                this.$emit('fetch')
            })
            .catch( err =>{
                if(err.response.data.message === "Cannot read property 'cloudStoragePublicUrl' of undefined"){
                        this.errMesssage = "You Need Upload Photo For Registration"
                } else {
                    this.errMesssage = err.response.data.message;
                }
            })
        },

        pickFile() {
            this.$refs.image.click();
        },

        onFilePicked(e) {
        this.score = 0
        this.avatar = e.target.files[0]
        const files = e.target.files
            if(files[0] !== undefined) {
                    this.imageName = files[0].name
                    if(this.imageName.lastIndexOf('.') <= 0) {
                        return
                    }
                    const fr = new FileReader ()
                    fr.readAsDataURL(files[0])
                    fr.addEventListener('load', () => {
                        this.imageUrl = fr.result
                        this.imageFile = files[0] // this is an image file that can be sent to server...
                    })
                } else {
                    this.imageName = ''
                    this.imageFile = ''
                    this.imageUrl = ''
                }
        }
    }
};
</script>

<style scoped>
    p {
        margin: 0;
    }
</style>
