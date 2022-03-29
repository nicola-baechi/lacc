<script>
  import { onMount } from 'svelte';

  let accounts = [];

  const colors = ['text-lime-600', 'text-teal-600', 'text-emerald-600'];

  onMount(async () => {
    const res = await fetch('http://localhost:8000/accounts');
    accounts = await res.json();
  });
</script>

<div
  class="dark dark:bg-gray-800 justify-items-center grid 
    grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4"
>
  {#each accounts as account, i}
    <div
      class="flex flex-col border-8 p-10 rounded-lg dark:bg-gray-700 dark:border-slate-800 border-none 
            bg-violet-100 drop-shadow-lg min-w-fit h-72 m-5"
    >
      <div class="flex flex-col items-start mb-2 w-80">
        {#if account.main}
          <div
            class="bg-red-600 text-white border-none text-sm
               tracking-widest font-inter rounded-sm pl-1 pr-1 p-0.5 border-gray-500 font-extrabold"
          >
            MAIN
          </div>
        {/if}
        <div class="text-xl font-semibold uppercase {colors[i]}">
          {account.summonername}
        </div>
      </div>
      <span class="uppercase font-medium dark:text-white">username</span>
      <p class="mb-2 dark:text-gray-400">{account.username}</p>
      <span class="uppercase font-medium dark:text-white">password</span>
      <p class="mb-2 dark:text-gray-400">{account.password}</p>
      <span class="uppercase font-medium dark:text-white">email</span>
      <p class="dark:text-gray-400">{account.email}</p>
    </div>
  {:else}
    <p>loading...</p>
  {/each}
</div>
