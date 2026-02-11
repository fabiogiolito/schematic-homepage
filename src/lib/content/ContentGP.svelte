<script>
  import { CursorClick, FolderStar, ShieldWarning, ListMagnifyingGlass, ChartBar, Trophy, Pen, CirclesThreePlus, LineSegments, Mailbox, TrayArrowDown, Receipt, Siren } from 'phosphor-svelte';

  import Heading from "$lib/components/Heading.svelte";
  import FeatureBlock from "$lib/components/FeatureBlock.svelte";
  import Image from '$lib/components/Image.svelte';
</script>

<div class="bg-tint-dark text-white px-4 space-y-24 md:space-y-40 lg:space-y-64 pb-24 md:pb-40 lg:pb-64">
  
  <!-- GPs Hero -->
  <section id="GP" class="
    -mx-4 scroll-mt-16 pt-24 lg:pt-40
    bg-tint-dark text-white bg-linear-to-b from-blue-900 to-blue-900/0
  ">

    <div class="container mx-auto px-4">
    
      <Heading large center
        tag="For GPs Deploying Capital"
        title="The Seamless Closing Engine"
        subtitle="Shorten the cycle. Secure the commitment. Eliminate the administrative friction tax."
        text="Schematic organizes your data, automates your logistics, and removes every hurdle between an LP and a signature."
      />

    </div>

  </section>

  <!-- Section GPs Vault -->
  <section class="container mx-auto grid grid-cols-1 md:grid-cols-6 space-y-10 md:space-y-0">

    <!-- Left col -->
    <div class="col-span-3 flex flex-col md:pr-16 space-y-10">
      <Heading
        tag="The Command Center for Your Documents"
        title="Don't just share files. <br /> Deliver an institutional experience."
        text="Schematic's AI-powered data rooms automatically classify your documents, manage version control, and ensure your LPs always have the most up-to-date models and decks. With granular access controls and dynamic watermarking, your intellectual property stays protected while your LPs stay informed."
      />

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">

        <FeatureBlock
          Icon={CursorClick}
          title="The Modern Transparency Standard"
          text="Build immediate trust by delivering a data room that feels like a collaborative workspace."
        />
        <FeatureBlock
          Icon={FolderStar}
          title="Zero-Effort Organization"
          text="Our AI automatically tags and sorts incoming files, transforming a messy folder structure into a searchable, logical library."
        />
        <FeatureBlock
          Icon={ShieldWarning}
          title="Bulletproof Security"
          text="Enforce NDAs, domain restrictions, and expiration dates to maintain total control over who sees what—and for how long."
        />
        <FeatureBlock
          Icon={ListMagnifyingGlass}
          title="Instant Extraction"
          text="Let LPs find answers faster with AI that extracts key terms from your PPM and LPA directly within the data room."
        />

      </div>
    </div>

    <!-- Right col -->
    <div class="col-span-3 rounded-lg overflow-hidden">
      <Image src="GPs-Vault.png" alt="GPs Vault" />
    </div>


  </section>


  <!-- Section GPs Benchmark -->
  <section class="container mx-auto gap-10 lg:gap-x-0 grid grid-cols-1 md:grid-cols-6">

    <!-- Header -->
    <div class="col-span-6 flex flex-col space-between">
      <Heading
        tag="Position Your Performance"
        title="Benchmark Against the Best. <br /> See exactly how your fund stacks up before the first pitch."
        text="Schematic's benchmarking tools analyze your terms, fees, and performance against current industry averages. Identify your competitive advantages and address potential outlier terms proactively so you can walk into every meeting with data-backed confidence."
      />
    </div>

    <!-- Image -->
    <div class="col-span-6 lg:col-span-4 rounded-lg">
      <Image src="GPs-Benchmark.png" alt="GPs Benchmark" />
    </div>

    <!-- Features -->
    <div class="col-span-2 md:col-span-6 lg:col-span-2 flex flex-col justify-between md:flex-row lg:flex-col lg:px-10 gap-10">

      <FeatureBlock
        Icon={ChartBar}
        title="Optimized Fee Structures"
        text="Validate your management fees and carry against peer-group norms to justify your value proposition."
      />
      <FeatureBlock
        Icon={Trophy}
        title="Competitive Performance Metrics"
        text="Contextualize your track record within your specific vintage and strategy to prove your alpha."
      />
      <FeatureBlock
        Icon={Pen}
        title="Market-Ready Term Sheets"
        text="Adjust your liquidity and governance terms to align with current LP expectations and avoid deal-breaking friction."
      />
    </div>

  </section>


  <!-- Section GPs Intelligence -->
  <section class="container mx-auto grid grid-cols-1 md:grid-cols-6 space-y-10">

    <!-- Header -->
    <div class="col-span-3 lg:col-span-6 flex flex-col space-between md:pr-10">
      <Heading
        tag="Read Between the Lines"
        title="Intelligence That Predicts the Close. <br /> Stop guessing which LPs are serious."
        text="Our deep engagement analytics show you exactly who is spending time in your data room, which pages they're lingering on, and what documents they're sharing internally. Focus your energy on high-intent leads and address concerns before the LP even voices them."
      />
    </div>

    <!-- Features -->
    <div class="col-span-3 lg:col-span-6 grid grid-cols-1 lg:grid-cols-3 gap-4">

      <div class="rounded-lg relative">
        <Image src="/GPs-Intelligence-1.png" alt="LPs Due Diligence" class="w-full" />
        <div class="absolute bottom-0 left-0 right-0 p-4 md:p-10">
          <FeatureBlock
            title="Section-Level Insights"
            text="Pinpoint investor focus by seeing exactly where they linger. Whether they're scrutinizing your Track Record or stuck on Fund Terms, you'll know their priorities before the next call."
          />
        </div>
      </div>

      <div class="rounded-lg relative">
        <Image src="/GPs-Intelligence-2.png" alt="LPs Due Diligence" class="w-full" />
        <div class="absolute bottom-0 left-0 right-0 p-4 md:p-10">
          <FeatureBlock
            title="Real-Time View Alerts"
            text="Receive instant notifications when a high-priority prospect enters the data room, allowing for perfectly timed follow-ups."
          />
        </div>
      </div>

      <div class="rounded-lg relative">
        <Image src="/GPs-Intelligence-3.png" alt="LPs Due Diligence" class="w-full" />
        <div class="absolute bottom-0 left-0 right-0 p-4 md:p-10">
          <FeatureBlock
            title="Engagement Funnel Visibility"
            text="Monitor your entire pipeline through a visual dashboard to identify where prospects are dropping off."
          />
        </div>
      </div>

    </div>

  </section>


  <!-- Section GPs Signatures -->
  <section class="container mx-auto grid grid-cols-1 md:grid-cols-6 gap-10">

    <!-- Header -->
    <div class="lg:col-span-2 lg:pr-24">
      <Heading
        tag="The Final Mile"
        title="Friction-Free Closing. <br /> Get signatures in record time."
        text="Eliminate the back-and-forth of gathering signatures and fragmented emails. Our integrated data room, link management and e-sign workflow coordinates multi-signer documents, secure and authenticated access to files, automated reminders, and provides a complete audit trail for your legal team."
      />
    </div>

    <div class="lg:col-span-4 rounded-lg">
      <Image src="GPs-Signatures.png" alt="GPs Signatures" />
    </div>

    <div class="lg:col-span-6 flex flex-col md:flex-row gap-10 md:gap-0">
      <div class="md:pr-10">
        <FeatureBlock
          Icon={CirclesThreePlus}
          title="One Unified Workflow"
          text="Replace your fragmented stack of DocSend links, DocuSign portals, and clunky data rooms with a single, intelligent app built for the private markets."
        />
      </div>

      <div class="md:pr-10">
        <FeatureBlock
          Icon={LineSegments}
          title="Multi-Signer Orchestration"
          text="Manage complex signature logic between GPs, LPs, and legal counsel with automated routing that removes the manual coordination."
        />
      </div>

      <div class="md:pr-10">
        <FeatureBlock
          Icon={Mailbox}
          title="Smart Follow-ups"
          text="Eliminate the &ldquo;gentle&rdquo; nudge from your to-do list. Schematic automates reminders for pending fields and signatures to keep your close on schedule."
        />
      </div>
    </div>

  </section>


  <!-- Section GPs Compliance -->
  <section class="container mx-auto grid grid-cols-1 md:grid-cols-6 space-y-10 md:space-y-0">

    <!-- Header -->
    <div class="col-span-3 lg:col-span-4 md:pr-10 lg:flex lg:flex-col lg:jusitfy-between space-y-10">
      <Heading
        tag="Protect the Fund"
        title="Onboard with Confidence. <br /> Automate the heaviest lift in fundraising: Compliance."
        text="Schematic integrates ID verification, AML screening, and accreditation tracking directly into the onboarding flow. Manage W-9/W-8 tax forms and beneficial owner documentation without the manual headache."
      />

      <div class="flex flex-col lg:flex-row gap-10">

        <FeatureBlock
          Icon={TrayArrowDown}
          title="Frictionless Accreditation"
          text="Automate the collection of accreditation proof and beneficial ownership data to stay compliant with SEC regulations."
        />

        <FeatureBlock
          Icon={Receipt}
          title="Seamless Tax Management"
          text="Collect and store W-9 and W-8 forms digitally, ensuring your tax records are complete before the first capital call."
        />

        <FeatureBlock
          Icon={Siren}
          title="AML/KYC Watchdog"
          text="Continuous screening against global sanctions and PEP lists keeps your fund protected from regulatory risk."
        />
      
      </div>
    </div>

    <div class="col-span-3 lg:col-span-2 rounded-lg">
      <Image src="/GPs-Compliance.png" alt="GPs Compliance" class="w-full" />
    </div>

  </section>


  <!-- Section GPs All Features -->
  <section class="container mx-auto space-y-10">

    <Heading center
      tag="The end-to-end OS for the modern General Partner"
      title="Everything You Need to Close Your Next Fund."
    />

    <div class="relative rounded-lg overflow-hidden">
      <Image src="/GPs-Features.png" alt="GPs more features" class="absolute w-full h-full inset-0 object-cover" />

      <div class="
        relative p-3 md:p-6 lg:p-10 xl:p-16 grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-6 
        text-foreground-primary
      ">

        <div class="bg-white/75 p-4 md:p-6 rounded">
          <FeatureBlock
            title="Dynamic Watermarking"
            text="Protect your proprietary models with viewer-specific IDs that deter unauthorized sharing."
          />
        </div>
        <div class="bg-white/75 p-4 md:p-6 rounded">
          <FeatureBlock
            title="AI Document Classification"
            text="Stop dragging and dropping; our AI sorts your PPM, LPA, and decks into the right folders automatically."
          />
        </div>
        <div class="bg-white/75 p-4 md:p-6 rounded">
          <FeatureBlock
            title="Custom Share Links"
            text="Create unique URLs for different investor groups with specific permissions and custom branding."
          />
        </div>
        <div class="bg-white/75 p-4 md:p-6 rounded">
          <FeatureBlock
            title="Engagement Status"
            text="Track every investor’s journey from &ldquo;Initial Outreach&rdquo; to &ldquo;Committed&rdquo; with auto-updating status markers."
          />
        </div>
        <div class="bg-white/75 p-4 md:p-6 rounded">
          <FeatureBlock
            title="Batch Signing"
            text="Send subscription agreements to your entire Close list simultaneously with a single click."
          />
        </div>
        <div class="bg-white/75 p-4 md:p-6 rounded">
          <FeatureBlock
            title="Accreditation Tracking"
            text="Manage the expiration and verification of investor status in one centralized compliance dashboard."
          />
        </div>
        <div class="bg-white/75 p-4 md:p-6 rounded">
          <FeatureBlock
            title="Readiness Scoring"
            text="Use AI to evaluate your data room's completeness and get recommendations to improve LP conversion."
          />
        </div>
        <div class="bg-white/75 p-4 md:p-6 rounded">
          <FeatureBlock
            title="Global Analytics"
            text="See where your interest is coming from with geographic heatmaps of your data room visitors."
          />
        </div>
        <div class="bg-white/75 p-4 md:p-6 rounded">
          <FeatureBlock
            title="Direct Inquiry Portal"
            text="Centralize LP questions into a single, searchable Q&A interface that keeps your responses consistent."
          />
        </div>
        
      </div>
    </div>


  </section>


  <!-- Section GPs Stats -->
  <section class="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-start">

    <div class="space-y-2">
      <p class="text-transparent text-7xl font-bold tracking-tighter bg-[url(/stats-mask-lp.png)] bg-clip-text bg-fixed bg-center bg-cover">35%</p>
      <FeatureBlock
        title="Faster Time-to-Close"
        text="By automating the logistics of the raise—from NDA execution to e-signing—GPs using Schematic move LPs from the first data room visit to a signed commitment 35% faster than traditional methods. "
      />
    </div>

    <div class="space-y-2">
      <p class="text-transparent text-7xl font-bold tracking-tighter bg-[url(/stats-mask-lp.png)] bg-clip-text bg-fixed bg-center bg-cover">4x</p>
      <FeatureBlock
        title="Higher LP Engagement"
        text="Interactive data rooms and AI-driven document summaries increase the frequency and depth of LP interactions. Investors are four times more likely to return to a Schematic-powered data room compared to static file links. "
      />
    </div>
    
    <div class="space-y-2">
      <p class="text-transparent text-7xl font-bold tracking-tighter bg-[url(/stats-mask-lp.png)] bg-clip-text bg-fixed bg-center bg-cover">Zero</p>
      <FeatureBlock
        title="Incomplete Subscriptions"
        text="Our AI-guided e-signing ensures every field, initial, and tax form is completed correctly the first time. Eliminate the follow-up loop that typically plagues the final 10% of a fundraise."
      />
    </div>

    <div class="space-y-2">
      <p class="text-transparent text-7xl font-bold tracking-tighter bg-[url(/stats-mask-lp.png)] bg-clip-text bg-fixed bg-center bg-cover">60%</p>
      <FeatureBlock
        title="Reduction in IR Overhead"
        text="Automated document versioning and self-service AI Q&A allow your Investor Relations team to manage twice the volume of prospects without increasing headcount or sacrificing response quality."
      />
    </div>

  </section>

</div>
