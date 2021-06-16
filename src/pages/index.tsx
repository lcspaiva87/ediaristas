import Head from 'next/head'
import { PageTitle } from 'ui/components/Data-display/PageTitle/PageTitle'
import { SafeEnvironment } from 'ui/components/Feedbaack/SafeEnvironment/SafeEnvironment'
import { UserInformation } from 'ui/components/UseInformation/UseInformation';
export default function Home() {
  return (
    <div>

      <SafeEnvironment />
      <PageTitle
        title={'Conheça os profissionais'}
        subtitle={'Prencha seu endereço e veja todos os profissionais'}
      />
      <UserInformation
        name={'lucas'}
        picture={'https://github.com/lcspaiva87.png'}
        rating={3}
        description={'Ceara, Fortaleza'}
      />
    </div>
  )
}
