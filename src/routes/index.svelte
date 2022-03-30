<script>
  import { onMount } from 'svelte';
  import Card from '../components/Card.svelte';
  
  let accounts = [];
  const colors = [
    'text-emerald-600',
    'text-lime-600',
    'text-teal-600',
    'text-blue-600',
    'text-indigo-600',
    'text-violet-600',
    'text-fuchsia-600',
    'text-pink-600',
    'text-rose-600',
  ];


  onMount(async () => {
    const res = await fetch('http://localhost:8000/accounts');
    accounts = await res.json();
  });
</script>
<i data-feather="eye"></i>
<div
  class="dark dark:bg-neutral-900 justify-items-center grid 
    grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4"
>
  {#each accounts as account}
   <Card account={account} color={colors[Math.floor(Math.random() * colors.length)]}/>
  {:else}
    <p>loading...</p>
  {/each}
</div>
