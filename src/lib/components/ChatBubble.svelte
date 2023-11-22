<script lang="ts">
    export let text: string = "";
    export let avatar: string = "";
    export let justify: string = "chat-start";
</script>

<div class={`chat ${justify}`}>
    <div class="chat-image avatar">
        <div class="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src={avatar} />
        </div>
    </div>
    <div class="chat-bubble text-primary">{text}</div>
</div>
