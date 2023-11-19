<script lang="ts">
    import PaperCard from "$lib/components/PaperCard.svelte";
    import type {Paper} from "$lib/utils/dataTypes";

    let searchVal: string = "";

    const papers: Array<Paper> = [
        {
            paperName: "ECZ Maths P1 2016",
            numQuestions: 40,
            slug: "ecz-maths-p1-2016"
        },
        {
            paperName: "ECZ Maths P2 2016",
            numQuestions: 60,
            slug: "ecz-maths-p2-2016"

        },
        {
            paperName: "ECZ Maths P1 2015",
            numQuestions: 40,
            slug: "ecz-maths-p1-2015"
        },
        {
            paperName: "ECZ Maths P1 2014",
            numQuestions: 40,
            slug: "ecz-maths-p1-2014"
        },
        {
            paperName: "ECZ Maths P2 2018",
            numQuestions: 60,
            slug: "ecz-maths-p2-2018"
        },
        {
            paperName: "ECZ Maths P2 2020",
            numQuestions: 60,
            slug: "ecz-maths-p2-2020"
        },
        {
            paperName: "ECZ Maths P1 2019",
            numQuestions: 40,
            slug: "ecz-maths-p1-2018"
        },
        {
            paperName: "ECZ Maths P2 2021",
            numQuestions: 60,
            slug: "ecz-maths-p2-2021"
        }
    ];

</script>

<section class="mx-auto w-fit min-h-[30rem] h-[90vh] mt-8 flex gap-8 flex-col ">
    <h1 class="text-4xl text-center mb-3">Select a question paper to revise</h1>
    <input type="text" placeholder="Search for paper"
           bind:value={searchVal}
           class="input input-sm input-bordered input-primary w-full max-w-lg"/>
    <div class="papers w-full h-fit overflow-y-auto flex flex-col gap-6 py-6 pl-1">
        {#each papers.filter((paper) => paper.paperName.toLowerCase().includes(searchVal.toLowerCase())) as paper}
            <PaperCard {paper}/>
        {/each}
    </div>
</section>

<style>
</style>
