import TeamCard from '../components/TeamCard';

const teamMembers = [
  {
    name: 'Alexander Hughes',
    role: 'CEO & Co-Founder',
    image: 'https://www.loremfaces.net/256/id/1.jpg',
  },
  {
    name: 'Marc Williams',
    role: 'CTO & Co-Founder',
    image: 'https://www.loremfaces.net/256/id/2.jpg',
  },
  {
    name: 'Marcus Reid',
    role: 'Chief Revenue Officer',
    image: 'https://www.loremfaces.net/256/id/3.jpg',
  },
  {
    name: 'Priyanka Sharma',
    role: 'VP of Engineering',
    image: 'https://www.loremfaces.net/256/id/4.jpg',
  },
  {
    name: 'Scott Martin',
    role: 'Head of Finance',
    image: 'https://www.loremfaces.net/256/id/5.jpg',
  },
  {
    name: 'Liam Chen',
    role: 'Chief Operations Officer',
    image: 'https://www.loremfaces.net/256/id/1.jpg',
  },
];

export default function TeamsSection() {
  return (
    <section className="w-full bg-[#08090D] flex justify-center">
      <div className="w-full max-w-[1180px] px-4 sm:px-6 py-10 sm:py-14">
        <div className="w-full max-w-[1100px] mx-auto">
          <div className="mb-[20px]">
            <p className="font-['Inter'] font-semibold text-[11px] leading-[16.5px] tracking-[1.54px] uppercase text-[#6CE8D4]">
              Leadership Team
            </p>

            <h2 className="mt-[8px] font-['Inter'] font-extrabold text-[26px] sm:text-[30px] leading-tight tracking-[-0.72px] text-[#FFFFFF]">
              Operators and engineers.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-[18px]">
            {teamMembers.map((member) => (
              <TeamCard
                key={member.name}
                image={member.image}
                name={member.name}
                role={member.role}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}