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
    <h1>Testable CT API Endpoints:</h1>
    <ul>
        <li>
            <h2>Location Request</h2>
            <p id='call'>https://bpil.vercel.app/api/locationRequest</p>
            <p id='method'>Method: GET</p>
            <p id='params'>Params: OrderID</p>
            <p id='example'>Example: https://bpil.vercel.app/api/locationRequest?OrderID="6"</p>
        </li>
</div>