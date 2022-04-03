<script>
  import { deleteAccountById } from '../utils/service';
  import Toast from '../components/Toast.svelte';

  export const show = () => {
    shown = true;
  };

  export const hide = () => {
    shown = false;
  };

  export let account;

  let shown = false;

  const deleteAccount = async () => {
    deleteAccountById(account.id);
    hide();
  };
</script>

{#if shown}
  <div class="fixed w-full h-full bg-black/60 top-0 left-0 z-50">
    <div
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
      font-normal
    dark:bg-neutral-900 bg-gray-200 drop-shadow-sm dark:text-white z-50 p-5 rounded-lg border-none"
    >
      Are you sure you want to delete this account?
      <div class="mt-5 flex ">
        <button
          on:click={() => deleteAccount()}
          class="bg-green-700 p-1 pl-2 pr-2 mr-2 rounded text-white font-semibold"
          >YES</button
        >
        <button
          class="bg-rose-700 p-1 pl-2 pr-2 text-white  rounded font-semibold"
          on:click={() => hide()}>NO</button
        >
      </div>
    </div>
  </div>
{/if}
<Toast />
