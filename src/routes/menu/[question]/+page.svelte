<script lang="ts">
    import Icon from "@iconify/svelte";
    import {fly} from 'svelte/transition';
    import ChatBubble from "$lib/components/ChatBubble.svelte";

    let isAnswerShown: boolean = false;

    const studentAvatar: string = "https://www.alinaswecodes.com/images/alinaswe.webp";
    const aiAvatar: string = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D";
</script>

<section class="grid grid-cols-3 md:grid-cols-2 gap-x-10 md:gap-x-5 gap-y-6 py-8">
    <div class="col-span-full flex justify-between items-start">

    <h1 class="font-bold tracking-wide text-4xl">ECZ Math paper</h1>
    <button class="text-lg btn btn-neutral w-max text-primary">
        <span>Next</span>
        <Icon icon="ph:arrow-right-bold"/>
    </button>
    </div>
    <div class="flex justify-center items-center text-2xl border-2 border-secondary text-secondary col-start-1 w-10 h-10 rounded-full bg-accent">
        <span>1</span>
    </div>
    <div class="col-start-2 flex flex-col gap-6 mb-6">
        <p class="text-3xl">Prove that 1 + 1 = 2. Make sure to <strong>show your working</strong></p>
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
    <div class="col-start-2 md:col-start-1 md:col-span-full grid grid-rows-[1fr_min-content] gap-y-4 p-3 w-full border-2 border-secondary rounded-lg min-h-[12rem] h-[55vh] bg-accent">
        <div class="overflow-y-auto h-full px-4">
            <ChatBubble justify="end" avatar={studentAvatar} text="How do you prove 1 + 1 = 2 ninsh?" />
            <ChatBubble justify="start" avatar={aiAvatar} text="Hmmm, try to click 'view answer' and see the working" />
            <ChatBubble justify="end" avatar={studentAvatar} text="Tried that, and it says 'kaya, vi pawa, try again'. Please help me" />
            <ChatBubble justify="start" avatar={aiAvatar} text="Hmmm harder boi, but ahh siniziba, try ChatGPT" />
            <ChatBubble justify="end" avatar={studentAvatar} text="Mwati, nala clear this semester ineh" />
            <ChatBubble justify="start" avatar={aiAvatar} text="Ndiwe wo limba navi pawa, Try again, Try again!" />
        </div>
        <form class="self-end flex gap-2 w-full">
            <div class="w-full">
                <label for="query" hidden>Type your question</label>
                <input id="query" type="text" placeholder="Type here" class="input input-bordered w-full"/>
            </div>
            <button type="submit" class="btn btn-neutral w-16">
                <Icon class="w-10 h-10 text-primary" icon="typcn:arrow-up-outline"/>
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