<template>
	<div id="header-wrapper">
		<div id="header-text">
			<h1>Knowledge base doesn't have to be boring</h1>
			<h3>Everything you need to manage your messaging</h3>
		</div>
        <div>
            <search-component />
        </div>
	</div>
</template>

<script>
import Search from './Search.vue';
export default {
    components: {
        'search-component': Search
    }
}
</script>

<style lang="scss" scoped>
   
	@import '../scss/_variables.scss';
    #header-wrapper {
        background: white;
        width: 100%;
        #header-text{
            margin: auto;
            text-align: center;
            font-family: $font-family;
            color: $text-black;
            padding: 20px;
            max-width: 780px;

            h1{
                font-style: normal;
                font-weight: bold;
                font-size: 34px;
                line-height: 41px;
            }

            h3{
                font-style: normal;
                font-weight: normal;
                font-size: 20px;
                line-height: 24px;
            }
        }
    }


</style>