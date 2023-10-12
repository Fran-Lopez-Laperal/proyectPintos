import { HeaderPages } from '../components/HeaderPages';
import { Award } from '../components/Award';
import { Sections } from '../components/Sections';
import planearHeader from '../assets/headers/historyHeader.jpeg';
import { useI18n } from '../hooks/useI18n';

const PlanAndbuildSections = ({ title, text, styles }) => {
  return (
    <section className={`flex flex-col font-extrabold ${styles}`}>
      <h2 className="p-3 text-center text-3xl uppercase text-corporative-color2 bg-corporative-color3 lg:bg-white lg:text-6xl lg:py-6">{title}</h2>
      <p className="text-justify p-3 text-sm lg:text-xl lg:font-semibold lg:px-20 lg:py-8">{text}</p>
    </section>
  );
};

export function PlanAndbuild() {
  const { t, i18n } = useI18n();

  return (
    <main className="flex flex-col">
      <HeaderPages text={t('planAndBuild.planAndBuildHeader')} textSize="text-xl lg:text-4xl" image={planearHeader} />

      <header className="flex justify-center items-center relative lg:flex lg:justify-center mt-10 lg:mt-12 lg:mx-36">
        <h2 className="font-dancing text-xl pb-[6px] px-1 relative z-10 bg-white lg:text-5xl lg:px-4">{t('planAndBuild.planAndBuild-title')}</h2>
        <p className="absolute left-0 right-0 h-0.5 lg:h-1 bg-corporative-color2 z-0"></p>
      </header>

      <main className="flex flex-col gap-16">
        <section className="flex justify-center text-center font-extrabold text-xs uppercase px-6 pt-4 lg:text-2xl lg:mx-36 lg:py-20">
          <p>{t('planAndBuild.planAndBuild-text')}</p>
        </section>

        <Sections
          title={t('planAndBuild.responsabilities.title')}
          text={t('planAndBuild.responsabilities.text')}
          bg="bg-corporative-color3"
          styles="lg:p-12"
          underline="border-b-2 border-corporative-color2 lg:border-b-4 lg:pt-4"
          textStyles="text-center"
        />

        <Sections
          title={t('planAndBuild.sustainability.title')}
          text={t('planAndBuild.sustainability.text')}
          bg="lg:bg-[#62CB311A]"
          styles="lg:p-12"
          textStyles="text-center"
        />

        <Sections
          title={t('planAndBuild.certifications.title')}
          text={
            <>
              {t('planAndBuild.certifications.text-part1')}
              <br />
              {t('planAndBuild.certifications.text-part2')}
            </>
          }
          textStyles="text-center"
        />

        <section className="flex flex-col gap-4 font-extrabold bg-corporative-color3">
          <h2 className="mx-3 pt-3 text-center text-3xl uppercase text-corporative-color2 border-b-2 border-corporative-color2 lg:border-none lg:text-6xl">
            {t('planAndBuild.awards.title')}
          </h2>
          <section className="flex flex-col gap-12 pt-4 bg-white lg:grid lg:grid-cols-4 lg:gap-2 lg:px-80 lg:pt-12">
            <Award title={t('planAndBuild.awards.award-title1')} image={planearHeader} />
            <Award title={t('planAndBuild.awards.award-title2')} image={planearHeader} />
            <Award title={t('planAndBuild.awards.award-title3')} image={planearHeader} />
            <Award title={t('planAndBuild.awards.award-title4')} image={planearHeader} />
          </section>
        </section>

        <section className="flex flex-col gap-8 pb-12 lg:grid lg:grid-cols-3 lg:px-48 lg:pb-24">
          <PlanAndbuildSections title={t('planAndBuild.mission.title')} text={t('planAndBuild.mission.text')} />
          <PlanAndbuildSections
            title={t('planAndBuild.vision.title')}
            text={t('planAndBuild.vision.text')}
            styles="lg:border-r-4 lg:border-l-4 lg:border-corporative-color2"
          />
          <PlanAndbuildSections title={t('planAndBuild.values.title')} text={t('planAndBuild.values.text')} />
        </section>
      </main>
    </main>
  );
}
