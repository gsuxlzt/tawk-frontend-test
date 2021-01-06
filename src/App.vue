<template>
	<div>
        <section>
            <tawk-header></tawk-header>
        </section>
        <router-view />
	</div>
</template>

<script>
import Header from './components/Header.vue';

export default {
	components:{
		'tawk-header': Header,
    },
}
</script>

<style lang="scss">
    @import 'scss/main.scss';
    @import 'scss/_variables.scss';

    body {
        font-family: 'Lato';
        color: $text-black;
    }
</style>