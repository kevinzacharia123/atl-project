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
</script>

<h1 class="text-3xl py-6 ml-6">You are looking for a legal advice on ....</h1>
<div class="flex gap-7 font-bold justify-center">
  <div class="">
    {#each options as option}
      <label class="label cursor-pointer">
        <span class="label-text">{option.opt}</span>
        <input
          type="checkbox"
          bind:checked={option.selected}
          class="checkbox"
        />
      </label>
    {/each}
    <input
      type="text"
      placeholder="Other (type problem statement here)"
      class="input input-bordered w-full m-3"
    />
  </div>
</div>
<div class="flex w-full justify-end">
  <button class="btn btn-primary self-end m-3 mr-32">search</button>
</div>

<style>
  span {
    font-size: 1.25rem;
    margin-right: 30px;
  }
  a {
    font-size: 1.25rem;
  }
</style>
