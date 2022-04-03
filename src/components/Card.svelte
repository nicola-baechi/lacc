<script>
  import Badge from '../components/Badge.svelte';
  import Dialog from '../components/Dialog.svelte';

  import { EyeIcon } from 'svelte-feather-icons';
  import { EyeOffIcon } from 'svelte-feather-icons';
  import { Edit3Icon } from 'svelte-feather-icons';
  import { XIcon } from 'svelte-feather-icons';

  export let account;
  export let color;

  let deleteDialog;
  let password = false;
  let passwordCensor =
    'text-transparent dark:text-transparent text-shadow-2xl dark:text-shadow-2xl';

</script>

<Dialog bind:this={deleteDialog} account={account}/>
<div
  class="flex flex-col p-10 rounded-lg dark:bg-neutral-800 border-none 
      bg-gray-200 drop-shadow-lg min-w-fit h-80 m-5"
>
  <div class="flex justify-end">
    <button class="w-fit p-1 pl-1.5 pr-1.5 rounded hover:bg-gray-400/20">
      <Edit3Icon size="20" class="dark:text-white" />
    </button>
    <div class="w-1" />
    <button
      on:click={() => deleteDialog.show()}
      class="w-fit p-1 rounded hover:bg-gray-400/20"
    >
      <XIcon size="24" class=" dark:text-white" />
    </button>
  </div>
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
  <div class="flex items-center justify-between mb-2">
    <div class=" {!password ? passwordCensor : 'dark:text-gray-400'}">
      {account.password}
    </div>
    <div class="ml-20">
      <button
        on:click={() => (password = !password)}
        class="w-fit p-1 rounded hover:bg-gray-400/20"
      >
        {#if password}
          <EyeOffIcon size="20" class=" dark:text-gray-400" />
        {:else}
          <EyeIcon size="20" class=" dark:text-gray-400" />
        {/if}
      </button>
    </div>
  </div>
  <span class="uppercase font-medium dark:text-white">email</span>
  <p class="dark:text-gray-400">{account.email}</p>
</div>
