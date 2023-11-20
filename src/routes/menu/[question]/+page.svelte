<script lang="ts">
    import Icon from "@iconify/svelte";
    import {page} from '$app/stores'

    const slug: string = $page.params?.question ?? "No slug";
</script>

<section>
    <h1>{slug}</h1>
    <button>
        <span>Next</span>
        <Icon icon="ph:arrow-right-bold"/>
    </button>
    <div>
        <span>1</span>
    </div>
    <div>
        <p>Prove that 1 + 1 = 2. Make sure to <strong>show your working</strong></p>
        <button>
            view answer
        </button>
        <div>
            <!-- Answer area -->
        </div>
    </div>
    <div>
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

