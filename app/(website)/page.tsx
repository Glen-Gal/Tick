import { Separator } from '@/components/ui/separator';
import Image from 'next/image';

export default async function Index() {
  return (
    <section className="space-y-6 pb-8 md:pb-12 lg:pb-32">
      <div className="container flex max-w-[72rem] pt-6 md:pt-10 lg:pt-32 h-banner-size flex-col items-center gap-4 text-center">
        <Image
          src={'/elephant_landing_2024.png'}
          width={500}
          height={324}
          className="h-auto w-80"
          alt="elephant_pic"
        />
        <h1 className="font-sans text-balance font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          Your Pocket Asana. Say hi to Tick
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:leading-8">
          For Web, Mobile, Mac & Windows &quot;On Website&quot;
        </p>
        <div className="">
          <a
            className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-8 rounded-md"
            href="/login"
          >
            Get Started
          </a>
        </div>
      </div>

      <Separator />

      <div className="flex flex-col items-center gap-4 py-16">
        <div className="pb-16 text-center">
          <h1 className="font-sans text-balance font-semibold text-3xl sm:text-5xl">
            A not so complex to-do-list
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:leading-8">
            We also built in some advanced features for you.
          </p>
        </div>

        <div className="grid grid-cols-2 w-full px-8 lg:px-0 gap-12">
          <div className="flex flex-col gap-3">
            <div className="bg-zinc-200 w-full h-96 rounded-sm overflow-hidden">
              <Image
                src="/developer_academy.jpg"
                width={905}
                height={500}
                className="h-full w-full object-cover opacity-90"
                alt="developer_academy"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold">Simple UI</h2>
              <p className="text-sm text-muted-foreground max-w-96">
                Simple is when you have achieved the root of all complexity
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="bg-zinc-200 w-full h-96 rounded-sm overflow-hidden">
              <Image
                src="/finetune_1.jpg"
                width={500}
                height={500}
                className="h-full w-full object-cover opacity-90"
                alt="finetune_1"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold">To-do, Doing and Done!</h2>
              <p className="text-sm text-muted-foreground max-w-96">
                Keep simple or sophisticated records with views, filters, tags,
                and more.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="bg-zinc-200 w-full h-96 rounded-sm overflow-hidden">
              <Image
                src="/openai_residency.jpg"
                width={889}
                height={500}
                className="h-full w-full object-cover opacity-90"
                alt="openai_residency"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold">Researched UX</h2>
              <p className="text-sm text-muted-foreground max-w-96">
                Access all of Notion&apos;s tools without touching your mouse to
                stay in flow.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="bg-zinc-200 w-full h-96 rounded-sm overflow-hidden">
              <Image
                src="/sora_gen.jpg"
                width={500}
                height={500}
                className="h-full w-full object-cover opacity-90"
                alt="sora_gen"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold">Drag & drop</h2>
              <p className="text-sm text-muted-foreground max-w-96">
                Get your ideas on the page, then rearrange. Our editor helps you
                structure your thoughts and plans.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      {/* Pricing */}
      <div className="flex flex-col items-center gap-4 py-16">
        <div className="pb-16 text-center">
          <h1 className="font-sans text-balance font-semibold text-3xl sm:text-5xl">
            Pricing, side-by-side
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:leading-8">
            You can try Tick for free. No credit card required. And also all
            features are unlocked
          </p>
        </div>
        <div className="flex items-center justify-center gap-12 w-full">
          <div className="flex flex-col justify-center w-80 border rounded-lg overflow-hidden">
            <div className="overflow-hidden bg-white px-8 py-6 border-b">
              {/* Logo */}
              <h2 className="text-2xl font-bold">Tick</h2>
              <p className="text-muted-foreground text-sm">
                The simple Kanban app
              </p>
            </div>
            <div className="flex flex-col min-h-96 bg-[#f9f5f1] px-8 py-6">
              <h2 className="text-5xl font-bold">Free</h2>
              <p className="text-sm text-muted-foreground">For individuals</p>

              {/* Create list below */}
              <ul className="list-none space-y-2 mt-8">
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-primary mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Ticks
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-primary mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Reminders
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-primary mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Simple
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-primary mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Real-time collaboration
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-primary mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Markdown support
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-primary mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Latest technologies
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col justify-center w-80 border rounded-lg overflow-hidden">
            <div className="overflow-hidden bg-white px-8 py-6 border-b">
              {/* Logo */}
              <h2 className="text-2xl font-bold">Asana</h2>
              <p className="text-muted-foreground text-sm">
                For organizing every corner of your life.
              </p>
            </div>
            <div className="flex flex-col min-h-96 bg-[#f9f5f1] px-8 py-6">
              <h2 className="text-5xl font-bold">$10.99</h2>
              <p className="text-sm text-muted-foreground">billed monthyly</p>

              {/* Create list below */}
              <ul className="list-none space-y-2 mt-8">
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-primary mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Ticks
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-primary mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Reminders
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-primary mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Complex
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-primary mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Web-clipper
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-primary mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Paywalls
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
