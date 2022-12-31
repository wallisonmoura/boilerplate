import * as S from './styles'

const Main = () => {
  return (
    <S.Wrapper>
      <S.Logo src="/img/logo.svg" alt="Image de um átomo e React avançado" />
      <S.Title>React avançado</S.Title>
      <S.Description>
        Typescript, ReactJS, NextJS e Styled Components
      </S.Description>
      <S.Illustration
        src="/img/developer.svg"
        alt="Um desenvolvedor de frente para tela com código"
      />
    </S.Wrapper>
  )
}

export default Main
