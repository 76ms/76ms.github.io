<template>
    <div>
        <router-link
            v-for="(tag, index) in tags"
            :to="'/tag/' + $hyphenate(tag)"
            :key="index"
            class="cgx-bg-light-grey tag p-1 px-2 rounded-pill me-2 mb-2 d-inline-block"
        >
            {{ tag }}
        </router-link>
    </div>
</template>

<script>
export default {
	props: {
		tags: {
			type: Array,
			required: true
		}
	}
}
</script>