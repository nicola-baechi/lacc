<script>
  import { onMount } from 'svelte';
  import Card from '../components/Card.svelte';
  import { accounts as accountStore } from '../utils/stores';
  import { updateAccounts } from '../utils/service';

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

  $: console.log(accounts);

  onMount(async () => {
    updateAccounts();

    accountStore.subscribe((value) => {
      accounts = value;
      console.log(value);
    });
  });
</script>

<i data-feather="eye" />
<div
  class="dark dark:bg-neutral-900 justify-items-center grid 
    grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4"
>
  {#each accounts as account}
    <Card {account} color={colors[Math.floor(Math.random() * colors.length)]} />
  {:else}
    <p>loading...</p>
  {/each}
</div>
