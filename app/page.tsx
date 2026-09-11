import Image from "next/image";
import report from "../public/project/results.json";

const asset = (name: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/project/${name}`;
const plates = [
  { name: "sensor-design", title: "Inside the fingertip", width: 2200, height: 1321, caption: "Mechanical and optical design: housing, folding mirror, acrylic support, camera, white LEDs, internal support, elastomer and photonic-crystal layer. CAD and cross-section drawings describe construction; the contact image illustrates the optical response." },
  { name: "learning-system", title: "From demonstrations to closed-loop actions", width: 2200, height: 779, caption: "Leader–follower demonstrations combine global RGB, wrist RGB, tactile observations and robot state. The manuscript’s Diffusion Policy system encodes observation histories, predicts an action sequence, executes a short chunk and replans. This is a system architecture diagram, not a latency measurement." },
  { name: "object-hue-fields", title: "Eight objects. One structural-color representation.", width: 2200, height: 1188, caption: "Object photographs, raw tactile images and reference-relative circular Hue fields for ping-pong ball, battery, peanut, heat sink, LEGO, printed PLA, screw and PCB. The 3D plots visualize Hue values, not reconstructed physical height, depth or pressure." },
  { name: "successful-rollouts", title: "Representative successful trajectories", width: 2200, height: 2070, caption: "Whiteboard Wiping, Test-Tube Insertion and Perturbed Test-Tube Insertion. Time progresses left to right. These selected sequences illustrate behavior; quantitative outcomes are reported separately below." },
  { name: "failure-cases", title: "Failures remain part of the record", width: 2200, height: 2064, caption: "Representative failures include misgrasping, residual ink, missed release, object slip, wedging, misinsertion, stalled motion and sticking. Images are retained as supplied in the current manuscript, including original panel labels." },
];

export default function Home() {
  return <main>
    <header className="site-header">
      <a className="brand" href="#top"><span className="brand-mark">PC</span><span><strong>PCTac</strong><small>Structural-color touch</small></span></a>
      <nav aria-label="Primary navigation"><a href="#system">System</a><a href="#gallery">Observations</a><a href="#results">Results</a><a href="#resources">Resources</a></nav>
      <a className="header-link" href="#results">Project update ↘</a>
    </header>
    <section className="hero" id="top">
      <div className="hero-copy">
        <div className="eyebrow-row"><span className="eyebrow">Research project</span><span className="status-pill">Updated September 11, 2026</span></div>
        <h1>PCTac: <em>Direct Structural-Color Tactile Feedback</em> for Dexterous Manipulation</h1>
        <p className="hero-deck">A photonic-crystal fingertip brings contact-induced color changes directly into robot learning.</p>
        <p className="authors">Anonymous Authors <span>·</span> Research in progress</p>
        <div className="hero-actions"><a className="button button-primary" href="#results">Explore results ↓</a><a className="button button-secondary" href="#gallery">View project imagery ↓</a></div>
        <p className="evidence-note">Project photographs, manuscript figures and reported task counts. No stock footage or synthetic performance results.</p>
      </div>
      <figure className="project-hero-figure"><Image unoptimized priority src={asset("teaser.png")} width={2200} height={1408} alt="Photonic-crystal film changing color, a PCTac-equipped gripper and robot integration" /><figcaption>From mechanochromic film to an instrumented robot fingertip. <a href={asset("teaser.pdf")}>Original figure ↗</a></figcaption></figure>
    </section>
    <section className="section-pad" id="system">
      <div className="section-label"><span>01</span><p>The sensing system</p></div>
      <div className="question-grid"><h2>Contact becomes color.<br />Color becomes an observation.</h2><div className="question-copy"><p>PCTac observes a continuous structural-color field at one instrumented fingertip, opposite a passive contact surface. Reference-relative circular Hue represents contact-induced appearance changes without interpreting them as calibrated force or pressure.</p><p>The figures below document the current manuscript’s hardware and robot-learning system. Robot task results describe the evaluated complete systems; they do not, by themselves, isolate sensor superiority or establish faster slip response.</p></div></div>
      {plates.slice(0, 2).map(plate => <ProjectFigure key={plate.name} {...plate} />)}
    </section>
    <section className="section-pad project-gallery" id="gallery">
      <div className="section-label"><span>02</span><p>Project imagery</p></div><h2>Touch, manipulation and recovery.</h2>
      {plates.slice(2).map(plate => <ProjectFigure key={plate.name} {...plate} />)}
    </section>
    <section className="section-pad" id="results">
      <div className="section-label"><span>03</span><p>Manuscript-reported results</p></div><h2>Three contact-rich tasks.</h2>
      <p className="project-intro">Successes / 30 trials per task, transcribed from Table I of the current manuscript. Missing entries are not estimated or treated as zero.</p>
      <div className="results-scroll" tabIndex={0} role="region" aria-label="Task success results; scroll horizontally on small screens"><table className="results-table"><caption>System-level task success · manuscript snapshot 446c867</caption><thead><tr><th scope="col">Policy / tactile input</th>{report.tasks.map(t => <th scope="col" key={t}>{t}</th>)}<th scope="col">Overall</th></tr></thead><tbody>{report.results.map(row => {
        const total = row.successes.every(n => n !== null) ? row.successes.reduce<number>((s, n) => s + (n ?? 0), 0) : null;
        return <tr key={row.policy} className={row.policy === "PCTac Hue" ? "highlight-result" : undefined}><th scope="row">{row.policy}</th>{row.successes.map((n, i) => <td key={i}>{n === null ? <span className="pending-value">Not reported</span> : <>{n}/30 <small>({(n / 30 * 100).toFixed(1)}%)</small></>}</td>)}<td>{total === null ? <span className="pending-value">Incomplete</span> : <>{total}/90 <small>({(total / 90 * 100).toFixed(1)}%)</small></>}</td></tr>;
      })}</tbody></table></div>
      <div className="project-evidence"><h3>How to read these numbers</h3><p>PCTac Hue reports 24/30, 28/30 and 16/30 successes across the three tasks. These descriptive counts are not a significance test. Episode-level records, training-seed variation and confidence intervals were not independently re-audited for this website update.</p><p>Marker-based Wedge is a research baseline, not a commercial product claim. Its marker-input insertion results remain missing in the source. No force-calibration, inference-latency or slip-response advantage is inferred from this table.</p></div>
    </section>
    <section className="section-pad resources-section" id="resources"><div className="resources-card"><div><span className="resources-kicker">Traceable resources</span><h2>Figures and reported data.</h2><p>Download the table and provenance manifest. Every figure above links to a PDF copy with identity metadata removed; figure content is unchanged. The source repository remains private; these website resources are public.</p><p>Raw episodes, model weights, local configurations and the full manuscript are not included. Placeholder and superseded duplicate figures are excluded from the gallery. No verified standalone project video is bundled in this release.</p></div><div className="resource-links"><a href={asset("results.csv")} download>Results table · CSV ↗</a><a href={asset("results.json")} download>Results and evidence status · JSON ↗</a><a href={asset("provenance.json")} download>Figure sources and checksums ↗</a></div></div></section>
    <footer><div><strong>PCTac</strong><p>Anonymous research project · Updated September 2026</p></div><p className="footer-note">Academic page structure inspired by Academic Project Astro Template, Academic Project Page Template and Nerfies.</p><a href="#top">Back to top ↑</a></footer>
  </main>;
}

function ProjectFigure({ name, title, caption, width, height }: typeof plates[number]) {
  return <figure className="project-plate"><div className="plate-heading"><h3>{title}</h3><a href={asset(`${name}.pdf`)}>Original PDF ↗</a></div><a href={asset(`${name}.png`)} aria-label={`Open full-size image: ${title}`}><Image unoptimized src={asset(`${name}.png`)} width={width} height={height} alt={caption} loading="lazy" /></a><figcaption>{caption}</figcaption></figure>;
}
