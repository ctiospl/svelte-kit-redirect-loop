<script>
	export let data;
</script>

<form method="POST">
	{data.id}

	<input value={parseInt(data.id) + 1} name="nextId" />
	<button type="submit">Save</button>
</form>
