import Head from 'next/head'
import { PageTitle } from 'ui/components/Data-display/PageTitle/PageTitle'
import { SafeEnvironment } from 'ui/components/Feedbaack/SafeEnvironment/SafeEnvironment'
import { UserInformation } from 'ui/components/UseInformation/UseInformation';
import { TextFieldMask } from 'ui/components/inputs/TextFieldMask/TextFieldMask'
import {
  Button,
  Typography,
  Container,
  CircularProgress
} from '@material-ui/core'
import { ProfissionaisPaper } from 'ui/styles/pages/index.styled'
import { FormElementsContainer, ProfissionaisContainer } from 'ui/styles/pages/index.styled'
import { useIndex } from 'data/hooks/pages/useIndex.page';
export default function Home() {
  const
    { cep,
      setCep,
      cepValido,
      buscarProfissionais,
      erro,
      diaristas,
      buscaFeita,
      carregando,
      diaristasRestantes } = useIndex();
  return (
    <div>

      <SafeEnvironment />
      <PageTitle
        title={'Conheça os profissionais'}
        subtitle={'Preencha seu endereço e veja todos os profissionais!'}
      />
      <Container>

        <FormElementsContainer>
          <TextFieldMask
            mask={'99.999-999'}
            label={'Digite seu CEP'}
            fullWidth
            variant={'outlined'}
            value={cep}
            onChange={(event) => setCep(event.target.value)}
          />
          {erro && <Typography
            color={'error'}
          >
            {erro}
          </Typography>}

          <Button
            variant={'contained'}
            color={'secondary'}
            sx={{ width: '220px' }}
            disabled={!cepValido || carregando}
            onClick={() => buscarProfissionais(cep)}
          >
            {carregando ? <CircularProgress size={20} /> : 'Buscar'}
          </Button>
        </FormElementsContainer>

        {buscaFeita && (diaristas.length > 0 ?
          <ProfissionaisPaper>
            <ProfissionaisContainer>

              {diaristas.map((item, index) => {
                return (
                  <UserInformation
                    key={index}
                    name={item.nome}
                    picture={item.foto_usuario}
                    rating={item.reputacao}
                    description={item.cidade}

                  />
                )
              })}

            </ProfissionaisContainer>
            <Container sx={{ textAlign: 'center' }}>
              {diaristasRestantes > 0 && (
                <Typography sx={{ mt: 5 }}>
                  ...e mais {diaristasRestantes}
                  {diaristasRestantes > 1
                    ? ' profissionais atendem'
                    : ' profissional atende'}
                  ao seu endereço
                </Typography>
              )}
              <Button
                variant={'contained'}
                color={'secondary'}
                sx={{ mt: 5 }}
              >
                Contratar um proficional
              </Button>
            </Container>
          </ProfissionaisPaper>
          :
          (
            <Typography align={'center'} color={'textPrimary'}>
              Ainda Não temos nenhuma diarista disponivel em sua Região
            </Typography>
          )
        )}
      </Container>

    </div>
  )
}
