<template>
    <div>
        HOME
    </div>
</template>

<script>
export default {
    name: 'Home',
    async mounted() {
        const { data } = await this.$http('/api/categories');
        console.log(data);
    }
}
</script>