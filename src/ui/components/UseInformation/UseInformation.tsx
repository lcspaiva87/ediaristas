import React from 'react'
import {
  AvatarStyled,
  RatingStyled,
  UserDescription,
  UserInformationContainer,
  UserName
} from './styled'
interface UserInformationProps {
  picture: string;
  name: string;
  rating: number;
  description?: string;
}
export const UserInformation: React.FC<UserInformationProps> = ({
  name, picture, rating, description,
}) => {
  return (
    <UserInformationContainer>
      <AvatarStyled src={picture}> {name}</AvatarStyled>
      <UserName>{name}</UserName>
      <RatingStyled readOnly value={rating} />
      <UserDescription >{description}</UserDescription >

    </UserInformationContainer>

  )
}
