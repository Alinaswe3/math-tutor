<script lang="ts">
    import {page} from "$app/stores"

    console.log($page);
</script>

<main class="w-full min-h-fit h-screen flex justify-center items-center flex-col gap-12">
    <h1 class="text-7xl text-center">
        <span class="text-6xl">End of paper</span><br/>
        <span class="font-semibold">Thanks for revising</span><br/>
        <span class="text-5xl ">{$page.params.paper.replaceAll("-", " ").toUpperCase()}</span>
    </h1>
    <a href="/menu" class="btn btn-neutral btn-lg uppercase tracking-wider font-bold text-primary text-3xl">revise new paper</a>
</main>