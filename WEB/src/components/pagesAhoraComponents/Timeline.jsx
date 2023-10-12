import { FetchTimeline } from '../components/FetchTimeline';

export function Timeline() {
  return (
    <section className="flex flex-col justify-center items-center m-6 mt-12 ">
      <section className="w-[50%]">
        <FetchTimeline />
      </section>
    </section>
  );
}
