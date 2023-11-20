<script lang="ts">

    import type {Paper} from "$lib/utils/dataTypes";
    import Icon from '@iconify/svelte';
    export let paper: Paper;
</script>

<div class="shadow-sm shadow-secondary flex gap-4 justify-between w-full rounded-xl bg-accent text-white ">
    <p class="flex flex-col gap-1 px-4 py-2">
        <span class="text-xl text-primary">
            {paper.paperName}
        </span>
        <span class="text-secondary">
            {paper.numQuestions} Questions
        </span>
    </p>
    <a href={`menu/${paper.slug}`} class="rounded-r-xl text-lg font-semibold tracking-wider px-4 py-2 bg-neutral flex hover:bg-primary hover:text-neutral transition-all duration-300 gap-1 justify-center items-center">
        <span>Revise</span>
        <Icon  icon="ph:arrow-right-bold"/>
    </a>
</div>