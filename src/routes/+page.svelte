<script lang='ts'>
    import { onMount } from "svelte";

    let data: any;

    onMount(async() => {
        data = await getData()
    });

    async function getData() {
        const url = `/api/loadStaging`
		const response = await fetch(url);
		const data = await response.json();
        return data
	}

</script>
<div>
    <h2>Data</h2>
    <p>{JSON.stringify(data)}</p>
</div>