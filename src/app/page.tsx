import { Hero, WhoWeAre, WhyWeExist, StrategicPillars, FeaturedProjects, CommunityInvolvement, Partnerships, Donate, VisionMission, CoreValues, OurTeam, ClosingStatement } from '@/sections';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <WhoWeAre />
      <WhyWeExist />
      <StrategicPillars />
      <FeaturedProjects />
      <CommunityInvolvement />
      <Partnerships />
      <Donate />
      <VisionMission />
      <CoreValues />
      <OurTeam />
      <ClosingStatement />
    </main>
  );
}
