import { PageTitleContainer, PageTitleStyled, PageSubtitleStyled } from './styled'

interface PageTitleProps {
  title: string;
  subtitle?: string | JSX.Element;
}
export const PageTitle: React.FC<PageTitleProps> = (props) => {
  return (
    <PageTitleContainer>
      <PageTitleStyled>
        {props.title}
      </PageTitleStyled>
      <PageSubtitleStyled>
        {props.subtitle}
      </PageSubtitleStyled>
    </PageTitleContainer>
  )
}
