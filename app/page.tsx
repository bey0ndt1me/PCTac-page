import Image from "next/image";

const contactField = [
  0, 0, 1, 1, 1, 0, 0, 0, 1, 2, 2, 2, 1, 0, 1, 2, 3, 4, 3, 2, 1, 1, 3,
  4, 5, 4, 3, 1, 1, 2, 4, 5, 4, 2, 1, 0, 1, 3, 4, 3, 1, 0, 0, 0, 1, 2, 1,
  0,
];

const pipeline = [
  {
    index: "01",
    title: "Structural color",
    copy: "Two camera-based fingertips observe local color redistribution at the contact.",
    meta: "dual fingertip RGB",
  },
  {
    index: "02",
    title: "Causal encoding",
    copy: "Hue is encoded on the unit circle, paired in time, and reduced to a past-only window.",
    meta: "4 × 32 × 64 · 100 ms",
  },
  {
    index: "03",
    title: "Slip estimate",
    copy: "A compact matched-capacity estimator outputs impending gross-slip probability.",
    meta: "98,328 parameters",
  },
  {
    index: "04",
    title: "Bounded response",
    copy: "Hysteretic control may adjust only the follower gripper command within verified limits.",
    meta: "gripper channel only",
  },
];

const protocolNumbers = [
  {
    number: "720",
    label: "controlled-slip trials",
    detail: "6 materials × 3 loads × 2 speeds × 10 repeats × 2 sensors",
  },
  {
    number: "384",
    label: "primary robot trials",
    detail: "paired frozen trajectories across tasks and controllers",
  },
  {
    number: "96",
    label: "online interventions",
    detail: "global-color and artificial-delay tests paired to full PC feedback",
  },
];

const comparisons = [
  {
    name: "Photonic crystal",
    signal: "local structural-color field",
    role: "candidate tactile inner loop",
    accent: true,
  },
  {
    name: "GelSight",
    signal: "local optical deformation field",
    role: "mechanically matched comparator",
  },
  {
    name: "Wrist F/T",
    signal: "global wrench",
    role: "non-local feedback baseline",
  },
  {
    name: "Fixed command",
    signal: "no tactile feedback",
    role: "low / high reference",
  },
];

const statusItems = [
  {
    state: "verified",
    title: "Protocol & software",
    copy: "Locked schemas, manifests, causal preprocessing, bounded controller, statistical plan, and 67 automated tests.",
  },
  {
    state: "pending",
    title: "Sensor characterization",
    copy: "Real range, sensitivity, hysteresis, drift, dynamics, durability, and cross-sample variation remain to be measured.",
  },
  {
    state: "pending",
    title: "Robot evidence",
    copy: "Controlled slip, synchronization, matched-baseline, and SO-101 robot trials remain laboratory work.",
  },
];

const boundaries = [
  "No claim that mechanochromic or photonic-crystal transduction is itself new.",
  "No arbitrary-material or cross-embodiment generalization claim.",
  "No calibrated grip-force claim before independent command-to-force calibration.",
  "No incipient-slip claim without local partial-slip ground truth.",
  "No autonomous-policy result from synthetic smoke tests or software validation.",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Return to top">
          <span className="brand-mark" aria-hidden="true">
            PC
          </span>
          <span>
            <strong>Photonic Tactile</strong>
            <small>Anonymous project preview</small>
          </span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#question">Question</a>
          <a href="#system">System</a>
          <a href="#protocol">Protocol</a>
          <a href="#status">Status</a>
        </nav>
        <a className="header-link" href="/paper-draft.pdf">
          Draft paper <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow-row">
            <span className="eyebrow">ICRA 2027 target</span>
            <span className="status-pill">
              <i aria-hidden="true" /> Research in progress
            </span>
          </div>
          <h1>
            Matched-Trajectory Evaluation of{" "}
            <em>Photonic-Crystal Tactile Feedback</em>
          </h1>
          <p className="hero-deck">
            Can local structural-color dynamics help suppress slip sooner—without
            changing the robot arm motion or simply gripping harder?
          </p>
          <p className="authors">
            Anonymous Authors <span>·</span> Double-blind preview
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="/paper-draft.pdf">
              Read result-free draft <span aria-hidden="true">↗</span>
            </a>
            <a className="button button-secondary" href="#system">
              Explore the system <span aria-hidden="true">↓</span>
            </a>
          </div>
          <p className="evidence-note">
            This preview contains no measured sensor or robot-performance result.
          </p>
        </div>

        <div className="hero-visual">
          <div className="visual-topline">
            <span>Conceptual contact field</span>
            <span className="live-label">not measured data</span>
          </div>
          <div className="sensor-stage">
            <div className="jaw jaw-left" aria-hidden="true" />
            <div
              className="contact-map"
              role="img"
              aria-label="Conceptual structural-color contact map; not measured data"
            >
              {contactField.map((value, index) => (
                <span
                  className={`cell cell-${value}`}
                  key={`${index}-${value}`}
                  aria-hidden="true"
                />
              ))}
            </div>
            <div className="jaw jaw-right" aria-hidden="true" />
            <div className="object-shape" aria-hidden="true">
              <span />
            </div>
          </div>
          <div className="signal-strip">
            <div>
              <span>arm trajectory</span>
              <strong>FROZEN</strong>
            </div>
            <div className="signal-line" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
            <div>
              <span>gripper channel</span>
              <strong>TACTILE-ADAPTIVE</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="research-question section-pad" id="question">
        <div className="section-label">
          <span>01</span>
          <p>Research question</p>
        </div>
        <div className="question-grid">
          <h2>
            Hold the motion fixed.
            <br />
            Isolate the tactile loop.
          </h2>
          <div className="question-copy">
            <p>
              We compare photonic-crystal tactile feedback with a mechanically and
              computationally matched GelSight implementation, wrist force/torque
              feedback, and fixed gripper commands.
            </p>
            <p>
              Every quantitative comparison replays the same SO-101 leader
              trajectory. The tactile controller may modify the follower gripper
              command—never the arm path—so operator motion cannot become a hidden
              confound.
            </p>
          </div>
        </div>
        <div className="principle-band" aria-label="Experimental control principle">
          <div>
            <small>Constant</small>
            <strong>Arm motion · mechanics · data · compute</strong>
          </div>
          <span aria-hidden="true">→</span>
          <div>
            <small>Changed</small>
            <strong>Local feedback signal</strong>
          </div>
          <span aria-hidden="true">→</span>
          <div>
            <small>Measured</small>
            <strong>Slip response · gripper action</strong>
          </div>
        </div>
      </section>

      <section className="system-section section-pad" id="system">
        <div className="section-heading">
          <div className="section-label on-dark">
            <span>02</span>
            <p>System</p>
          </div>
          <div>
            <h2>Sense locally. Act narrowly.</h2>
            <p>
              A past-only tactile pipeline closes a bounded inner loop around one
              actuator channel.
            </p>
          </div>
        </div>

        <div className="pipeline">
          {pipeline.map((item) => (
            <article className="pipeline-card" key={item.index}>
              <div className="pipeline-index">{item.index}</div>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <span>{item.meta}</span>
            </article>
          ))}
        </div>

        <div className="system-figure">
          <div className="figure-copy">
            <span className="figure-kicker">Study-design schematic</span>
            <h3>One trajectory. Four feedback conditions.</h3>
            <p>
              The system figure is a hypothesis-level study-design diagram. It
              communicates control authority and planned evidence, not completed
              hardware or measured outcomes.
            </p>
            <a href="/study-design-placeholder.png" target="_blank">
              Open full schematic <span aria-hidden="true">↗</span>
            </a>
          </div>
          <figure>
            <Image
              src="/study-design-placeholder.png"
              alt="Study-design schematic explicitly marked hypothesis and not data"
              width={4319}
              height={2130}
              sizes="(max-width: 760px) 100vw, 58vw"
            />
            <figcaption>
              Hypothesis / layout placeholder from the result-free manuscript.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="protocol-section section-pad" id="protocol">
        <div className="section-label">
          <span>03</span>
          <p>Evaluation protocol</p>
        </div>
        <div className="protocol-intro">
          <h2>Pre-registered structure before performance claims.</h2>
          <p>
            Counts below describe the locked experimental plan. They are not
            completed trials and do not imply a result.
          </p>
        </div>
        <div className="number-grid">
          {protocolNumbers.map((item) => (
            <article key={item.number}>
              <div className="planned-tag">Planned</div>
              <strong>{item.number}</strong>
              <h3>{item.label}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>

        <div className="comparison-block">
          <div className="comparison-heading">
            <h3>Matched comparison set</h3>
            <p>
              The same task, trajectory, controller law, and reporting framework
              are used across conditions.
            </p>
          </div>
          <div className="comparison-table" role="table" aria-label="Matched baseline comparison">
            <div className="comparison-row comparison-header" role="row">
              <span role="columnheader">Condition</span>
              <span role="columnheader">Signal</span>
              <span role="columnheader">Study role</span>
            </div>
            {comparisons.map((item) => (
              <div
                className={`comparison-row${item.accent ? " is-accent" : ""}`}
                role="row"
                key={item.name}
              >
                <strong role="cell">{item.name}</strong>
                <span role="cell">{item.signal}</span>
                <span role="cell">{item.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="media-section section-pad">
        <div className="media-copy">
          <div className="section-label">
            <span>04</span>
            <p>Platform context</p>
          </div>
          <h2>SO-101 leader–follower manipulation</h2>
          <p>
            The planned study uses an SO-101 leader to define arm motion and a
            follower equipped with a two-finger photonic-crystal tactile gripper.
            This open-source clip is included only as a temporary visual reference
            for the robot family.
          </p>
          <div className="media-disclaimer">
            <strong>Reference footage only</strong>
            <span>Not this project’s robot, sensor, calibration, or experiment.</span>
          </div>
        </div>
        <figure className="video-card">
          <video
            controls
            muted
            playsInline
            preload="metadata"
            aria-label="Open-source SO-101 motor setup reference video"
          >
            <source
              src="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/lerobot/setup_motors_so101_2.mp4"
              type="video/mp4"
            />
          </video>
          <figcaption>
            SO-101 setup footage by Hugging Face, from the LeRobot documentation
            media dataset (CC BY-NC-SA 4.0).
          </figcaption>
        </figure>
      </section>

      <section className="status-section section-pad" id="status">
        <div className="status-heading">
          <div className="section-label on-dark">
            <span>05</span>
            <p>Evidence status</p>
          </div>
          <div>
            <span className="status-kicker">Result-free preview</span>
            <h2>Software is verified. Scientific evidence is pending.</h2>
          </div>
        </div>

        <div className="status-grid">
          {statusItems.map((item) => (
            <article key={item.title}>
              <div className={`status-dot ${item.state}`} aria-hidden="true" />
              <span>{item.state === "verified" ? "Verified" : "Pending"}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>

        <div className="result-empty">
          <div className="result-glyph" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div>
            <strong>Experimental results pending</strong>
            <p>
              No measured characterization or robot-performance result is
              presented on this website. Synthetic smoke tests validate software
              and interfaces only.
            </p>
          </div>
        </div>
      </section>

      <section className="boundaries-section section-pad">
        <div className="section-label">
          <span>06</span>
          <p>Claim boundaries</p>
        </div>
        <div className="boundaries-grid">
          <div>
            <h2>Designed to make a narrow claim honestly.</h2>
            <p>
              The project asks a robot-level utility question. It does not stretch
              unfinished hardware work into a transduction, force, or generalization
              claim.
            </p>
          </div>
          <ol>
            {boundaries.map((boundary, index) => (
              <li key={boundary}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{boundary}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="resources-section section-pad">
        <div className="resources-card">
          <div>
            <span className="resources-kicker">Resources</span>
            <h2>Built for traceable evidence.</h2>
            <p>
              Read the anonymous result-free manuscript now. Code, data, citation,
              and author metadata remain private until the evidence and review
              timeline permit release.
            </p>
          </div>
          <div className="resource-links">
            <a href="/paper-draft.pdf">
              <span>
                <small>PDF</small>
                Result-free draft
              </span>
              <b aria-hidden="true">↗</b>
            </a>
            <div className="resource-disabled">
              <span>
                <small>CODE</small>
                Private during review
              </span>
              <b>LOCKED</b>
            </div>
            <div className="resource-disabled">
              <span>
                <small>DATA</small>
                Pending collection
              </span>
              <b>PENDING</b>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div>
          <strong>Photonic-Crystal Tactile Feedback</strong>
          <p>Anonymous research preview · ICRA 2027 target</p>
        </div>
        <p className="footer-note">
          Academic page structure inspired by the Academic Project Astro
          Template, Academic Project Page Template, and Nerfies. Reference video
          attribution is retained above.
        </p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
