<script>
  import data from "../data.json";
  import states from "../states.json";
  let practiceArea = [
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
  let courts = [
    { court: "Lower Court" },
    { court: "High Court" },
    { court: "Supreme Court" },
    { court: "Subordinate Court" },
  ];
  let minExperience = 0;
  let maxFees = 0;
</script>

<h1 class="text-4xl font-bold">Lawyers</h1>

<div class="flex flex-row flex-wrap gap-4">
  <select class="select select-bordered w-full max-w-xs">
    <option disabled selected>Courts</option>
    {#each courts as court}
      <option>{court.court}</option>
    {/each}
  </select>
  <select class="select select-bordered w-full max-w-xs">
    <option disabled selected>State</option>
    {#each states as state}
      <option>{state}</option>
    {/each}
  </select>

  <select class="select select-bordered w-full max-w-xs">
    <option disabled selected>Practice Area</option>
    {#each practiceArea as area}
      <option>{area.opt}</option>
    {/each}
  </select>
  <div class="flex flex-col gap-2">
    <div class="badge">minimum experience: {minExperience}</div>
    <input
      type="range"
      min="0"
      max="70"
      bind:value={minExperience}
      class="range w-72"
    />
  </div>
  <div class="flex flex-col gap-2">
    <div class="badge">maximum fees: {maxFees}</div>
    <input
      type="range"
      min="5000"
      max="500000"
      step="1000"
      bind:value={maxFees}
      class="range w-72"
    />
  </div>
</div>
<!-- <div class="">
  {#each data.slice(0, 10) as lawyer}
    <div>
      <p>name: {lawyer.name}</p>
      <p>position: {lawyer.position}</p>
      <p>contact: {lawyer.contact[0]}</p>
      {#if lawyer.contact[1]}
        <p>email: {lawyer.contact[1]}</p>
      {/if}
    </div>
    <br />
    <br />
  {/each}
</div> -->
<div class="flex flex-row flex-wrap gap-3 mt-4 justify-center">
  {#each data.slice(0, 40) as lawyer}
    <div class="card w-96 bg-base-200 shadow-xl">
      <figure>
        <img
          src={lawyer.img}
          alt="Lawyer"
          on:error={function () {
            this.src =
              "https://cdn-icons-png.flaticon.com/512/3177/3177440.png";
          }}
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{lawyer.name}</h2>
        <p class="m-0 p-0">
          {lawyer.position}<br />{lawyer.contact[0]}<br
          />{#if lawyer.contact[1]}{lawyer.contact[1]}{/if}
        </p>
        <p class="m-0 p-0">{lawyer.contact[0]}</p>
        {#if lawyer.contact[1]}<p class="m-0 p-0">{lawyer.contact[1]}</p>{/if}
      </div>
    </div>
  {/each}
</div>
