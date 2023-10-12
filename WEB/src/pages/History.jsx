import { HeaderPages } from '../components/HeaderPages';
import { FetchNews } from '../components/FetchNews';
import historyHeader from '../assets/headers/historyHeader.jpeg';
import { useI18n } from '../hooks/useI18n';
// import { FetchTimeline } from '../components/FetchTimeline';

export function History() {
  const { t, i18n } = useI18n();

  return (
    <main className="flex flex-col gap-12">
      <HeaderPages text={t('history.historyHeader-title')} textSize="text-2xl lg:text-6xl" image={historyHeader} />
      <section className="text-justify font-extrabold text-sm mx-6 lg:text-xl lg:mx-80 lg:my-16">
        <p>{t('history.history-text-part1')}</p>
        <p>{t('history.history-text-part2')}</p>
        <p>{t('history.history-text-part3')}</p>
        <p>{t('history.history-text-part4')}</p>
        <p>{t('history.history-text-part5')}</p>
        <p>{t('history.history-text-part6')}</p>
      </section>

      <section className="flex flex-col p-6 gap-5 font-extrabold bg-corporative-color3 lg:bg-graycorporative-color lg:px-80 lg:p-0 lg:py-8">
        <h2 className="text-center text-3xl uppercase text-corporative-color2 px-20 border-b-2 border-corporative-color2 lg:text-6xl">
          {t('history.group.title')}
        </h2>
        <p className="text-justify text-sm lg:text-xl">{t('history.group.text')}</p>
        <h2 className="text-2xl uppercase text-corporative-color2 border-b-2 border-corporative-color2 mr-[140px] pt-6 lg:text-6xl lg:mr-[760px]">
          {t('history.weDo.title')}
        </h2>
        <p className="text-justify text-sm lg:text-xl">{t('history.weDo.text')}</p>
      </section>

      <section className="flex flex-col gap-5 p-6 font-extrabold text-justify lg:px-80 lg:text-center uppercase">
        <h2 className="text-center text-3xl text-corporative-color2 lg:text-6xl">{t('history.foundation.title')}</h2>
        <div>
          <p>{t('history.foundation.text-part1')}</p>
          <p>{t('history.foundation.text-part2')}</p>
          <p>{t('history.foundation.text-part3')}</p>
        </div>
      </section>

      {/* <FetchTimeline /> */}
      <FetchNews />
    </main>
  );
}
