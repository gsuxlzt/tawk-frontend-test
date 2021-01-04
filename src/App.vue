<template>
	<div>
		<tawk-header></tawk-header>
        TEST
	</div>
</template>

<script>
import Header from './components/Header.vue'
import axios from 'axios';

export default {
	components:{
		'tawk-header': Header
    },
    async mounted() {
        const data = await axios.get('/api/categories');
        console.log(data);
    }
}
</script>

<style lang="scss" scoped>
	@import 'scss/main.scss';
</style>