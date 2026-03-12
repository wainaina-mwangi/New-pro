
import StatCounter from "./StatCounter";





export default function LandingPage() {
  return (
    <section style={{ display: 'flex', gap: '50px', padding: '50px' }}>
      <div>
        <StatCounter target={500} />
        <p>Projects Completed</p>
      </div>
      <div>
        <StatCounter target={1200} />
        <p>Happy Clients</p>
      </div>
      <div>
        <StatCounter target={50} />
        <p>Awards Won</p>
      </div>
    </section>
  );
}