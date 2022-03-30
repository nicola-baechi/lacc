<script>

    export let text;
    export let color;
</script>

<div
  class="{color} text-white border-none text-xs
    tracking-widest font-inter w-fit rounded-sm pl-1 pr-1 p-0.5 border-gray-500 font-extrabold"
>
  {text.toUpperCase()}
</div>
