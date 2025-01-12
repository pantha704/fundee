import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"] });

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1
          className={`text-5xl md:text-6xl font-bold mb-6 pt-20 py-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 ${oswald.className}`}
        >
          Empower Innovation Through FunDe
        </h1>
        <p className="text-xl mb-15 max-w-2xl mx-auto my-12">
          Join the revolution of decentralized finance. Fund projects you
          believe in, transparently and securely.
        </p>
        <div className="space-x-4">
          <Button
            asChild
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg"
          >
            <Link href="/projects">Explore Projects</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="bg-transparent border-2 border-white hover:bg-white hover:text-purple-900 px-8 py-3 rounded-full text-lg transition-colors"
          >
            <Link href="/projects">Start a Project</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Our Platform?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Decentralized & Secure"
            description="Leverage blockchain technology for transparent and secure fundraising."
            icon={<LockIcon className="w-12 h-12 mb-4" />}
          />
          <FeatureCard
            title="Global Reach"
            description="Connect with backers and innovators from around the world."
            icon={<GlobeIcon className="w-12 h-12 mb-4" />}
          />
          <FeatureCard
            title="Low Fees"
            description="Enjoy minimal platform fees, maximizing your fundraising potential."
            icon={<CoinIcon className="w-12 h-12 mb-4" />}
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <StepCard
            number={1}
            title="Create"
            description="Set up your project with details and funding goals."
          />
          <StepCard
            number={2}
            title="Share"
            description="Spread the word about your project to potential backers."
          />
          <StepCard
            number={3}
            title="Fund"
            description="Receive cryptocurrency contributions from supporters."
          />
          <StepCard
            number={4}
            title="Build"
            description="Bring your project to life with the raised funds."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join our community of innovators and supporters. Start funding or
          create your project today!
        </p>
        <Button
          asChild
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg"
        >
          <Link href="/projects">Get Started Now</Link>
        </Button>
      </section>
    </div>
  );
}

function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
      {icon}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function StepCard({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function LockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    </svg>
  );
}

function GlobeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function CoinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
