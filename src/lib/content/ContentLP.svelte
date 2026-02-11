<script>
  import { HourglassMedium, Eye, Lightning, Target, Handshake, ChartLineUp, CastleTurret, Signpost, Scales, Bank, HandCoins, Briefcase } from 'phosphor-svelte';

  import Heading from "$lib/components/Heading.svelte";
  import FeatureBlock from "$lib/components/FeatureBlock.svelte";
  import Image from '$lib/components/Image.svelte';
</script>

<div class="bg-white px-4 space-y-24 md:space-y-40 lg:space-y-64 pb-24 md:pb-40 lg:pb-64">
  
  <!-- LPs Hero -->
  <section id="LP" class="bg-white bg-linear-to-b from-blue-100 to-blue-100/0
    -mx-4 scroll-mt-16 pt-24 lg:pt-40
  ">

    <div class="container mx-auto px-4">
    
      <Heading large center
        tag="For LPs Deploying Capital"
        title="The Inbound Intelligence Engine"
        subtitle="Automate your intake. Accelerate your mandate. Transform a chaotic inbox into a streamlined pipeline."
        text="Schematic&apos;s AI analyzes every inbound request against your specific investment criteria the moment it arrives."
      />

    </div>

  </section>

  <!-- Section LPs Report -->
  <section class="container mx-auto grid grid-cols-1 md:grid-cols-6 space-y-10 md:space-y-0">

    <!-- Left col -->
    <div class="col-span-3 flex flex-col md:pr-16 space-y-10">
      <Heading
        tag="Kill the Document Hunt"
        title="Consolidate your intelligence. <br/> Stop digging through ten files for one answer. "
        text="Schematic aggregates PDFs, models, and decks into a single, searchable command center. We normalize disjointed and misformated data into beautiful, actionable reports so your team stays aligned—not lost in the weeds."
      />

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">

        <FeatureBlock
          Icon={HourglassMedium}
          title="Reclaim Your Deep-Work Hours"
          text="Eliminate the &ldquo;document tax&rdquo; by removing hours of manual data extraction, letting your team focus on high-level strategy instead of administrative hunting."
        />
        <FeatureBlock
          Icon={Eye}
          title="Eliminate Institutional Blind Spots"
          text="Ensure total team alignment with a single source of truth that prevents critical data from being siloed in one person's inbox or local drive."
        />
        <FeatureBlock
          Icon={Lightning}
          title="Shorten the Path to &ldquo;Yes&rdquo;"
          text="Move from initial intake to a high-conviction decision faster by having every data point indexed, verified, and ready for the Investment Committee."
        />
        <FeatureBlock
          Icon={Target}
          title="Invest with Absolute Certainty"
          text="Stop second-guessing your data; our automated cross-referencing flags hidden discrepancies between decks and models before they become costly surprises."
        />

      </div>
    </div>

    <!-- Right col -->
    <div class="col-span-3 rounded-lg overflow-hidden">
      <Image src="/LPs-Report.png" alt="LPs Report" />
    </div>


  </section>


  <!-- Section LPs Benchmark -->
  <section class="container mx-auto gap-10 lg:gap-x-0 grid grid-cols-1 md:grid-cols-6">

    <!-- Header -->
    <div class="col-span-6 flex flex-col space-between">
      <Heading
        tag="Context is Everything"
        title="Know where they stand. <br /> Compare every fund against the industry average instantly."
        text="Don't analyze in a vacuum. Schematic automatically benchmarks inbound funds against peer performance, fee structures, and liquidity terms. See exactly how a GP's track record stacks up against the current vintage before you even take the first meeting."
      />
    </div>

    <!-- Image -->
    <div class="col-span-6 lg:col-span-4 rounded-lg">
      <Image src="/LPs-Benchmark.png" alt="LPs Benchmark" />
    </div>

    <!-- Features -->
    <div class="col-span-2 md:col-span-6 lg:col-span-2 flex flex-col justify-between md:flex-row lg:flex-col lg:px-10 gap-10">

      <FeatureBlock
        Icon={Handshake}
        title="Negotiate from Strength"
        text="Gain the upper hand in side-letter discussions by knowing exactly where a GP's fees and terms sit relative to the rest of the market."
      />
      <FeatureBlock
        Icon={ChartLineUp}
        title="Validate Alpha Claims"
        text="Cut through the marketing noise to see if a GP is truly outperforming their peers or simply riding a rising tide."
      />
      <FeatureBlock
        Icon={CastleTurret}
        title="De-Risk Your Allocation"
        text="Identify &ldquo;style drift&rdquo; or outlier behavior early by seeing how a fund's strategy deviates from historical industry norms."
      />
    </div>

  </section>


  <!-- Section LPs Due-Diligence -->
  <section class="container mx-auto grid grid-cols-1 md:grid-cols-6 space-y-10">

    <!-- Header -->
    <div class="col-span-3 lg:col-span-6 flex flex-col space-between md:pr-10">
      <Heading
        tag="Deep Due Diligence"
        title="X-Ray vision for every deal. <br /> Surface the &ldquo;unspoken&rdquo; risks buried in the fine print."
        text="Our specialized compliance engine scans SEC filings and legal databases for every organization and key person in your pipeline. Automatically flag lawsuits, regulatory red flags, and contradictory fine print clauses that manual reviews often miss."
      />
    </div>

    <!-- Features -->
    <div class="col-span-3 lg:col-span-6 grid grid-cols-1 lg:grid-cols-3 gap-4">

      <div class="rounded-lg relative">
        <Image src="/LPs-Diligence-1.png" alt="LPs Due Diligence" class="w-full" />
        <div class="absolute bottom-0 left-0 right-0 p-4 md:p-10">
          <FeatureBlock
            title="Protect Your Reputation"
            text="Avoid the headline risk of being associated with bad actors by surfacing litigation and regulatory history before you commit."
          />
        </div>
      </div>

      <div class="rounded-lg relative">
        <Image src="/LPs-Diligence-2.png" alt="LPs Due Diligence" class="w-full" />
        <div class="absolute bottom-0 left-0 right-0 p-4 md:p-10">
          <FeatureBlock
            title="Expose Hidden Friction"
            text="Identify internal GP instability or high turnover that isn't disclosed in the pitch deck but shows up in legal and SEC paper trails."
          />
        </div>
      </div>

      <div class="rounded-lg relative">
        <Image src="/LPs-Diligence-3.png" alt="LPs Due Diligence" class="w-full" />
        <div class="absolute bottom-0 left-0 right-0 p-4 md:p-10">
          <FeatureBlock
            title="Stop Chasing Dead Leads"
            text="Save hundreds of man-hours by instantly disqualifying funds with critical red flag or regulatory skeletons based on your custom investor preferences."
          />
        </div>
      </div>

    </div>

  </section>


  <!-- Section LPs Custom Score -->
  <section class="container mx-auto grid grid-cols-1 md:grid-cols-6 gap-10">

    <!-- Header -->
    <div class="col-span-6 xl:col-span-2 flex flex-col gap-10 md:pr-10">
      <Heading
        tag="Screen Deals in Seconds"
        title="Custom fit scores for your profile. <br /> Spot the winners without the grind."
        text="Define your own weights for asset classes, geography, and strategy. Schematic instantly maps inbound funds against your preferences, generating a comprehensive &ldquo;Fit Score&rdquo; so you can prioritize your high-conviction opportunities immediately."
      />

      <FeatureBlock
        Icon={Signpost}
        title="Trust Your Instincts—With Data"
        text="Quantify your gut feeling by mapping every fund against your unique mandate, ensuring every investment aligns with your long-term goals."
      />

      <FeatureBlock
        Icon={Scales}
        title="Eliminate Bias in the Pipeline"
        text="Ensure every opportunity is evaluated against the same objective criteria, removing the louder-voice bias during team meetings."
      />
    </div>

    <div class="space-y-4 col-span-6 xl:col-span-4">
      <Image src="LPs-Score-1.png" alt="LPs Score" class="w-full" />
      <div class="aspect-6/1 bg-background-tertiary/50 rounded-lg flex flex-col sm:flex-row sm:items-center gap-24 sm:gap-0">
        <div class="flex-1 p-4 sm:p-10">
          <p class="text-3xl font-medium text-foreground-secondary">
            <span class="block">Written by AI, </span>
            <span class="inline-block">with</span>
            <span class="inline-block px-1 bg-tint text-white relative">
              AI built-in
              <Image src="LPs-Score-2.png" alt="LPs Score" class="absolute top-full left-[50%] w-90! h-[174px] max-w-none -translate-x-[50%] scale-75 origin-top" />
            </span>
          </p>
        </div>
        <div class="max-w-64 p-4 sm:p-0">
          <FeatureBlock
            title="Interactive due diligence"
            text="Query the AI for instant clarity or leave context-rich comments exactly where the data lives."
          />
        </div>
        
      </div>
    </div>

  </section>


  <!-- Section LPs Tax Implications -->
  <section class="container mx-auto grid grid-cols-1 md:grid-cols-6 space-y-10 md:space-y-0">

    <!-- Header -->
    <div class="col-span-3 lg:col-span-4 md:pr-10 lg:flex lg:flex-col lg:jusitfy-between space-y-10">
      <Heading
        tag="Protect Your Returns"
        title="Anticipate tax implications. <br /> Understand the bottom line before the capital call."
        text="Schematic analyzes fund structures to highlight potential tax complexities, from K-1 expectations to jurisdictional nuances. We help you identify structural friction early, ensuring your Investment Committee has a clear view of net-return reality."
      />

      <div class="flex flex-col lg:flex-row gap-10">

        <FeatureBlock
          Icon={Bank}
          title="Maximize After-Tax Returns"
          text="Avoid phantom gains and structural inefficiencies by understanding the tax drag of a fund before you sign the LPA."
        />

        <FeatureBlock
          Icon={HandCoins}
          title="Avoid Hidden Costs"
          text="Surface hidden fee layers or tax withholding issues that can erode your net IRR over the life of the fund."
        />

        <FeatureBlock
          Icon={Briefcase}
          title="Streamline Legal Review"
          text="Give your legal team a head start by highlighting complex structural nuances that require specialized attention."
        />
      
      </div>
    </div>

    <div class="col-span-3 lg:col-span-2 rounded-lg">
      <Image src="/LPs-Tax.png" alt="LPs Tax Implications" class="w-full" />
    </div>

  </section>


  <!-- Section LPs All Features -->
  <section class="container mx-auto space-y-10">

    <Heading center
      tag="Built for the Modern Investment Team"
      title="Everything you need to move from &ldquo;Inbox&rdquo; to &ldquo;IC&rdquo; faster."
    />

    <div class="relative rounded-lg overflow-hidden">
      <Image src="/LPs-Features.png" alt="LPs more features" class="absolute w-full h-full inset-0 object-cover" />

      <div class="relative p-3 md:p-6 lg:p-10 xl:p-16 grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-6">
        
        <div class="bg-white/75 p-4 md:p-6 rounded">
          <FeatureBlock
            title="AI Fund Reports"
            text="Generate comprehensive, institutional-grade dossiers across 12+ critical dimensions, from Fee Structures and Liquidity Terms to Governance and Track Record."
          />
        </div>
        <div class="bg-white/75 p-4 md:p-6 rounded">
          <FeatureBlock
            title="Source-Linked Data"
            text="Eliminate hallucinations and build trust with click-to-verify transparency that links every AI-generated insight directly to its original page and paragraph."
          />
        </div>
        <div class="bg-white/75 p-4 md:p-6 rounded">
          <FeatureBlock
            title="Team Collaboration"
            text="Transform reports into active workspaces with inline annotations, @mentions, and threaded discussions that keep your team's collective brain in one place."
          />
        </div>
        <div class="bg-white/75 p-4 md:p-6 rounded">
          <FeatureBlock
            title="Fund Tracking"
            text="Move beyond spreadsheets with a dynamic CRM-style pipeline that manages every stage of your mandate, from initial screening to final commitment."
          />
        </div>
        <div class="bg-white/75 p-4 md:p-6 rounded">
          <FeatureBlock
            title="Audit-Ready Exports"
            text="Effortlessly bridge the gap between digital analysis and the boardroom with customizable PDF exports tailored specifically for Investment Committee presentations."
          />
        </div>
        <div class="bg-white/75 p-4 md:p-6 rounded">
          <FeatureBlock
            title="AI Q&A Chat"
            text="Interrogate your fund data using natural language to extract specific nuances—like &ldquo;Does this GP have a key-man clause?&rdquo;—with instant, cited responses."
          />
        </div>
        <div class="bg-white/75 p-4 md:p-6 rounded">
          <FeatureBlock
            title="Data Integrity Alerts"
            text="Deploy an automated watchdog that flags contradictory data points—such as AUM mismatches between a deck and a fact sheet—before they lead to errors."
          />
        </div>
        <div class="bg-white/75 p-4 md:p-6 rounded">
          <FeatureBlock
            title="Smart Notifications"
            text="Stay ahead of the curve with personalized activity digests and real-time alerts that summarize fund updates, teammate feedback, and upcoming deadlines."
          />
        </div>
        <div class="bg-white/75 p-4 md:p-6 rounded">
          <FeatureBlock
            title="Exposure Mapping"
            text="Instantly visualize how a prospective fund impacts your portfolio's diversification across geography, sector, and vintage to avoid over-concentration."
          />
        </div>

      </div>
    </div>


  </section>


  <!-- Section LPs Stats -->
  <section class="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-start">

    <div class="space-y-2">
      <p class="text-transparent text-7xl font-bold tracking-tighter bg-[url(/stats-mask-lp.png)] bg-clip-text bg-fixed bg-center bg-cover">90%</p>
      <FeatureBlock
        title="Reduction in Data Wrangling"
        text="Shift your team's focus from administrative hunting to strategic judgment. What used to take analysts 3-5 days of manual synthesis and cross-referencing now takes less than 2 hours."
      />
    </div>

    <div class="space-y-2">
      <p class="text-transparent text-7xl font-bold tracking-tighter bg-[url(/stats-mask-lp.png)] bg-clip-text bg-fixed bg-center bg-cover">20x</p>
      <FeatureBlock
        title="Faster Fund Evaluation"
        text="Process your entire inbound pipeline in a fraction of the time. Move from a chaotic inbox to a high-conviction Yes or No without the multi-week bottleneck of manual document review."
      />
    </div>
    
    <div class="space-y-2">
      <p class="text-transparent text-7xl font-bold tracking-tighter bg-[url(/stats-mask-lp.png)] bg-clip-text bg-fixed bg-center bg-cover">50%</p>
      <FeatureBlock
        title="Increase in Deal Capacity"
        text="Scale your operations without scaling headcount. Existing teams evaluate more opportunities with Schematic by automating the repetitive tasks of data extraction and report generation."
      />
    </div>

    <div class="space-y-2">
      <p class="text-transparent text-7xl font-bold tracking-tighter bg-[url(/stats-mask-lp.png)] bg-clip-text bg-fixed bg-center bg-cover">85%</p>
      <FeatureBlock
        title="Risk Identification Accuracy"
        text="Identify red flags and regulatory skeletons. Surface litigation, SEC disclosures, and structural discrepancies that manual sample-based reviews consistently miss."
      />
    </div>

  </section>


</div>
