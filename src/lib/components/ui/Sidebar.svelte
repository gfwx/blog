<script lang="ts">
	import type { Tables } from '$lib/database.types';
	type Article = Tables<'articles'>;

	type GroupedArticles = {
		[year: string]: {
			[month: string]: Article[];
		};
	};
	export let blogItems: Article[] = []; // Array<Article>

	function groupByYearMonth(items: Article[]): GroupedArticles {
		const grouped: GroupedArticles = {};

		for (const item of items) {
			const date = new Date(item.created_at);
			if (isNaN(date.getTime())) continue; // skip invalid dates

			const year = date.getFullYear().toString();
			const month = date.toLocaleString('default', { month: 'long' });

			if (!grouped[year]) grouped[year] = {};
			if (!grouped[year][month]) grouped[year][month] = [];

			grouped[year][month].push(item);
		}

		return grouped;
	}

	let search = '';

	$: filtered = blogItems
		.filter(
			(item) =>
				item.title.toLowerCase().includes(search.toLowerCase()) ||
				item.caption.toLowerCase().includes(search.toLowerCase())
		)
		.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

	$: grouped = groupByYearMonth(filtered);
</script>

<aside
	class="w-full md:w-72 shrink-0 md:block hidden md:sticky md:top-0 md:self-start md:h-screen bg-base-100 md:border-l-[0.5px] border-t-0 relative"
>
	<div class="pt-4 px-4">
		<input
			type="text"
			class="input input-bordered w-full"
			placeholder="Search..."
			bind:value={search}
		/>
	</div>

	{#if Object.entries(grouped).length == 0}
		<div class="mb-2 pt-4 flex justify-center items-center px-4">
			<p>No results found</p>
		</div>
	{:else}
		{#each Object.entries(grouped) as [year, months]}
			<div class="mb-2 p-4">
				<h2 class="text-md font-bold font-serif">{year}</h2>
				{#each Object.entries(months) as [month, monthItems]}
					<div class="ml-2 mb-1">
						<h3 class="text-sm font-semibold font-serif">{month}</h3>
						<ul class="ml-2">
							{#each monthItems as item}
								<li class="list-none">
									<a href={`/blog/${item.slug}`} class="text-sm link link-hover"> {item.title}</a>
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		{/each}
	{/if}
</aside>
