<template>
    <div>test</div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'TestComponent',
    computed: {
        test(): string {
            const unused = 1;
            return 'test';
        }
    }
})
</script>
