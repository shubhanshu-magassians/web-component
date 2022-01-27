<template>
    <div style="text-align:center">
        <h1><b>{{title}}</b></h1>
        <p>{{bio}}</p>
    </div>
</template>

<script>

export default{
    props:{
        title: {
            type: String,
            default: ""
        },
        bio: {
            type:String, 
            default:""
            }
    }
};
</script>
