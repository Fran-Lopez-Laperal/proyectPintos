import { HeaderPages } from '../components/HeaderPages';
import { FetchNews } from '../components/FetchNews';
import historyHeader from '../assets/headers/historyHeader.jpeg';
import { useI18n } from '../hooks/useI18n';
import { FetchTimeline } from '../components/FetchTimeline';

export function History() {
  const { t, i18n } = useI18n();

  return (
    <main className="flex flex-col gap-12">
      <HeaderPages text={t('history.historyHeader-title')} textSize="text-2xl lg:text-6xl" image={historyHeader} />
      <section className="text-justify font-extrabold text-sm mx-6 lg:text-xl lg:mx-80">
        <p>{t('history.history-text-part1')}</p>
        <p>{t('history.history-text-part2')}</p>
        <p>{t('history.history-text-part3')}</p>
        <p>{t('history.history-text-part4')}</p>
        <p>{t('history.history-text-part5')}</p>
        <p>{t('history.history-text-part6')}</p>
      </section>

      <section className="flex flex-col p-6 gap-5 font-extrabold bg-corporative-color3 lg:bg-graycorporative-color lg:px-80 lg:p-0 lg:py-8">
        <h2 className="text-center text-3xl uppercase text-corporative-color2 px-20 border-b-2 border-corporative-color2 lg:text-6xl">
          {t('history.oGrupo-title')}
        </h2>
        <p className="text-justify text-sm lg:text-xl">{t('history.oGrupo-text')}</p>
        <h2 className="text-2xl uppercase text-corporative-color2 border-b-2 border-corporative-color2 mr-[140px] pt-6 lg:text-6xl lg:mr-[760px]">
          {t('history.oFazemos-title')}
        </h2>
        <p className="text-justify text-sm lg:text-xl">{t('history.oFazemos-text')}</p>
      </section>

      <section className="flex flex-col gap-5 p-6 font-extrabold text-justify lg:px-80 lg:text-center">
        <h2 className="text-center text-3xl uppercase text-corporative-color2 lg:text-6xl">fundaçao</h2>
        <div>
          <p>FERNANDO DA SILVA NOGUEIRA PINTO INICIOU A SUA CARREIRA DE EMPRESÁRIO COMO CONSTRUTOR CIVIL.</p>
          <p>CRIOU A SUA PRIMEIRA EMPRESA, EM XXX, DENOMINADA CONSTRUÇÕES PINTOS & PINHO, LDA.</p>
          <p>
            MOVIDO PELO ESPÍRITO EMPREENDEDOR, PELA LONGA EXPERIÊNCIA COMPROVADA, PELA CAPACIDADE DE LIDERANÇA E SUCESSO, FUNDOU COM OS SEUS QUATRO
            FILHOS A S. PINTOS – ENGENHARIA E CONSTRUÇÃO, S.A., A PRIMEIRA DO GRUPO.
          </p>
        </div>
      </section>

      <section className="flex flex-col items-center font-extrabold text-justify lg:px-80">
        {/* <h2 className="text-center text-3xl uppercase text-corporative-color2 lg:text-6xl">timeline</h2> */}
      </section>
      <FetchTimeline/>
      <FetchNews />
    </main>
  );
}
