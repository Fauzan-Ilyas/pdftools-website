import AppLayout from "@/layouts/AppLayout";
import Wrapper from "@/components/Wrapper";
import Hero from "@/components/welcome/Hero";
import Services from "@/components/welcome/Services";

export default function Welcome() {
  return (
    <AppLayout title="Online PDF Tools" footer={true}>
      <Wrapper className="max-w-screen-xl sm:py-8">
        <Hero />
        <Services />
      </Wrapper>
    </AppLayout>
  );
};
