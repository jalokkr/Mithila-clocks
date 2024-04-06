import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const people = [
  {
    name: "Anil Jha",
    role: "Founder",
    imageUrl:
      "https://st3.depositphotos.com/1017228/18878/i/450/depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg",
  },
];

export default function TeamAndVision() {
  return (
    <>
      <div className="relative overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
        <div className="mt-4 mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                {/* <p className="text-base font-semibold leading-7 text-indigo-600">
                  Deploy faster
                </p> */}
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  A better solution of clock's design
                </h1>
                {/* <p className="mt-6 text-xl leading-8 text-gray-700">
                  At the heart of our vision lies a commitment to blend the
                  elegance of traditional clock aesthetics with the
                  functionality and flair of modern design. Our approach
                  creatively marries the rich heritage of classic timepieces
                  with contemporary innovation, ensuring every clock is a
                  masterpiece that enhances any space.
                </p> */}
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src="https://i.ibb.co/TwBKhv9/DALL-E-2024-04-06-16-26-05-Design-a-logo-for-a-local-clock-brand-named-Mithila-Clock-The-logo-should.png"
              alt=""
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <p>
                  At Mithila Clock, our vision extends beyond mere timekeeping.
                  We aim to embed the rich tapestry of Mithila art into the
                  essence of every clock we craft. By innovating within the
                  bounds of tradition, we seek to create timepieces that are not
                  just functional but also carry the soul of our heritage. Our
                  unique approach involves integrating modern design principles
                  with the intricate patterns and vibrant colors of Mithila
                  painting, making each clock a testament to both past and
                  present.
                </p>
                {/* <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <CloudArrowUpIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Push to deploy.
                      </strong>{" "}
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores impedit perferendis suscipit eaque, iste dolor
                      cupiditate blanditiis ratione.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <LockClosedIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        SSL certificates.
                      </strong>{" "}
                      Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                      irure qui lorem cupidatat commodo.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <ServerIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Database backups.
                      </strong>{" "}
                      Ac tincidunt sapien vehicula erat auctor pellentesque
                      rhoncus. Et magna sit morbi lobortis.
                    </span>
                  </li>
                </ul> */}
                <p className="mt-8">
                  Inspiration for our clocks comes from deep within the heart of
                  Mithila culture, where art is a language spoken through
                  detailed brush strokes and vivid palettes. Mithila art, known
                  for its complex geometrical patterns and symbolic imagery,
                  tells stories of nature, mythology, and social events. By
                  incorporating these elements into our clock designs, we're
                  bringing the warmth, richness, and depth of our culture into
                  homes around the world. It's our way of keeping the tradition
                  alive, relevant, and accessible to all.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                  Global Aspirations:
                </h2>
                <p className="mt-6">
                  While our roots are firmly planted in local soil, our
                  aspirations are global. We envision Mithila Clock becoming a
                  bridge between local craftsmanship and the global marketplace,
                  showcasing the universal appeal of Mithila art. Our commitment
                  to quality, sustainability, and cultural authenticity speaks
                  to a worldwide audience that values artistry and storytelling.
                  Through our clocks, we aim to connect with people across
                  different cultures, sharing a piece of our heritage and
                  inviting the world to partake in the beauty of Mithila.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet our team
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Meet our team: a small but mighty group of individuals whose
              expertise and enthusiasm power our local company. Each team member
              brings a unique set of skills and a shared commitment to
              excellence, driving our mission to deliver outstanding value to
              our community. Together, we're dedicated to making a positive
              impact and achieving great results, one project at a time.
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img
                    className="h-22 w-22 rounded-full"
                    src={person.imageUrl}
                    alt=""
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">
                      {person.role}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
