<script lang='ts'>
    import { onMount } from "svelte";

    let data: any;

    onMount(() => {
        data = getData()
    });

    async function getData() {
        const url = `/api/loadStaging`
		const response = await fetch(url);
		const data = await response.json();
        return data
	}

</script>

<h1>Welcome to SvelteKit</h1>
<div>
    <h2>Staging</h2>
    <p>{JSON.stringify(data)}</p>
</div>