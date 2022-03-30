<script>
  import Badge from '../components/Badge.svelte';
  import { EyeIcon } from 'svelte-feather-icons';

  export let account;
  export let color;
</script>

<div
  class="flex flex-col border-8 p-10 rounded-lg dark:bg-neutral-800 border-none 
      bg-gray-200 drop-shadow-lg min-w-fit h-72 m-5"
>
  {#if account.main}
    <Badge text="main" color="bg-red-600" />
  {/if}
  <div class="flex mb-2 w-72 items-center">
    <div class="text-xl font-semibold uppercase {color}">
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
