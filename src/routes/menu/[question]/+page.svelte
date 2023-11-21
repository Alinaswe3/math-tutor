<script lang="ts">
    import Icon from "@iconify/svelte";
    import {fly} from 'svelte/transition';

    let isAnswerShown: boolean = false;
</script>

<section class="grid grid-cols-3 gap-x-10 gap-y-6 pt-10">
    <h1 class="font-bold tracking-wide text-4xl col-span-2 justify-self-start">ECZ Math paper</h1>
    <button class="text-lg btn btn-neutral w-max justify-self-end text-primary">
        <span>Next</span>
        <Icon icon="ph:arrow-right-bold"/>
    </button>
    <div class="flex justify-center items-center text-2xl border-2 border-secondary text-secondary col-start-1 w-10 h-10 rounded-full bg-accent">
        <span>1</span>
    </div>
    <div class="col-start-2 flex flex-col gap-6">
        <p class="text-3xl ">Prove that 1 + 1 = 2. Make sure to <strong>show your working</strong></p>
        {#if isAnswerShown}
            <div class="text-2xl" transition:fly={{x: 160, duration: 1200}}>
                <p>
                    <span>

                    <strong>Kaya</strong> how you do it boi,
                    </span><br/>
                    <span>Ndiwe wo limba navi pawa,</span><br/>
                    <span>Try again, <strong>Try again!</strong></span>
                </p>
                <!-- Answer area -->
            </div>
        {/if}
        <button on:click={() => isAnswerShown = !isAnswerShown} class="text-xl uppercase self-start btn btn-neutral text-primary">
            {#if isAnswerShown}
                <span>Hide answer</span>
            {:else}
                <span>View answer</span>
            {/if}
        </button>
    </div>
    <div class="col-start-2">
        <div>
            <!-- Chat area -->
        </div>
        <form>
            <div>
                <label for="query" hidden>Type your question</label>
                <input id="query" type="text"/>
            </div>
            <button type="submit">
                <Icon icon="typcn:arrow-up-outline"/>
            </button>
        </form>
    </div>
</section>

<style>
    section {
        display: grid;
        grid-template-columns: min-content 1fr min-content;
    }

</style>