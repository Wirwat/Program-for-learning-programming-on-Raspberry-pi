<script setup>
defineProps({
    msg: {
        type: String,
        required: true
    }
})
</script>

<template>
    <nav class="navbar navbar-light t-main ">
        <div class="container ">

          
     
                <a class="navbar-brand text-white " href="#">  
                    <h3>{{ msg }} </h3></a>
           

            <img src="../assets/img/KMITL.png" class="kmitl" />
        </div>
    </nav>


</template>

<style scoped>
.kmitl {
    opacity: 8%;
    height: 30px;

    padding-right: 10%;
}
</style>
