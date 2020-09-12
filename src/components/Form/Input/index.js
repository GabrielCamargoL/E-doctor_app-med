import React from 'react';
import {
  Container,
  Label,
  ErrorLabel,
  StyledInput,
  InputView,
  IconLeft,
  IconRight,
} from './styles';

const Input = ({
  value,
  label,
  placeholder,
  placeholderError,
  placeholderTextColor,
  error,
  iconLeft,
  iconRight,
  iconSize = 20,
  iconColor = '#771a22',
  textAlign,
  width,
  borderColor,
  onIconLeftPress,
  onIconRightPress,
  ...props
}) => {
  return (
    <Container width={width}>
      {label && <Label>{label ? label : null}</Label>}
      {error ? <ErrorLabel>{error}</ErrorLabel> : null}
      {value && placeholderError ? (
        <ErrorLabel>{placeholderError}</ErrorLabel>
      ) : null}
      <InputView
        error={!!error}
        placeholderError={!!placeholderError}
        borderColor={borderColor}>
        {iconLeft && (
          <IconLeft
            name={iconLeft}
            size={iconSize}
            color={iconColor}
            onPress={onIconLeftPress}
          />
        )}
        <StyledInput
          value={value}
          placeholder={placeholderError ? placeholderError : placeholder}
          placeholderTextColor={
            placeholderTextColor
              ? placeholderTextColor
              : !!error || !!placeholderError
              ? '#d72200'
              : '#a1a1a1'
          }
          textAlign={textAlign}
          error={!!error}
          iconLeft={!!iconLeft}
          iconRight={!!iconRight}
          {...props}
        />
        {iconRight && (
          <IconRight
            name={iconRight}
            size={iconSize}
            color={iconColor}
            onPress={onIconRightPress}
          />
        )}
      </InputView>
    </Container>
  );
};

export default Input;
