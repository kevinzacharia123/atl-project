<script>
  import { each } from "svelte/internal";

  let options = [
    { opt: "Business/Company Registration and winding up", selected: false },
    { opt: "Buisness Tax/Taxation", selected: false },
    { opt: "Civil Law", selected: false },
    { opt: "Company Compliances/Filings", selected: false },
    { opt: "Constituitional Law", selected: false },
    { opt: "Consumer Protection", selected: false },
    { opt: "Contracts and Legal Documentaion/Agreements", selected: false },
    { opt: "Corporate Litigation", selected: false },
    { opt: "Criminal Law", selected: false },
    { opt: "Cyber Law", selected: false },
    { opt: "Dispute Resolution (ADR)", selected: false },
    { opt: "Employment and Labour Laws", selected: false },
    { opt: "Environment Related Compliances", selected: false },
    { opt: "Family Law", selected: false },
    { opt: "Foreign Investment", selected: false },
    { opt: "Franchising/Licensing", selected: false },
    { opt: "General Advice", selected: false },
    { opt: "Hookah Bar License", selected: false },
    { opt: "Insolvency and Bankruptcy (IBC)", selected: false },
    { opt: "Intellectual Property Law", selected: false },
    { opt: "International Commercial and Contract Disputes", selected: false },
    { opt: "Legal Notice", selected: false },
    { opt: "Mergers and Acquisitions", selected: false },
    { opt: "Motor Vehicle Act", selected: false },
    { opt: "Prevention of Sexual Harassment (POSCO)", selected: false },
    { opt: "Property Law", selected: false },
    { opt: "Startup Funding and Finances", selected: false },
    { opt: "Trade Law", selected: false },
    { opt: "Website Agreement and Policy", selected: false },
    // { opt: "", selected: false },
  ];
  // $: console.log(options);
</script>

<h1 class="text-3xl py-3">You are looking for a legal advice on ....</h1>

<div class="flex flex-row flex-wrap justify-center [&>*]:w-[420px] gap-2 my-4">
  {#each options as option}
    <label
      class="label cursor-pointer font-bold rounded border border-neutral-content {option.selected
        ? 'bg-base-content text-base-100'
        : ''}"
    >
      {option.opt}
      <input type="checkbox" bind:checked={option.selected} class="checkbox" />
    </label>
  {/each}
  <div class="flex flex-row w-full gap-2">
    <input
      type="text"
      placeholder="Other (type problem statement here)"
      class="input input-bordered flex-grow max-w-3xl"
    />
    <button class="btn btn-primary">search</button>
  </div>
</div>

<style>
  span {
    font-size: 1.25rem;
    margin-right: 30px;
  }
  a {
    font-size: 1.25rem;
  }
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fill, 186px);
  }
</style>
