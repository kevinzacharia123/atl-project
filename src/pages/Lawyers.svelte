<script>
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
</script>

<h1 class="text-4xl font-bold">Lawyers</h1>
<div class="flex flex-row flex-wrap gap-4">
  <div class="dropdown">
    <label class="btn" tabindex="0">State</label>
    <ul
      tabindex="0"
      class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
    >
      <li>Andhra Pradesh</li>
      <li>Arunachal Pradesh</li>
      <li>Assam</li>
      <li>Bihar</li>
      <li>Chhattisgarh</li>
      <li>Goa</li>
      <li>Gujarat</li>
      <li>Haryana</li>
      <li>Himachal Pradesh</li>
      <li>Jammu and Kashmir</li>
      <li>Jharkhand</li>
      <li>Karnataka</li>
      <li>Kerala</li>
      <li>Madhya Pradesh</li>
      <li>Maharashtra</li>
      <li>Manipur</li>
      <li>Meghalaya</li>
      <li>Mizoram</li>
      <li>Nagaland</li>
      <li>Odisha</li>
      <li>Punjab</li>
      <li>Rajasthan</li>
      <li>Sikkim</li>
      <li>Tamil Nadu</li>
      <li>Telangana</li>
      <li>Tripura</li>
      <li>Uttar Pradesh</li>
      <li>Uttarakhand</li>
      <li>West Bengal</li>
    </ul>
  </div>
  <div class="dropdown">
    <label class="btn" tabindex="0">Courts</label>
    <ul
      tabindex="0"
      class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
    >
      <li><a>Lower Court</a></li>
      <li><a>High Court</a></li>
      <li><a>Supreme Court</a></li>
      <li><a>Family Court</a></li>
    </ul>
  </div>
  <select class="select select-bordered w-full max-w-xs">
    <option disabled selected>Practice Area</option>
    {#each practiceArea as area}
      <option>{area.opt}</option>
    {/each}
  </select>
  <div class="flex flex-col gap-2">
    <div class="badge">Experience</div>
    <input type="range" min="0" max="100" value="40" class="range w-72" />
  </div>
</div>
