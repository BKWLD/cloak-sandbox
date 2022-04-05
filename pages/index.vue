<!-- Demo homepage -->

<template lang='pug'>

.page
	example(:name='pokemon.name')

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script lang='coffee'>
export default

	# Get a random pokemon
	asyncData: ({ app, params, $axios }) ->
		num = Math.round Math.random() * 100
		endpoint = 'https://pokeapi.co/api/v2/pokemon'
		{ data: pokemon } = await $axios.get "#{endpoint}/#{num}"
		return { pokemon }

</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus' scoped>

</style>
